<template>
  <div class="py-8">
    <div class="md:mx-5 flex">
      <div class="hidden md:block">
        <posts-navigation />
      </div>
      <div class="flex-1 md:ml-5">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
  import PostsNavigation from "../../components/managment/posts/navigation";
  export default {
    components: {PostsNavigation},
    head: () => ({
      title: "Gestion des articles"
    })
  }
</script>
