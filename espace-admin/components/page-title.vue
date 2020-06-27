<template>
  <h1 class="font-semibold text-3xl pb-3 border-b-4 border-gray-300">{{ title }}</h1>
</template>

<script>
  export default {
    name: 'page-title',
    props: ['title']
  }
</script>
