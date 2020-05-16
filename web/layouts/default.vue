<template>
  <div>
    <navbar />
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Navbar from "~/components/nav/navbar";

  export default {
    components: { Navbar }
  }
</script>
