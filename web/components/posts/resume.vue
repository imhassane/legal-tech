<template>
  <div class="w-1/2 md:w-1/4">
    <div class="m-1 border rounded shadow-sm">
      <div>
        <img class="w-full h-24 object-cover" :src="cover" alt="">
      </div>
      <div class="p-2">
        <p class="font-bold mb-3">{{ title }}</p>
        <p class="text-sm font-bold text-gray-700 mb-5">{{ readingTime }} min</p>
      </div>
      <div class="flex p-2">
        <div>
          <img class="rounded-full w-12 h-12 object-cover" :src="author.avatar" :alt="author.firstName" />
        </div>
        <div class="p-2">
          <p class="text-sm font-bold">{{ author.firstName }} {{ author.lastName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-resume',
    props: ['title', 'id', 'slug', 'cover', 'author', 'readingTime']
  }
</script>
