<template>
  <div class="py-4 px-3">

    <h1 class="text-center font-bold text-4xl pb-3 border-gray-300 border-b-4 mb-12">Connexion</h1>

    <div class="md:w-1/2 m-auto">
      <div class="mb-5">
        <label for="email" class="mb-2 font-semibold text-xl block">Adresse email</label>
        <input type="email" id="email" placeholder="Ex: john.doe@abc.com" class="py-2 px-4 font-semibold rounded-full border-gray-300 border-2 w-full" />
      </div>

      <div class="mb-5">
        <label for="password" class="mb-2 font-semibold text-xl block">Mot de passe</label>
        <input type="password" id="password" placeholder="********" class="py-2 px-4 font-semibold rounded-full border-gray-300 border-2 w-full" />
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
  export default {
    layout: "visitor",
    head: () => ({
      title: "Connexion"
    }),
    methods: {
      onLogin: function() {
        this.$router.push("/personal");
      }
    }
  }
</script>
