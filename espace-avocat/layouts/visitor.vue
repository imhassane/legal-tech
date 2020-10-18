<template>
  <div>
    <visitor-nav />

    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
  import VisitorNav from "../components/nav/visitor-nav";
  export default {
    name: "visitor",
    components: {VisitorNav},
    beforeMount() {
      if(process.browser && localStorage.getItem(process.env.LOCALSTORAGE_AUTH_TOKEN)) {
        this.$router.push("/personal/me/");
      }
    }
  }
</script>
