<template>
  <div class="my-3 font-semibold text-lg">
    <div class="text-red-700" v-if="type === 'danger'">
      {{ message }}
    </div>

    <div class="text-green-700" v-if="type === 'info'">
      {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "errors-box",
    props: ["type", "message"]
  }
</script>
