<template>
  <div>
    <page-title title="Déclaration d'une expérience professionnelle" />

    <div class="my-4 font-light">
      <p>Vous avez eu une expérience professionnelle dans le passé ?</p>
      <p>Vous pouvez la déclarer ici</p>
    </div>

    <loading message="Chargement des cabinets en cours..." v-if="$apollo.loading" />
    <div v-else>
      <work-experience-form :companies="companies" />
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import PageTitle from "../../components/page-title";
  import Loading from "../../components/loading";
  import WorkExperienceForm from "../../components/declarations/work-experience-form";

  const COMPANIES = gql`
    {
        companies { id, name }
    }
  `;

  export default {
    components: {WorkExperienceForm, Loading, PageTitle},
    head: () => ({
      title: "Expérience professionnelle"
    }),
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
