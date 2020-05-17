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
