<template>
  <div
    id="featured" v-if="post"
    class="p-5 m-1 border-r border-b border-l border-t border-gray-200"
  >
    <post-meta :author="post.author" :createdAt="post.createdAt" />
    <hr />
    <div>
      <img class="w-full object-cover h-64" :src="post.cover" alt="">
    </div>
    <h2 class="mt-3 mb-3 text-xl font-extrabold">{{ post.title }}</h2>
    <p class="font-light text-gray-600 text-sm">{{ post.readingTime }} min</p>
    <p class="mt-3 mb-3 font-light">{{ post.extract }}</p>
    <div class="flex content-between">
      <div class="flex-1">
        <button>{{ post.likes }} likes</button>
      </div>
      <div class="flex-1">
        <nuxt-link :to="`/lire/${post.id}/${post.slug}`">Lire</nuxt-link>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Chargement en cours</p>
  </div>
</template>

<script>
  import PostMeta from "./meta";
  export default {
    name: 'featured-post',
    components: {PostMeta},
    props: ['post']
  }
</script>
