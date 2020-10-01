<template>
  <div class="py-8 border-b-2 border-red-700 flex">
    <div class="w-2/3 m-auto text-center">
      <input type="text" placeholder="Rechercher un avocat" class="py-2 px-4 font-semibold w-1/2 border-2 rounded-full" />
      <input type="button" value="Rechercher" class="py-2 px-6 bg-red-700 rounded-full text-white font-semibold" />
    </div>
    <div class="w-1/3">
      <ul class="flex font-semibold">
        <li class="mr-2"><nuxt-link to="/authentication/sign-in">Connexion</nuxt-link></li>
        <li class="font-light text-gray-800 mr-2">/</li>
        <li><nuxt-link to="/authentication/sign-up">S'inscrire</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-search"
  }
</script>
