<template>
  <span class="px-2 bg-red-700 font-light text-sm text-white mx-2 my-1">{{ title }}</span>
</template>

<script>
  export default {
    name: "tag",
    props: ["title"]
  }
</script>
