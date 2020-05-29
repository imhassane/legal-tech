const pool = require('./database');

const MEMBER_CONTACT = `
    SELECT
        con_id as id,
        con_email as email,
        con_telephone as telephone,
        con_address as address,
        con_facebook as facebookId,
        con_twitter as twitterId,
        con_instagram as instagramId
    FROM t_contact_con
    WHERE cre_id = $1
`;

module.exports = {
    Member: {
        contact: async (member) => {
            const { rows } = await pool.query(MEMBER_CONTACT, [member.id]);
            if(!rows.length)
                throw new Error("Ce contact n'existe pas");
            return rows[0];
        }
    }
};