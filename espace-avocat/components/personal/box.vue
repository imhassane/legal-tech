<template>
  <span :class="`${margins}`" @click="redirectToUrl">
    <span class="font-light text-sm">/</span>
    <nuxt-link :to="url">{{ title }}</nuxt-link>
  </span>
</template>

<script>
  export default {
    name: "box",
    props: ['title', 'url', 'backColor', 'width', 'height', 'margins'],
    methods: {
      redirectToUrl: function() {
        this.$router.push(this.url);
      }
    }
  }
</script>
