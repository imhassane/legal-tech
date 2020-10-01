<template>
  <nav class="py-4 px-3 flex font-semibold text-center">

    <div class="align-bottom">
      <span class="mx-2">
        <nuxt-link to="/personal">Accueil</nuxt-link>
      </span>
    </div>

    <div>
      <span class="mx-2"><nuxt-link to="/posts/new">&Eacute;crire un article</nuxt-link></span>
      <span class="mx-2"><nuxt-link to="/library">Bibliothèque</nuxt-link></span>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "main-nav"
  }
</script>
