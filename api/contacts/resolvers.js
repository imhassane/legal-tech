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

const VERIFY_CONTACT_EXISTS = `
    SELECT
        COUNT(cre_id) AS exists
    FROM t_contact_con
    WHERE cre_id = $1
`;

const ADD_MEMBER_CONTACT = `
    INSERT INTO t_contact_con (cre_id, con_telephone, con_email, con_address, con_facebook, con_twitter, con_instagram, con_website)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING
        con_id          as id,
        con_telephone   as telephone,
        con_email       as email,
        con_address     as address,
        con_facebook    as facebookID,
        con_twitter     as twitterID,
        con_instagram   as instagramID,
        con_website     as website
`;

module.exports = {
    Member: {
        contact: async (member) => {
            const { rows } = await pool.query(MEMBER_CONTACT, [member.id]);
            if(!rows.length)
                return null;
            return rows[0];
        }
    },
    Mutation: {
        newUserContact: async (_parent, {id, data}, {user, permissions}) => {
            if(!user)
                throw new Error("Vous devez vous connecter pour éffectuer cette action");

            if(id && user !== id) {
                if (!permissions.includes("SUPREME") || !permissions.includes("ADD_CONTACT")) {
                    throw new Error("Vous n'avez pas les permissions nécessaires pour ajouter un contact");
                }
            }

            const exists = await pool.query(VERIFY_CONTACT_EXISTS, [id || user]);
            if(exists.rows[0].exists)
                throw new Error("Cet avocat a déjà mis à jour ses contacts");

            data = [user, data.telephone, data.email, data.address, data.facebookID, data.twitterID, data.instagramID, data.website];
            const { rows } = await pool.query(ADD_MEMBER_CONTACT, data);
            let contact = rows[0];
            if(contact.facebookid){
                contact.facebookID = contact.facebookid;
                delete contact.facebookid;
            }
            if(contact.instagramid){
                contact.instagramID = contact.instagramid;
                delete contact.instagramid;
            }
            if(contact.twitterid){
                contact.twitterID = contact.twitterid;
                delete contact.twitterid;
            }
            return contact;
        }
    }
};