<template>
  <div class="py-3 px-2 border-gray-300 border-b-2">
    <errors-box v-if="messages.error" type="danger" :message="messages.error" />
    <div class="flex">
      <img :src="article.cover" class="w-20 h-20 object-cover" :alt="article.title" />
      <div class="ml-4">
        <p class="font-bold text-xl">{{ article.title }}</p>
        <p class="font-light text-sm" v-if="article.author">Par {{ article.author.firstName }} {{ article.author.lastName }}</p>
        <div class="flex mt-2">
          <button class="px-3 py-1 bg-red-700 text-white font-semibold mr-2" @click.prevent="validate">Valider</button>
          <button class="px-3 py-1 font-semibold text-red-700 border-red-700 border mr-2" @click.prevent="cancel">Rejeter</button>
          <nuxt-link :to="`/managment/posts/read/${article.id}`" class="bg-blue-200 px-3 py-1 text-blue-900 font-semibold">Lire</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import ErrorsBox from "../errors";

  const VALIDATE = gql`
    mutation ($id: ID!) {
        approveArticle(id: $id) { id }
    }
    `;

  const CANCEL = gql`
    mutation ($id: ID!) {
        rejectArticle(id: $id) { id }
    }
  `;

  const ARTICLES_QUERY = gql`
    query {
       articles(state: PENDING, type: ALL, start: 0, limit: 20) {
          id, title, cover,
          author { firstName, lastName, avatar }
        }
    }
   `;

  export default {
    name: "waiting-article",
    components: {ErrorsBox},
    props: ["article"],
    data: () => ({
      messages: { error: null, message: null }
    }),
    methods: {
      validate: async function() {
        try {
          const id = this.article.id;
          await this.$apollo.mutate({
            mutation: VALIDATE,
            variables: { id },
            update: function(store, _) {
              let data = store.readQuery({ query: ARTICLES_QUERY });
              data.articles = data.articles.filter(art => art.id !== id );
              store.writeQuery({query: ARTICLES_QUERY, data})
            }
          });
        } catch(ex) {
          if(ex.graphQLErrors)
            this.messages.error = ex.graphQLErrors[0].message;
        }
      },
      cancel: async function() {
        try {
          const id = this.article.id;
          await this.$apollo.mutate({
            mutation: CANCEL,
            variables: { id },
            update: function(store, _) {
              let data = store.readQuery({ query: ARTICLES_QUERY });
              data.articles = data.articles.filter(art => art.id !== id );
              store.writeQuery({query: ARTICLES_QUERY, data})
            }
          });
        } catch(ex) {
          if(ex.graphQLErrors)
            this.messages.error = ex.graphQLErrors[0].message;
        }
      }
    }
  }
</script>
