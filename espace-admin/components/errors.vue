<template>
  <div class="font-light py-1">
    <p class="text-red-700" v-if="type === 'danger'">{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: "errors-box",
    props: ["type", "message"]
  }
</script>
