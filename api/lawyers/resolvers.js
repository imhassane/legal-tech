const pool = require('./database');

const PREFECTURE = `
    SELECT
        lin_prefecture as prefecture
    FROM t_lawyer_info_lin
    WHERE cre_id = $1
`;

const SERMON_DATE = `
    SELECT
        lin_sermon_date as sermonDate
    FROM t_lawyer_info_lin
    WHERE cre_id = $1
`;

const VERIFY_LAWYER_EXISTS = `
    SELECT
        COUNT(cre_id) as exists
    FROM t_lawyer_info_lin
    WHERE cre_id = $1
`;

const ADD_LAWYER_INFORMATIONS = `
    INSERT INTO t_lawyer_info_lin
    VALUES ($1, $2, $3);
`;

const UPDATE_PREFECTURE = `
    UPDATE t_lawyer_info_lin
        SET lin_prefecture = $2
    WHERE cre_id = $1
`;

const UPDATE_SERMON = `
    UPDATE t_lawyer_info_lin
        SET lin_sermon_date = $2
    WHERE cre_id = $1
`;

const UPDATE_LAWYER = `
    UPDATE t_lawyer_info_lin
        SET lin_prefecture = $2,
            lin_sermon_date = $3
    WHERE cre_id = $1
`;

module.exports = {
    Member: {
        prefecture: async (member) => {
            const { rows } = await pool.query(PREFECTURE, [member.id]);
            if(rows.length)
                return rows[0].prefecture;
            return "Conakry";
        },
        sermonDate: async (member) => {
            const { rows } = await pool.query(SERMON_DATE, [member.id]);
            if(rows.length)
                return rows[0].sermondate;
            return new Date();
        }
    },
    Mutation: {
        addLawyerInformations: async (_parent, data, {permissions, user, pool}) => {
            if(!(data.prefecture && data.sermonDate)) {
                throw new Error("Veuillez entrez toutes les informations nécessaires");
            }
            data = { ...data, id: parseInt(data.id) };
            // The ID field is not required if the user logged in
            // is the one updating his data.
            if(!data.id && user)
                data.id = user;
            else if (data.id && !user)
                throw new Error("Vous devez être connecté pour éffectuer cette action");

            const { rows } = await pool.query(VERIFY_LAWYER_EXISTS, [data.id]);
            if(rows[0].exists)
                throw new Error("Cet avocat a déjà ajouté ses informations");

            data = [data.id, data.prefecture, data.sermonDate];

            if(user && user === data[0]) {
                await pool.query(ADD_LAWYER_INFORMATIONS, data);
            } else {
                // If the user logged in needs to update another account,
                // he should have the required permissions.
                if(permissions && permissions.includes("SUPREME")) {
                    await pool.query(ADD_LAWYER_INFORMATIONS, data);
                } else {
                    throw new Error("Vous n'avez pas les permissions nécessaires pour modifier les informations de cet avocat");
                }
            }

            return {};
        },
        updateLawyerInformations: async (_parent, data, {pool, user, permissions}) => {
            const infos = data;

            data = { ...data, id: parseInt(data.id) };
            // The ID field is not required if the user logged in
            // is the one updating his data.
            if(!data.id && user)
                data.id = user;
            else if (data.id && !user)
                throw new Error("Vous devez être connecté pour éffectuer cette action");

            let query = null;
            if(infos.prefecture && infos.sermonDate) {
                query = UPDATE_LAWYER;
                data = [data.id, data.prefecture, data.sermonDate];

            } else if(infos.prefecture) {
                query = UPDATE_PREFECTURE;
                data = [data.id, data.prefecture];

            } else if(infos.sermonDate) {
                query = UPDATE_SERMON;
                data = [data.id, data.sermonDate];
            }

            if(!query)
                throw new Error("Veuillez entrer les informations à modifier");

            if(user && user === data[0]) {
                await pool.query(query, data);

            } else {
                // If the user logged in needs to update another account,
                // he should have the required permissions.
                if(permissions && permissions.includes("SUPREME")) {
                    await pool.query(query, data);
                } else {
                    throw new Error("Vous n'avez pas les permissions nécessaires pour modifier les informations de cet avocat");
                }
            }

            return {};
        }
    }
}