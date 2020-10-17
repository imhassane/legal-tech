<template>
  <div class="md:flex md:px-5 py-3 md:py-5 rounded-md">
    <div class="md:w-1/4">
      <img :src="cover" :alt="title" class="object-cover" />
    </div>
    <div class="md:w-1/2 md:px-4">
      <h1 class="font-bold text-3xl">{{ title }}</h1>
      <p class="font-light">{{ extract }}</p>
    </div>
    <div class="md:w-1/4">
      <div>
        <span class="m-1 font-semibold" v-for="t in tags" :key="t.id">#{{ t.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "last-news",
    props: ["title", "cover", "tags", "extract"]
  }
</script>
