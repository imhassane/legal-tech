<template>
  <div>
    <page-title title="Début d'activité" />

    <div class="font-light my-4">
      <p class="mb-2">Vous avez trouvé un poste dans le domaine judiciaire de notre pays !</p>
      <p class="mb-2">Votre carrière professionnelle commence maintenant, assurez-vous de faire de votre mieux</p>
      <p>afin de mieux representer notre barreau.</p>
    </div>

    <div v-if="$apollo.loading">Chargement des entreprises en cours...</div>
    <div v-else>
      <starting-work-form :companies="companies" :onSubmit="onStartedWork" />
    </div>
  </div>
</template>

<script>
  import PageTitle from "../../components/page-title";
  import StartingWorkForm from "../../components/declarations/starting-work-form";

  import gql from "graphql-tag";

  const COMPANIES = gql`
    {
        companies { id, name }
    }
  `;

  export default {
    components: {StartingWorkForm, PageTitle},
    head: () => ({
      title: "J'ai commencé une activité"
    }),
    methods: {
      onStartedWork(data) {
        console.log(data);
      }
    },
    apollo: {
      companies: {
        query: COMPANIES,
        error: (err) => {
          console.log(err.message);
        }
      }
    }
  }
</script>
