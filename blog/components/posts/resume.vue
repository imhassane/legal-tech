<template>
  <div
    v-if="post"
    class="p-2"
  >
    <post-meta :author="post.author" :createdAt="post.createdAt" />
    <hr />
    <div>
      <img class="w-full md:h-40 object-cover" :src="post.cover" alt="couverture de l'article">
    </div>
    <h2 class="font-semibold text-xl mt-3 mb-3">{{ post.title }}</h2>
    <p class="font-light text-gray-600 text-sm">{{ post.readingTime }} min</p>
    <p class="mb-5 mt-3 font-light">{{ post.extract }}</p>
    <div>
      <nuxt-link
        class="bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white py-1 px-5 border border-gray-500 hover:border-transparent rounded"
        :to="`/lire/${post.id}/${post.slug}`"
      >
        Lire
      </nuxt-link>
    </div>
  </div>
  <div v-else>
    <p>chargement</p>
  </div>
</template>

<script>
  import PostMeta from "./meta";

  export default {
    name: 'post-resume',
    props: ['post'],
    components: { PostMeta }
  }
</script>
