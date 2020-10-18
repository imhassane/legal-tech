<template>
  <div class="py-4 px-3">

    <h1 class="text-center font-bold text-4xl pb-3 border-gray-300 border-b-4 mb-12">Connexion</h1>

    <div v-if="errors.message">
      <p class="text-center text-red-700 font-semibold">{{ errors.message }}</p>
    </div>

    <div class="md:w-1/2 m-auto">
      <div class="mb-5">
        <label for="email" class="mb-2 font-semibold text-xl block">Adresse email</label>
        <input
          type="email" id="email" placeholder="Ex: john.doe@abc.com"
          class="py-2 px-4 font-semibold rounded-full border-gray-300 border-2 w-full"
          @input="handleEmailChange"
        />
        <p v-if="errors.email" class="font-light text-sm text-red-700">Entrez une adresse email valide</p>
      </div>

      <div class="mb-5">
        <label for="password" class="mb-2 font-semibold text-xl block">Mot de passe</label>
        <input
          type="password" id="password" placeholder="********"
          class="py-2 px-4 font-semibold rounded-full border-gray-300 border-2 w-full"
          @input="handlePasswordChange"
        />
        <p v-if="errors.password" class="text-sm font-light text-red-700">Le mot de passe doit contenir 8 caractères minimum</p>
      </div>

      <div class="my-4 text-right">
        <span class="text-sm font-light mr-5">
          <nuxt-link to="/authentication/reset-password">Mot de passe oublié ?</nuxt-link>
        </span>
        <input type="button" value="Connexion" class="bg-red-700 text-white font-semibold rounded-full px-4 py-2" @click.prevent="onLogin" />
      </div>
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  const AUTH_QUERY = gql`
      mutation ($email: String!, $password: String!) {
          authenticate(email: $email, password: $password) {
              token, permissions
          }
      }
  `;

  export default {
    layout: "visitor",
    head: () => ({
      title: "Connexion"
    }),
    data: () => ({
      data: { email: null, password: null },
      errors: { email: null, password: null, message: null }
    }),
    methods: {
      onLogin: async function() {
        try {
          const {data: {authenticate}} = await this.$apollo.mutate({
            mutation: AUTH_QUERY,
            variables: this.data,
          });
          localStorage.setItem(process.env.LOCALSTORAGE_AUTH_TOKEN, authenticate.token);
          localStorage.setItem(process.env.LOCALSTORAGE_AUTH_PERMISSIONS, JSON.stringify(authenticate.permissions));

          setTimeout(() => this.$router.push("/personal"), 1000);
        } catch(ex) {
          if(ex.graphQLErrors) {
            this.errors.message = ex.graphQLErrors[0].message;
          }
        }
      },
      handleEmailChange: function({target:{ value }}) {
        if(value && value.trim().length >= 8) {
          this.data.email = value.trim();
          this.errors.email = false;
        } else {
          this.data.email = null;
          this.errors.email = true;
        }
      },
      handlePasswordChange: function({target: { value }}) {
        if(value && value.trim().length >= 8) {
          this.data.password = value.trim();
          this.errors.password = false;
        } else {
          this.data.password = null;
          this.errors.password = true;
        }
      }
    }
  }
</script>
