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
    SELECT cre_id FROM t_credentials_cre WHERE cre_email = $1
`;

const GET_MEMBER = `
    SELECT
        cre_id, cre_email,
        mem_first_name, mem_last_name, mem_avatar,
        mem_type, mem_description
    FROM t_member_mem
    JOIN t_credentials_cre USING (cre_id)
    WHERE mem_id = $1
`;

const GET_MEMBER_PERMISSION = `
    SELECT
        permission
    FROM tj_credentials_permission
    WHERE cre_id = $1
`;

const ADD_PERMISSION = `
    INSERT INTO tj_credentials_permission
    VALUES ($1, $2)
`;

module.exports = {
    INSERT_CREDENTIALS,
    INSERT_MEMBER,

    MEMBER_EXISTS, GET_MEMBER,

    ADD_PERMISSION, GET_MEMBER_PERMISSION
};