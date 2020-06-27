<template>
  <div>
    <header>
      <navbar />
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
  import Navbar from "../components/navbar/navbar";
  export default {
    components: {Navbar}
  }
</script>
