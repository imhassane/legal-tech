<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    beforeMount() {
      if(process.browser && localStorage.getItem(process.env.LOCALSTORAGE_AUTH_TOKEN)) {
        this.$router.push("/dashboard/");
      }
    }
  }
</script>
