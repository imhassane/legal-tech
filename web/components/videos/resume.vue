<template>
  <div class="flex-1 border-1 rounded shadow-md m-1">
    <div>
      <img class="h-32 w-full object-cover" :src="cover" alt="">
    </div>
    <div class="p-3">
      <p class="font-bold">{{ title }}</p>
      <p class="font-light text-sm mt-1 mb-3">{{ duration }} min</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'video-resume',
    props: ['id', 'cover', 'avatar', 'title', 'duration']
  }
</script>
