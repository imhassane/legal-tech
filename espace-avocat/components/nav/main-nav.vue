<template>
  <nav class="py-6 px-3 flex font-semibold text-center">

    <div class="align-bottom">
      <span class="mx-2">
        <nuxt-link to="/personal">Espace avocat</nuxt-link>
      </span>
    </div>

    <div>
      <span class="mx-2"><nuxt-link to="/posts/new">&Eacute;crire un article</nuxt-link></span>
      <span class="mx-2"><nuxt-link to="/library">Bibliothèque</nuxt-link></span>
    </div>

    <div class="flex-1">
      <img
        class="w-10 h-10 rounded-full object-cover float-right"
        src="https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">
    </div>
  </nav>
</template>

<script>
  export default {
    name: "main-nav"
  }
</script>
