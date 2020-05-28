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
    }
}