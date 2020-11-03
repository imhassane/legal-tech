<template>
  <div>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: "loading",
    props: ["message"]
  }
</script>
