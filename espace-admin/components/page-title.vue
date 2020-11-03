<template>
  <h1 class="font-bold text-3xl pb-3 border-b border-gray-500">{{ title }}</h1>
</template>

<script>
  export default {
    name: "page-title",
    props: ["title"]
  }
</script>
