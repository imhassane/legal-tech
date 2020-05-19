<template>
  <div class="bg-black text-white font-semibold text-sm">
    <ul class="md:w-5/6 m-auto p-1 flex flex-wrap whitespace-no-wrap">
      <li class="flex-1 mr-3 md:mr-1 my-1">
        <nuxt-link to="/tableau-de-l-ordre">Tableau de l'ordre</nuxt-link>
      </li>
      <li class="flex-1 mr-1 my-1">
        <nuxt-link to="/annuaires">Annuaires</nuxt-link>
      </li>
      <li class="flex-1 mr-1 my-1">
        <nuxt-link to="">Revue</nuxt-link>
      </li>
      <li class="flex-1 mr-1 my-1">
        <nuxt-link to="/deontologie">Déontologie</nuxt-link>
      </li>
      <li class="flex-1 mr-1 my-1">
        <nuxt-link to="">Barreaux étrangers</nuxt-link>
      </li>
      <li class="flex-1 mr-1 my-1">
        <nuxt-link to="/ma-carriere">Ma carrière</nuxt-link>
      </li>
      <li class="flex-1 mr-1 my-1">
        <nuxt-link to="/services">Services</nuxt-link>
      </li>
      <li class="flex-1 mr-1 my-1">
        <nuxt-link to="/faq">Foire aux questions</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navbar-bottom'
  }
</script>
