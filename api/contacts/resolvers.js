const pool = require('./database');

const MEMBER_CONTACT = `
    SELECT
        con_id,
        con_email,
        con_telephone,
        con_address,
        con_facebook,
        con_twitter,
        con_instagram
    FROM t_contact_con
    WHERE cre_id = $1
`;

const COMPANY_CONTACT = `
    SELECT
        con_id,
        con_email,
        con_telephone,
        con_address,
        con_facebook,
        con_twitter,
        con_instagram
    FROM t_contact_con
    WHERE company_id = $1
`;

const VERIFY_CONTACT_EXISTS = `
    SELECT
        COUNT(cre_id) AS exists
    FROM t_contact_con
    WHERE cre_id = $1
`;

const VERIFY_COMPANY_CONTACT_EXISTS = `
    SELECT
        COUNT(company_id) AS exists
    FROM t_contact_con
    WHERE company_id = $1
`;

const ADD_MEMBER_CONTACT = `
    INSERT INTO t_contact_con (cre_id, con_telephone, con_email, con_address, con_facebook, con_twitter, con_instagram, con_website)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
`;

const ADD_COMPANY_CONTACT = `
    INSERT INTO t_contact_con (company_id, con_telephone, con_email, con_address, con_facebook, con_twitter, con_instagram, con_website)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
`;

const convertToContact = (contact) => {
    if(contact.con_id) {
        contact.id = contact.con_id;
        delete contact.con_id;
    }
    if(contact.con_telephone) {
        contact.telephone = contact.con_telephone;
        delete contact.con_telephone;
    }
    if(contact.con_email) {
        contact.email = contact.con_email;
        delete contact.con_email;
    }
    if(contact.con_address) {
        contact.id = contact.con_address;
        delete contact.con_address;
    }
    if(contact.con_website) {
        contact.website = contact.con_website;
        delete contact.con_website;
    }
    if(contact.con_facebook){
        contact.facebookID = contact.con_facebook;
        delete contact.con_facebook;
    }
    if(contact.con_instagram){
        contact.instagramID = contact.con_instagram;
        delete contact.con_instagram;
    }
    if(contact.con_twitter){
        contact.twitterID = contact.con_twitter;
        delete contact.con_twitter;
    }
    return contact;
};

module.exports = {
    Member: {
        contact: async (member) => {
            const { rows } = await pool.query(MEMBER_CONTACT, [member.id]);
            if(!rows.length)
                return null;
            return convertToContact(rows[0]);
        }
    },
    Company: {
      contact: async (company) => {
          const { rows } = await pool.query(COMPANY_CONTACT, [company.id]);
          if(!rows.length)
              return null;
          return convertToContact(rows[0]);
      }
    },
    Mutation: {
        newUserContact: async (_parent, {id, data}, {user, permissions}) => {
            if(!user)
                throw new Error("Vous devez vous connecter pour éffectuer cette action");

            if(id && user !== id) {
                if (!(permissions.includes("SUPREME") || permissions.includes("ADD_CONTACT"))) {
                    throw new Error("Vous n'avez pas les permissions nécessaires pour ajouter un contact");
                }
            }

            const exists = await pool.query(VERIFY_CONTACT_EXISTS, [id || user]);
            if(parseInt(exists.rows[0].exists))
                throw new Error("Cet avocat a déjà mis à jour son contact");

            data = [user, data.telephone, data.email, data.address, data.facebookID, data.twitterID, data.instagramID, data.website];
            const { rows } = await pool.query(ADD_MEMBER_CONTACT, data);
            return convertToContact(rows[0]);
        },
        newCompanyContact: async (_parent, {id, data}, {user, permissions}) => {
            if(!user)
                throw new Error("Vous devez vous connecter pour éffectuer cette action");

            if(id && user !== id) {
                if (!(permissions.includes("SUPREME") || permissions.includes("ADD_CONTACT"))){
                    throw new Error("Vous n'avez pas les permissions nécessaires pour ajouter un contact");
                }
            }

            const exists = await pool.query(VERIFY_COMPANY_CONTACT_EXISTS, [id]);
            if(parseInt(exists.rows[0].exists))
                throw new Error("Cette entreprise a déjà mis à jour son contact");

            data = [id, data.telephone, data.email, data.address, data.facebookID, data.twitterID, data.instagramID, data.website];
            const { rows } = await pool.query(ADD_COMPANY_CONTACT, data);
            return convertToContact(rows[0]);
        }
    }
};