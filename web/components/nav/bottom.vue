<template>
  <div class="w-full">
    <ul class="flex justify-around m-auto md:w-1/3">
      <li class="flex-auto">
        <nuxt-link class="font-bold text-center text-sm" to="/videotheque">Vidéothèque</nuxt-link>
      </li>
      <li class="flex-auto">
        <nuxt-link class="font-bold text-center text-sm" to="/videotheque">Documents</nuxt-link>
      </li>
      <li class="flex-auto">
        <nuxt-link class="font-bold text-center text-sm" to="/videotheque">Lois</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navigation-bottom'
  }
</script>
