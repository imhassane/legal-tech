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

const articles = () => {
    return [];
};

const article = () => {
    return {};
};

const articleBySlug = () => {
    return {};
};

const newArticle = () => {};

const updateArticle = () => {};

const updateArticleCover = () => {};

const updateArticleState = () => {};

const deleteArticle = () => {};

const newArticleComment = () => {};

const newCommentReply = () => {};

const updateCommentState = () => {};

const deleteComment = () => {};

module.exports = {
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
