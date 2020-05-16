<template>
  <div class="md:flex-1 md:m-2">
    <div>
      <img class="object-cover w-full h-32" :src="cover" alt="couverture de l'actualité" />
    </div>
    <div class="pt-3 pb-3">
      <h3 class="font-bold">{{ title }}</h3>
      <p class="mt-2 mb-2 text-sm font-light">{{ extract}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bar-news-resume',
    props: ['cover', 'title', 'id', 'extract']
  }
</script>
