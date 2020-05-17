<template>
  <div class="w-full md:w-3/5 m-auto p-1">
    <ul class="flex justify-left">
      <li class="mr-1">
        <nuxt-link class="text-indigo-800" to="/">Accueil</nuxt-link>
        <span class="text-gray-500">/</span>
      </li>
      <li v-if="links" class="mr-1" v-for="l in links" :key="l.to">
        <nuxt-link class="text-indigo-800" :to="l.to">{{ l.name }}</nuxt-link>
        <span class="text-gray-500" v-if="l.to !== links[links.length - 1].to">/</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    props: ['links'],
  }
</script>
