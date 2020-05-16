<template>
  <div class="flex items-center pt-2 pb-2">
    <img class="w-10 h-10 rounded-full mr-4" :src="author.avatar" alt="Avatar of the author">
    <div class="text-sm">
      <p class="text-gray-900 leading-none font-semibold">{{ author.firstName }} {{ author.lastName }}</p>
      <p class="text-gray-600">Le {{createdAt}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-meta',
    props: ['createdAt', 'author']
  }
</script>
