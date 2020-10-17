<template>
  <div class="md:w-1/3 p-2">
    <div class="px-1">
      <img :src="cover" class="h-48 w-full object-cover" />
      <div class="flex my-3">
        <img class="object-cover h-12 w-12 rounded-full" :src="author.avatar" :alt="author.firstName" />
        <div class="flex-auto ml-3">
          <p class="font-light">{{ author.lastName }} {{ author.firstName }}</p>
          <p class="text-sm font-light">{{ date }}</p>
        </div>
      </div>
      <div>
        <p class="font-bold text-lg my-2">{{ title }}</p>
        <p class="font-light">{{ extract }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news",
    props: ["title", "cover", "extract", "author", "date"]
  }
</script>
