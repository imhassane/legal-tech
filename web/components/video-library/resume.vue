<template>
  <div class="w-full md:w-1/4">
    <div class="m-1">
      <div>
        <img class="h-32 w-full object-cover" :src="cover" alt="couverture de la vidéo" />
      </div>
      <div>
        <p class="font-bold">{{ title }}</p>
        <p class="text-sm font-light">{{ duration }} min - {{ views }} vues</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'video-library-video-resume',
    props: ['cover', 'title', 'views', 'likes', 'url', 'duration', 'id']
  }
</script>
