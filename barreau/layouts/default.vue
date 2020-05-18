<template>
  <div>
    <navbar />
    <div>
      <nuxt />
    </div>
    <page-footer />
  </div>
</template>

<script>
  import Navbar from "../components/nav/navbar";
  import PageFooter from "../components/footer";
  export default {
    components: {PageFooter, Navbar}
  }
</script>
