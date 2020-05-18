<template>
  <div class="bg-black">
    <div class="flex justify-around md:justify-between md:w-5/6 m-auto">
      <ul>
        <li class="p-2"><a class="text-white font-semibold" href="https://web-legal-tech.netlify.app" target="_blank">Site public</a></li>
      </ul>
      <ul class="flex justify-center">
        <li class="bg-red-800 p-2 mr-1">
          <nuxt-link class="text-white font-semibold" to="/espace-avocats">Connexion</nuxt-link>
        </li>
        <li class="p-2">
          <nuxt-link class="text-white font-semibold" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar-top'
  }
</script>
