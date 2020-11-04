<template>
  <div class="font-light py-1">
    <p v-if="type === 'info'" class="md:w-1/2 py-2 red font-semibold rounded bg-red-200 text-center text-red-700 mx-auto my-1">
      {{ message }}
    </p>
    <p class="text-red-700" v-else-if="type === 'danger'">{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: "errors-box",
    props: ["type", "message"]
  }
</script>
