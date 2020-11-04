<template>
  <div v-if="$apollo.loading"><loading /></div>
  <div v-else>
    <page-title title="En attente" />

    <div v-if="articles">
      <errors-box v-if="articles.length === 0" message="Aucun article en attente pour le moment" type="info" />
      <waiting-article v-for="a in articles" :key="a.id" :article="a" />
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import Loading from "../../../components/loading";
  import WaitingArticle from "../../../components/articles/waiting-article";
  import PageTitle from "../../../components/page-title";
  import ErrorsBox from "../../../components/errors";

  const QUERY = gql`
    query ($start: Int!, $limit: Int!) {
       articles(state: PENDING, type: ALL, start: $start, limit: $limit) {
          id, title, cover,
          author { firstName, lastName, avatar }
        }
    }
   `;

  export default {
    components: {ErrorsBox, PageTitle, WaitingArticle, Loading},
    head: () => ({
      title: "Articles en attente"
    }),
    data: () => ({ start: 0 }),
    apollo: {
      articles: {
        query: QUERY,
        variables: function() {
          return { start: this.start, limit: 20};
        }
      }
    }
  }
</script>
