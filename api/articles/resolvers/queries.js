const GET_ARTICLES = `
    SELECT
        art_id, art_title, art_extract, art_content, art_reading_time,
        art_slug, art_views, art_type, art_state, art_cover, art_likes
    FROM t_article_art
    WHERE art_state = $1 AND art_type = $2
    ORDER BY art_id DESC
    OFFSET $3 LIMIT $4
`;

const GET_ALL_ARTICLES = `
    SELECT
        art_id, art_title, art_extract, art_content, art_reading_time,
        art_slug, art_views, art_type, art_state, art_cover, art_likes
    FROM t_article_art
    WHERE art_state = $1
    ORDER BY art_id DESC
    OFFSET $2 LIMIT $3
`;

const GET_MEMBER_ARTICLES = `
    SELECT
        art_id, art_title, art_extract, art_content, art_reading_time,
        art_slug, art_views, art_type, art_state, art_cover, art_likes
    FROM t_article_art
    WHERE cre_id = $1
    ORDER BY art_id DESC
    OFFSET $2 LIMIT $3
`;

const GET_APPROVED_ARTICLES_FOR_MEMBER = `
    SELECT
        art_id, art_title, art_extract, art_content, art_reading_time,
        art_slug, art_views, art_type, art_state, art_cover, art_likes
    FROM t_article_art
    WHERE cre_id = $1 AND art_state = 'APPROVED'
    ORDER BY art_id DESC
    OFFSET $2 LIMIT $3
`;

const GET_ARTICLE = `
    SELECT
        art_id, art_title, art_extract, art_content, art_reading_time,
        art_slug, art_views, art_type, art_state, art_cover, art_likes
    FROM t_article_art
    WHERE art_id = $1
`;

const GET_ARTICLE_BY_SLUG = `
    SELECT
        art_id, art_title, art_extract, art_content, art_reading_time,
        art_slug, art_views, art_type, art_state, art_cover, art_likes
    FROM t_article_art
    WHERE art_slug = $1
`;

const GET_ARTICLES_LIKES = `
    SELECT
        COUNT(art_id) as Likes
    FROM tj_article_likes
    WHERE art_id = $1
`;

const INSERT_ARTICLE = `
    INSERT INTO t_article_art(
        cre_id,
        art_title, art_extract, art_content, art_slug, art_reading_time,
        art_type, art_cover
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
`;

const UPDATE_ARTICLE_STATE = `
    UPDATE t_article_art
        SET art_state = $2,
            art_approved_by = $3,
            art_updated_at = NOW()
    WHERE art_id = $1
    RETURNING *
`;

const VERIFY_ARTICLE_EXISTS = `
    SELECT COUNT(art_id) as Exists
    FROM t_article_art WHERE art_id = $1
`;

module.exports = {
    GET_ARTICLES, GET_ALL_ARTICLES, GET_ARTICLE, GET_ARTICLE_BY_SLUG,
    GET_ARTICLES_LIKES, GET_APPROVED_ARTICLES_FOR_MEMBER, GET_MEMBER_ARTICLES,
    INSERT_ARTICLE, UPDATE_ARTICLE_STATE, VERIFY_ARTICLE_EXISTS
};