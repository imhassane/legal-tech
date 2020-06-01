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

module.exports = {
    Mutation: {
        async newCompany(_parent, {data}, {user, permissions}) {
            if(!user)
                throw new Error("Vous devez vous connecter pour ajouter une entreprise");

            if(!(permissions.includes('SUPREME') || permissions.includes('ADD_COMPANY')))
                throw new Error("Vous n'avez pas les permisions nécessaires pour ajouter cette entreprise");

            data = [data.name, data.description, data.prefecture, data.identification, data.createdAt];

            const { rows } = await pool.query(INSERT_COMPANY, data);
            const company = rows[0];
            if(company.createdat) {
                company.createdAt = company.createdAt;
                delete company.createdAt;
            }

            return company;
        }
    }
};
