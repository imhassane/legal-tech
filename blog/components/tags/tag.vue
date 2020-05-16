<template>
  <nuxt-link class="mt-1 mr-1 mb-1 rounded pt-1 pb-1 pl-2 pr-2 text-gray-700 font-bold bg-gray-300" :to="`/tags/${id}/${name}`">#{{ name }}</nuxt-link>
</template>

<script>
  export default {
    name: 'tag',
    props: ['name', 'id']
  }
</script>
