<template>
  <div class="w-full md:p-5 p-3 bg-gray-100 border-b-2">
    <div class="md:m-auto md:w-2/3 md:flex md:justify-between">
      <div class="border-l-4">
        <nuxt-link to="/" class="ml-2 font-black uppercase text-center">tech lead</nuxt-link>
      </div>
      <div class="">
        <ul class="flex justify-left md:justify-center">
          <li class="mr-2"><nuxt-link class="text-sm uppercase font-bold" to="/droits">Droits</nuxt-link></li>
          <li class=""><nuxt-link class="text-sm uppercase font-bold" to="/contact">Contacter un avocat</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'navbar'
  }
</script>
