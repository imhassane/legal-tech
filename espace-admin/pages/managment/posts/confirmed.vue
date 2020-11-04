<template>
  <div v-if="$apollo.loading"><loading /></div>
  <div v-else>
    <page-title title="Articles en ligne" />

    <div v-if="articles">
      <errors-box v-if="articles.length === 0" message="Aucun article en ligne pour le moment" type="info" />
      <confirmed-article v-for="a in articles" :key="a.id" :article="a" />
    </div>
  </div>
</template>
<script>
  import gql from "graphql-tag";
  import Loading from "../../../components/loading";
  import PageTitle from "../../../components/page-title";
  import ConfirmedArticle from "../../../components/articles/confirmed-article";
  import ErrorsBox from "../../../components/errors";

  const QUERY = gql`
    query ($start: Int!, $limit: Int!){
        articles(state: APPROVED, type: ALL, start: $start, limit: $limit) {
            id, title, cover, type,
            author { id, firstName, lastName, avatar }
            approvedBy { id, firstName, lastName, avatar }
        }
    }
  `;

  export default {
    head: () => ({
      title: "Articles en ligne"
    }),
    data: () => ({ start: 0, limit: 20 }),
    components: {ErrorsBox, ConfirmedArticle, PageTitle, Loading},
    apollo: {
      articles: {
        query: QUERY,
        variables: function() {
          return { start: this.start, limit: this.limit }
        }
      }
    }
  }
</script>
