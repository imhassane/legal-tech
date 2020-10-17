<template>
  <div class="py-8 border-b-2 border-red-700 md:flex">
    <div class="mb-4 md:mb-1 md:w-2/3 m-auto text-center">
      <input type="text" placeholder="Rechercher un avocat" class="py-2 px-4 font-semibold w-3/5 md:w-1/2 border-2 rounded-full" />
      <input type="button" value="Rechercher" class="py-2 px-6 bg-red-700 rounded-full text-white font-semibold" />
    </div>
    <div class="md:w-1/3">
      <ul class="flex font-semibold justify-center">
        <li class="mr-2"><nuxt-link to="/">Accueil</nuxt-link></li>
        <li class="font-light text-gray-800 mr-2">/</li>
        <li class="mr-2"><nuxt-link to="/authentication/sign-in">Connexion</nuxt-link></li>
        <li class="font-light text-gray-800 mr-2">/</li>
        <li><nuxt-link to="/authentication/sign-up/step-1/">S'inscrire</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-search"
  }
</script>
