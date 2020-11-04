const pool = require('./database');

const INSERT_COMPANY = `
    INSERT INTO t_company_com(com_name, com_description, com_prefecture, com_identification, com_created_at)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING
        com_id as id,
        com_name as name,
        com_description as description,
        com_prefecture as prefecture,
        com_created_at as createdAt
`;

const VERIFY_EXISTS = `
    SELECT
        COUNT(com_identification) as exists
    FROM t_company_com
    WHERE com_identification = $1
`;

const COMPANIES = `
    SELECT
        com_id as id,
        com_name as name,
        com_description as description,
        com_prefecture as prefecture,
        com_cover as cover,
        com_created_at as createdAt,
        com_inserted_at as insertedAt,
        com_updated_at as updatedAt
    FROM t_company_com
    ORDER BY id DESC
    OFFSET $1 LIMIT $2
`;

const COMPANY_MEMBERS = `
    SELECT
        cre_id as id,
        mem_first_name as firstName,
        mem_last_name as lastName,
        mem_avatar as avatar,
        entry_date as entryDate,
        end_date as endDate,
        status
    FROM t_member_mem
    JOIN t_credentials_cre USING (cre_id)
    JOIN tj_member_company USING (cre_id)
    WHERE com_id = $1
    OFFSET $2 LIMIT $3
`;

const MEMBER_COMPANY = `
    SELECT
        com_id as id,
        com_name as name,
        com_description as description,
        com_prefecture as prefecture,
        com_cover as cover,
        com_created_at as createdAt,
        com_inserted_at as insertedAt,
        com_updated_at as updatedAt,
        entry_date as entryDate,
        end_date as endDate,
        status
    FROM t_company_com
    JOIN tj_member_company USING (com_id)
    WHERE cre_id = $1
    ORDER BY end_date DESC
`;

module.exports = {
    Member: {
      async companies(member) {
          let { rows } = await pool.query(MEMBER_COMPANY, [member.id]);
          if(!rows.length)
              return null;

          rows = rows.map(r => {
              const entryDate = r.entrydate;
              delete r.entrydate;

              const endDate = r.enddate;
              delete r.enddate;

              const status = r.status;
              delete r.status;

              return {
                  entryDate, endDate, status,
                  company: { ...r }
              };
          });

          let current = [], out = [];
          current = rows[0];

          if(rows.length > 1)
            out = rows.splice(1);

          return { current, out, all: [current, ...rows] };
      }
    },
    Company: {
      async members(company, {start, limit}) {
        let { rows } = await pool.query(COMPANY_MEMBERS, [company.id, start, limit]);
        let current = [], out = [];

        rows = rows.map(r => {
            const entryDate = r.entrydate;
            delete r.entrydate;

            const endDate = r.enddate;
            delete r.enddate;

            const status = r.status;
            delete r.status;

            r.firstName = r.firstname;
            delete r.firstname;

            r.lastName = r.lastname;
            delete r.lastname;

            const member = {
                entryDate, endDate, status,
                member: { ...r }
            };
            if(endDate)
                out.push(member);
            else
                current.push(member);
            return member;
        });
        return { current, out, all: rows};
      }
    },
    Query: {
        async companies(_, {start, limit}) {
            const { rows } = await pool.query(COMPANIES, [start, limit]);
            return rows;
        }
    },
    Mutation: {
        async newCompany(_parent, {data}, {user, permissions}) {
            if(!user)
                throw new Error("Vous devez vous connecter pour ajouter une entreprise");

            if(!(permissions.includes('SUPREME') || permissions.includes('ADD_COMPANY')))
                throw new Error("Vous n'avez pas les permisions nécessaires pour ajouter cette entreprise");

            const exists = await pool.query(VERIFY_EXISTS, [data.identification]);
            if(parseInt(exists.rows[0].exists))
                throw new Error("Cette entreprise est déjà enregistrée");

            data = [data.name, data.description, data.prefecture, data.identification, data.createdAt];

            const { rows } = await pool.query(INSERT_COMPANY, data);
            const company = rows[0];
            if(company.createdat) {
                company.createdAt = company.createdAt;
                delete company.createdAt;
            }

            return company;
        },

    }
};
