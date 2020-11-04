<template>
  <div class="py-3 px-2 border-gray-300 border-b-2">
    <errors-box v-if="messages.error" type="danger" :message="messages.error" />
    <div class="flex">
      <img :src="article.cover" class="w-24 h-24 object-cover" :alt="article.title" />
      <div class="ml-4">
        <p class="font-bold text-xl">
          {{ article.title }}
          <tag :title="article.type.toLowerCase()" />
        </p>
        <p class="font-light text-sm" v-if="article.author">
          Par {{ article.author.firstName }} {{ article.author.lastName }}
        </p>
        <p class="font-light text-sm" v-if="article.approvedBy">
          Approuvé par {{ article.approvedBy.firstName }} {{ article.approvedBy.lastName }}
        </p>
        <div class="flex mt-2">
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
  import Tag from "../tag";

  const CANCEL = gql`
    mutation ($id: ID!) {
        rejectArticle(id: $id) { id }
    }
  `;

  const ARTICLES_QUERY = gql`
    query {
       articles(state: APPROVED, type: ALL, start: 0, limit: 20) {
          id, title, cover, type,
          author { id, firstName, lastName, avatar }
          approvedBy { id, firstName, lastName, avatar }
        }
    }
   `;

  const REJECTED_QUERY = gql`
    query {
       articles(state: REJECTED, type: ALL, start: 0, limit: 20) {
          id, title, cover, type,
          author { id, firstName, lastName, avatar }
          approvedBy { id, firstName, lastName, avatar }
        }
    }
   `;

  export default {
    name: "confirmed-article",
    components: {ErrorsBox, Tag},
    props: ["article"],
    data: () => ({
      messages: { error: null, message: null }
    }),
    methods: {
      cancel: async function() {
        try {
          const id = this.article.id;
          await this.$apollo.mutate({
            mutation: CANCEL,
            variables: { id },
            update: function(store, _) {
              try {
                let article = null;
                let data = store.readQuery({ query: ARTICLES_QUERY });
                let rejectedData = store.readQuery({query: REJECTED_QUERY });

                article = data.articles.filter(art => art.id === id);
                data.articles = data.articles.filter(art => art.id !== id );

                if(article)
                  rejectedData.articles.push(article[0]);

                store.writeQuery({query: ARTICLES_QUERY, data});
                store.writeQuery({query: REJECTED_QUERY, data: rejectedData });
              } catch(_) {}
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
