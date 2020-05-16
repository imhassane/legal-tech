<template>
  <footer class="border-t-2 pt-10 w-full">
    <div class="flex content-center m-auto w-1/2 md:w-1/6 pb-10">
      <nuxt-link class="flex-1 text-center" to="/about">A propos</nuxt-link>
      <nuxt-link class="flex-1 text-center" to="/contact">Contact</nuxt-link>
    </div>
    <p class="bg-gray-300 p-2 mt-3 text-center font-light text-sm">Fièrement fait par la jeunesse guinéenne</p>
  </footer>
</template>

<script>
  export default {
    name: 'page-footer'
  }
</script>
