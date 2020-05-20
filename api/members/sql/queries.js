const INSERT_CREDENTIALS = `
    INSERT INTO t_credentials_cre(cre_email, cre_password)
    VALUES ($1, $2)
    RETURNING cre_id
`;

const INSERT_MEMBER = `
    INSERT INTO t_member_mem(
        mem_first_name, mem_last_name, mem_avatar,
        mem_type, mem_description, cre_id
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
`;

const MEMBER_EXISTS = `
    SELECT cre_id FROM t_credentials_cre WHERE (cre_email = $1)
`;

module.exports = {
    INSERT_CREDENTIALS,
    INSERT_MEMBER,

    MEMBER_EXISTS
};