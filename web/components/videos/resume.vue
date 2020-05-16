<template>
  <div class="flex-1 border-1 rounded-sm shadow-md m-1">
    <div>
      <img class="h-32 w-full object-cover" :src="cover" alt="">
    </div>
    <div class="p-3">
      <p class="font-bold">{{ title }}</p>
      <p class="font-light text-sm mt-1">{{ duration }} min</p>
    </div>
    <div class="p-3">
      <p><nuxt-link :to="`/videotheque/voir/${id}`">Voir</nuxt-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'video-resume',
    props: ['id', 'cover', 'avatar', 'title', 'duration']
  }
</script>
