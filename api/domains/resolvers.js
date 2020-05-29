const { convertToSchema } = require('./helper');

// TODO: Adding join with the article table.
const DOMAINS = `
    SELECT
        dom_id as id,
        dom_name as name,
        dom_description as description,
        dom_inserted_at as insertedAt,
        dom_updated_at as updatedAt
    FROM t_domain_dom
    OFFSET $1 LIMIT $2
`;

const DOMAIN = `
    SELECT
        dom_id as id,
        dom_name as name,
        dom_description as description,
        dom_inserted_at as insertedAt,
        dom_updated_at as updatedAt
    FROM t_domain_dom
    WHERE dom_id = $1
`;

const ADD_DOMAIN = `
    INSERT INTO t_domain_dom(dom_name, dom_description)
    VALUES ($1, $2)
    RETURNING *
`;

const VERIFY_DOMAIN_SET = `
    SELECT
        COUNT(cre_id) AS exists
    FROM tj_domain_lawyer
    WHERE cre_id = $1 AND dom_id = $2
`;

const ADD_LAWYER_DOMAIN = `
    INSERT INTO tj_domain_lawyer
    VALUES ($2, $1)
    RETURNING *
`;

module.exports = {

    Query: {
        domains: async (_parent, data, {pool}) => {
            const { rows } = await pool.query(DOMAINS, [data.start, data.limit]);
            return rows;
        },
        domain: async (_parent, data, {pool}) => {
            const { rows } = await pool.query(DOMAIN, [data.id]);
            if(!rows.length)
                throw new Error("Ce domaine n'existe pas");
            return rows[0];
        }
    },

    Mutation: {
        newDomain: async (_parent, data, {pool, permissions, user}) => {
            if(!user)
                throw new Error("Vous devez vous connecter pour éffectuer cette action");

            if(!permissions || !(permissions.includes('SUPREME') || permissions.includes('WRITE_DOMAIN')))
                throw new Error("Vous n'avez pas les permissions nécessaires pour éffectuer cette action");

            if(!data.name || data.name.length < 5)
                throw new Error("Le nom doit contenir au minimum 5 caractères");
            if(!data.description || data.description.length < 10)
                throw new Error("La description doit contenir au minimum 10 caractères");
            
            const { rows } = await pool.query(ADD_DOMAIN, [data.name, data.description]);
            return convertToSchema(rows[0]);
        },
        setDomainArticle: async (_parent, data, {pool, user, permissions}) => {

        },
        setLawyerDomain: async (_parent, data, {pool, user, permissions}) => {
            if(!user)
                throw new Error("Vous devez vous connecter pour éffectuer cette action");

            data.lawyerId = parseInt(data.lawyerId);
            data.domainId = parseInt(data.domainId);

            const {rows} = await pool.query(VERIFY_DOMAIN_SET, [data.lawyerId, data.domainId]);
            if(rows.length && parseInt(rows[0].exists) > 0)
                throw new Error("Ce membre a déjà ajouté ce domaine à ses compétences");


            if(data.lawyerId === user) {
                await pool.query(ADD_LAWYER_DOMAIN, [data.lawyerId, data.domainId]);
                return "Vous avez ce domaine comme votre compétence";
            } else {
                if (!permissions || !permissions.includes('SUPREME')) {
                    throw new Error("Vous n'avez pas les permissions nécessaires pour éffectuer cette action");
                } else {
                    await pool.query(ADD_LAWYER_DOMAIN, [data.lawyerId, data.domainId]);
                    return "Vous avez rajouté ce domaine comme compétence de cet avocat";
                }
            }
        }
    }

};