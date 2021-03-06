const INSERT_CREDENTIALS = `
    INSERT INTO t_credentials_cre(cre_email, cre_password, cre_status)
    VALUES ($1, $2, 'PENDING')
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

const GET_MEMBERS = `
    SELECT
        cre_id, cre_email,
        mem_first_name, mem_last_name, mem_avatar,
        mem_type, mem_description
    FROM t_member_mem
    JOIN t_credentials_cre USING (cre_id)
    WHERE mem_type = $1 AND cre_status = $2
    OFFSET $3 LIMIT $4
`;

const GET_ALL_MEMBERS = `
    SELECT
        cre_id, cre_email,
        mem_first_name, mem_last_name, mem_avatar,
        mem_type, mem_description
    FROM t_member_mem
    JOIN t_credentials_cre USING (cre_id)
    WHERE cre_status = $1
    OFFSET $2 LIMIT $3
`;

const MEMBER_EXISTS = `
    SELECT cre_id FROM t_credentials_cre WHERE cre_email = $1
`;

const GET_MEMBER = `
    SELECT
        cre_id, cre_email, cre_status,
        mem_first_name, mem_last_name, mem_avatar,
        mem_type, mem_description
    FROM t_member_mem
    JOIN t_credentials_cre USING (cre_id)
    WHERE cre_id = $1
`;

const GET_MEMBER_PERMISSION = `
    SELECT
        permission
    FROM tj_credentials_permission
    WHERE cre_id = $1
`;

const VERIFY_MEMBER_PERMISSION = `
    SELECT
        COUNT(*) AS exists
    FROM tj_credentials_permission
    WHERE cre_id = $1 AND permission = $2
`;

const ADD_PERMISSION = `
    INSERT INTO tj_credentials_permission
    VALUES ($1, $2)
`;

const REMOVE_PERMISSION = `
    DELETE FROM tj_credentials_permission
    WHERE cre_id = $1 AND permission = $2
`;

const GET_MEMBER_FROM_ARTICLES = `
    SELECT cre_id, art_approved_by
    FROM t_article_art
    WHERE art_id = $1
`;

module.exports = {
    INSERT_CREDENTIALS,
    INSERT_MEMBER,

    MEMBER_EXISTS, GET_MEMBER, GET_MEMBERS,
    GET_MEMBER_FROM_ARTICLES, GET_ALL_MEMBERS,

    ADD_PERMISSION, GET_MEMBER_PERMISSION,
    VERIFY_MEMBER_PERMISSION,
    REMOVE_PERMISSION
};