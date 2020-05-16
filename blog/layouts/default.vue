<template>
  <div class="">
    <navbar />
    <div>
      <nuxt />
    </div>
    <page-footer />
  </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>

<script>
  import Navbar from "../components/navbar";
  import PageFooter from "../components/footer";

  export default {
    components: {Navbar, PageFooter}
  }
</script>
