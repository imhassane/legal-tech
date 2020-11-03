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
      <errors-box v-if="messages.errors" type="danger" :message="messages.errors" />
      <errors-box v-if="messages.info" type="info" :message="messages.info" />

      <starting-work-form :companies="companies" :onSubmit="onStartedWork" />
    </div>
  </div>
</template>

<script>
  import PageTitle from "../../components/page-title";
  import StartingWorkForm from "../../components/declarations/starting-work-form";

  import gql from "graphql-tag";
  import ErrorsBox from "../../components/errors";

  const COMPANIES = gql`
    {
        companies { id, name }
    }
  `;

  const ADD_COMPANY = gql`
    mutation ($company: Int!, $entryDate: DateTime!){
        addMyCompany(companyID: $company, entryDate: $entryDate)
    }
  `;

  export default {
    components: {ErrorsBox, StartingWorkForm, PageTitle},
    head: () => ({
      title: "J'ai commencé une activité"
    }),
    data: () => ({
      messages: { errors: null, info: null }
    }),
    methods: {
      async onStartedWork({company, entryDate}) {
        if(company === 0)
          this.messages.errors = "Veuillez choisir le cabinet";
        if(!entryDate)
          this.messages.errors = "Veuillez sélectionnez la date d'entrée";

        if(company !== 0 && entryDate) {
          this.messages.errors = null;

          try {
            const {data} = await this.$apollo.mutate({
              mutation: ADD_COMPANY,
              variables: { company, entryDate }
            });

            this.messages.info = data.addMyCompany;
            this.messages.errors = null;
          } catch(ex) {
            if(ex.graphQLErrors)
              this.messages.errors = ex.graphQLErrors[0].message;
            else
              this.messages.errors = ex.message;
            this.messages.info = null;
          }
        }
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
