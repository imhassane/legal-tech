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

    Member: {
        newDomain: async (_parent, data, {pool}) => {
            // TODO: todo
        },
        setDomainArticle: async (_parent, data, {pool}) => {

        }
    }

};