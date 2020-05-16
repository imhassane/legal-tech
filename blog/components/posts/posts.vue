<template>
  <div v-if="posts">
    <div class="m-auto md:flex md:w-4/5">
      <post-resume v-for="p in posts" :post="p" :key="p.id" />
    </div>
    <p class="text-center">
      <button
        class="mt-10 mb-10 bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
      >Charger plus d'articles</button>
    </p>
  </div>
  <div v-else>
    <p>chargement</p>
  </div>
</template>

<script>
  import PostResume from "./resume"
  export default {
    name: 'posts-list',
    props: ['posts'],
    components: { PostResume }
  }
</script>
