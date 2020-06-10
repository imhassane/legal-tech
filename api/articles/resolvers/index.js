const readingTime = require('reading-time');
const slugify = require('slugify');

const pool = require('../database');
const sql = require('./queries');

const convertToArticle = article => {
    if(article.art_id) article.id = article.art_id;
    if(article.art_title) article.title = article.art_title;
    if(article.art_slug) article.slug = article.art_slug;
    if(article.art_content) article.content = article.art_content;
    if(article.art_slug) article.slug = article.art_slug;
    if(article.art_extract) article.extract = article.art_extract;
    if(article.art_cover) article.cover = article.art_cover;
    if(article.art_type) article.type = article.art_type;
    if(article.art_reading_time) article.readingTime = article.art_reading_time;
    if(article.art_state) article.state = article.art_state;
    if(article.art_created_at) article.createdAt = article.art_created_at;
    if(article.art_updated_at) article.updatedAt = article.art_updated_at;

    delete article.art_id;
    delete article.art_title;
    delete article.art_slug;
    delete article.art_content;
    delete article.art_extract;
    delete article.art_cover;
    delete article.art_state;
    delete article.art_type;
    delete article.art_reading_time;
    delete article.art_views;
    delete article.art_created_at;
    delete article.art_updated_at;
    return article;
};

const verifyPermissionsAndType = (permissions, type) => {
    if(permissions.includes("SUPREME") || permissions.includes("WRITE_ALL_POSTS")) return true;
    if(type === "BLOG" && permissions.includes("WRITE_BLOG_POST")) return true;
    else if (type === "REVUE" && permissions.includes("WRITE_REVUE")) return true;
    else if (type === "DOMAIN" && permissions.includes("WRITE_DOMAIN")) return true;
    else if (type === "FOREIGN" && permissions.includes("WRITE_FOREIGN_POSTS")) return true;
    else if (type === "ACTU" && permissions.includes("WRITE_NEWS")) return true;
    else if (type === "PRESS" && permissions.includes("WRITE_PRESS")) return true;
    else if (type === "PAGE" && permissions.includes("WRITE_PAGE")) return true;
    return false;
};

const verifyArticle = article => {
  if(article.title && article.title.trim().length < 5)
      throw new Error("Le titre doit contenir au moins 5 caractères");
  if(article.extract && article.extract.trim().length < 20)
      throw new Error("L'extrait de l'article doit contenir au moins 20 caractères");
};

const articles = async (_p, data) => {
    const { rows } = await pool.query(sql.GET_ARTICLES, [data.state, data.start, data.limit]);
    return rows.map(r => convertToArticle(r));
};

const getMemberArticles = async (member) => {
    const { rows } = await pool.query(sql.GET_MEMBER_ARTICLES, [member]);
    return rows.map(r => convertToArticle(r));
};

const article = async (_p, data, {user}) => {
    const { rows } = await pool.query(sql.GET_ARTICLE, [data.id]);
    if(!rows.length)
        throw new Error("Cet article n'existe pas");
    // If the current user is not a member
    // we update the article's views.
    if(!user) {
        try {
            await pool.query("UPDATE t_article_art SET art_views = art_views + 1 WHERE art_id = $1", [rows[0].art_id]);
        } catch(ex) {
            // TODO: Logging.
            throw ex;
        }
    }
    return convertToArticle(rows[0]);
};

const articleBySlug = async () => {
    const { rows } = await pool.query(sql.GET_ARTICLE, [data.id]);
    if(!rows.length)
        throw new Error("Cet article n'existe pas");
    // If the current user is not a member
    // we update the article's views.
    if(!user) {
        try {
            await pool.query("UPDATE t_article_art SET art_views = art_views + 1 WHERE art_id = $1", [rows[0].art_id]);
        } catch(ex) {
            // TODO: Logging.
            throw ex;
        }
    }
    return convertToArticle(rows[0]);
};

const newArticle = async (_p, data, {user, permissions}) => {
    if(!user)
        throw new Error("Vous devez vous connecter pour écrire un article");
    if(!verifyPermissionsAndType(permissions, data.type))
        throw new Error("Vous n'avez pas les permissions nécessaires pour écrire un article");

    verifyArticle(data);
    data.readingTime = readingTime(data.content).time;
    data.slug = slugify(data.title);

    data = [user, data.title, data.extract, data.content, data.slug, data.readingTime, data.type, data.cover];
    try {
        const { rows } = await pool.query(sql.INSERT_ARTICLE, data);
        return convertToArticle(rows[0]);
    } catch(ex) {
        // TODO: Logging.
        throw ex;
    }
};

const updateArticle = async (_p, {id, title, extract, content}, {user}) => {
    if(!user)
        throw new Error("Vous devez vous connecter pour modifier cet article");
    let query = "SELECT cre_id FROM t_article_art WHERE art_id = $1";
    try {
        let {rows} = await pool.query(query, [id]);
        if (!rows.length)
            throw new Error("Cet article n'existe pas");

        if (rows[0].cre_id !== user)
            throw new Error("Vous n'avez pas la possibilité de modifier de cet article");

        if (!title && !extract && !content)
            throw new Error("Veuillez entrer les informations à modifier");

        verifyArticle({title, extract});

        query = "UPDATE t_article_art SET art_updated_at = NOW(), art_title = $1, art_extract = $2, art_content = $3 WHERE art_id = $4 RETURNING *";
        const result = await pool.query(query, [title, extract, content, id]);
        return convertToArticle(result.rows[0]);
    } catch(ex) {
        // TODO: Logging.
        throw ex;
    }
};

const updateArticleCover = async (_p, {id, cover}, {user}) => {
    if(!user)
        throw new Error("Vous devez vous connecter pour mettre à jour l'article");

    try {
        let query = "SELECT cre_id FROM t_article_art WHERE art_id = $1";
        const { rows } = await pool.query(query, [id]);
        if(!rows.length)
            throw new Error("Cet article n'existe pas");
        if(rows[0].cre_id !== user)
            throw new Error("Vous n'avez pas la permission de modifier cet article");

        query = "UPDATE t_article_art SET art_updated_at = NOW(), art_cover = $2 WHERE art_id = $1 RETURNING *";
        const result = await pool.query(query, [id, cover]);
        return convertToArticle(result.rows[0]);
    } catch(ex) {
        // TODO: Logging.
        throw ex;
    }
};

const updateArticleState = () => {};

const deleteArticle = () => {};

const newArticleComment = () => {};

const newCommentReply = () => {};

const updateCommentState = () => {};

const deleteComment = () => {};

module.exports = {
    Member: {
      articles: async (member) => await getMemberArticles(member.id),
    },
    Query: {
        articles,
        article,
        articleBySlug
    },
    Mutation: {
        newArticle,
        updateArticle,
        updateArticleCover,
        updateArticleState,
        deleteArticle,

        newArticleComment,
        newCommentReply,
        updateCommentState,
        deleteComment
    }
};
