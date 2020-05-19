<template>
  <div class="md:w-5/6 m-auto">
    <div class="pt-8 pb-8 md:flex">
      <div class="m-1">
        <h1 class="text-4xl uppercase font-extrabold text-red-800">Le Barreau</h1>
      </div>
      <ul class="md:flex-1 flex flex-wrap md:justify-around">
        <li class="self-center m-1">
          <nuxt-link class="font-semibold text-md uppercase" to="/">Accueil</nuxt-link>
        </li>
        <li class="self-center m-1">
          <nuxt-link class="font-semibold text-md uppercase" to="/">Barreau</nuxt-link>
        </li>
        <li class="self-center m-1">
          <nuxt-link class="font-semibold text-md uppercase" to="/">Particuliers</nuxt-link>
        </li>
        <li class="self-center m-1">
          <nuxt-link class="font-semibold text-md uppercase" to="/">Entreprises</nuxt-link>
        </li>
        <li class="self-center m-1">
          <nuxt-link class="font-semibold text-md uppercase" to="/">Universités</nuxt-link>
        </li>
        <li class="self-center m-1">
          <nuxt-link class="font-semibold text-md uppercase" to="/">Avocats</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar-main'
  }
</script>
