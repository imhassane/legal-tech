const pool = require('./database');

const ADD_EDUCATION = `
    INSERT INTO t_education_edu(edu_name, edu_type, edu_year, cre_id)
    VALUES ($1, $2, $3, $4)
`;

const GET_EDUCATION = `
    SELECT
        edu_name as school,
        edu_type as type,
        edu_year as year,
        edu_inserted_at as insertedAt,
        edu_updated_at as updatedAt
    FROM t_education_edu
    WHERE cre_id = $1
    ORDER BY edu_year DESC
`;

const MEMBER_HAS_FORMATIONS = `
    SELECT COUNT(*) AS exists
    FROM t_education_edu
    WHERE cre_id = $1
`;

module.exports = {
    Member: {
        formations: async (member) => {
            const { rows } = await pool.query(GET_EDUCATION, [member.id]);
            return rows;
        },
        hasEducation: async (member) => {
            let hasEducation = false;
            const { rows } = await pool.query(MEMBER_HAS_FORMATIONS, [member.id]);
            if(rows.length && parseInt(rows[0].exists) > 0)
                hasEducation = true;
            return hasEducation;
        }
    },
    Mutation: {
        newEducation: async (_parent, data, {user}) => {
            if(!user)
                throw new Error("Vous devez vous connecter pour ajouter cette formation");

            data = [data.name, data.type, data.year, user];
            await pool.query(ADD_EDUCATION, data);
            return `La formation ${data[0]} a été ajoutée`;
        },
        updateEducation: async (_parent, data, {user}) => {
            if(!user)
                throw new Error("Vous devez vous connecter pour modifier votre formation");
            return "La formation a été mise à jour";
        }
    }
};
