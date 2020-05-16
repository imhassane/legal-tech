<template>
  <div
    v-if="post"
    class="p-2 m-auto md:flex md:justify-around md:w-2/3"
  >
    <div class="flex-none max-w-sm md:flex-auto">
      <img class="w-full md:h-64 object-cover" :src="post.cover" alt="">
    </div>
    <div class="flex-none max-w-sm md:flex-auto">
      <h2 class="font-bold text-2xl mb-3">{{ post.title }}</h2>
      <p class="font-light text-gray-600 text-sm">{{ post.readingTime }} min</p>
      <p class="font-light mb-3">{{ post.extract }}</p>
      <div>
        <nuxt-link :to="`/lire/${post.id}/${post.slug}`">Lire</nuxt-link>
      </div>
      <post-meta :author="post.author" :createdAt="post.createdAt" />
    </div>
  </div>
  <div v-else>
    chargement
  </div>
</template>

<script>
  import PostMeta from "./meta";
  export default {
    name: "favorite-post",
    components: {PostMeta},
    props: ['post']
  }
</script>
