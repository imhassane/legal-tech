<template>
  <div class="w-full p-1 bg-indigo-900 shadow-xs border-b-2">
    <ul class="w-full md:w-1/3 flex justify-around m-auto">
      <li class="md:flex-auto"><nuxt-link class="font-semibold text-white text-center text-sm" to="/contact">Contact</nuxt-link></li>
      <li class="md:flex-auto"><nuxt-link class="font-semibold text-white text-center text-sm" to="/plan-du-site">Plan du site</nuxt-link></li>
      <li class="md:flex-auto"><nuxt-link class="font-semibold text-white text-center text-sm" to="http://blog-tech-lead.netlify.app">Blog</nuxt-link></li>
      <li class="md:flex-auto"><nuxt-link class="font-semibold text-white text-center text-sm" to="/espace-avocats">Espace avocats</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navigation-top'
  }
</script>
