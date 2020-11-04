<template>
  <div v-if="$apollo.loading"><loading /></div>
  <div v-else>
    <page-title title="Articles rejetés" />

    <div v-if="articles">
      <errors-box v-if="articles.length === 0" message="Aucun article rejeté pour le moment" type="info" />
      <rejected-article v-for="a in articles" :key="a.id" :article="a" />
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import Loading from "../../../components/loading";
  import PageTitle from "../../../components/page-title";
  import RejectedArticle from "../../../components/articles/rejected-article";
  import ErrorsBox from "../../../components/errors";

  const QUERY = gql`
    query ($start: Int!, $limit: Int!){
        articles(state: REJECTED, type: ALL, start: $start, limit: $limit) {
            id, title, cover,
            author { id, firstName, lastName, avatar },
            approvedBy { id, firstName, lastName, avatar }
        }
    }
  `;

  export default {
    components: {ErrorsBox, RejectedArticle, PageTitle, Loading},
    head: () => ({
      title: "Articles rejetés"
    }),
    data: () => ({
      start: 0, limit: 20
    }),
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
