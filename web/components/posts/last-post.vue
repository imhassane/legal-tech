<template>
  <div class="mb-3">
    <div class="md:flex">
      <div>
        <img class="w-full h-64 object-cover" :src="cover" alt="">
      </div>
      <div class="p-5">
        <h1 class="text-3xl font-bold">{{ title }}</h1>
        <p class="text-sm font-bold text-gray-700">{{ readingTime }} min</p>
        <p class="font-light text-sm mb-5">{{ extract }}</p>

        <div class="flex">
          <div>
            <img class="rounded-full w-12 h-12 object-cover" :src="author.avatar" :alt="author.firstName" />
          </div>
          <div class="p-2">
            <p class="text-sm font-bold">{{ author.firstName }} {{ author.lastName }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'last-post',
    props: ['title', 'author', 'cover', 'slug', 'readingTime', 'extract']
  }
</script>
