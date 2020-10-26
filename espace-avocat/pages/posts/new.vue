<template>
  <div>
    <div class="border-gray-300 border-b-2">
      <img src="/cancel.svg" alt="" class="object-cover h-12 p-3" @click="goBack" />
    </div>

    <div v-if="errors.message || message" class="py-4 my-1">
      <p v-if="errors.message" class="text-center text-red-700 font-semibold">{{ errors.message }}</p>
      <p v-if="message" class="text-center text-green-700 font-semibold">{{ message}}</p>
    </div>

    <client-only>
      <new-article-form :onDraft="handleDraft" :onSubmit="handleSubmit" />
    </client-only>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import NewArticleForm from "../../components/posts/new-article";

  const NEW_ARTICLE = gql`
    mutation ($title: String!, $cover: String!, $content: String!, $type: ArticleType!, $extract: String!) {
        newArticle(title: $title, content: $content, extract: $extract, cover: $cover, type: $type) {
            id, title
        }
    }
  `;

  export default {
    name: "new-post",
    components: {NewArticleForm},
    layout: "no-header",
    head: () => ({
      title: "Nouvel article"
    }),
    data: () => ({ errors: { message: null }, message: null }),
    methods: {
      goBack: function() {
        this.$router.go(-1);
      },
      handleSubmit: async function(variables) {
        try {
            const { data } = await this.$apollo.mutate({
              mutation: NEW_ARTICLE,
              variables
            });

            this.errors.message = null;
            this.message = `Votre article ${data.newArticle.title} a été enregistré, il sera publié après sa validation`;
        } catch(ex) {
          this.message = null;
          if(ex.graphQLErrors) {
            this.errors.message = ex.graphQLErrors[0].message;
          }
        }
      },
      handleDraft: function() {

      }
    }
  }
</script>
