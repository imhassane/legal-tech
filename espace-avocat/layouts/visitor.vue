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
    components: {VisitorNav}
  }
</script>
