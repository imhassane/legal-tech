<template>
  <div>
    <navbar />
    <last-news />
    <div>
      <nuxt />
    </div>
    <page-footer />
  </div>
</template>

<script>
  import Navbar from "../components/nav/navbar";
  import PageFooter from "../components/footer";
  import LastNews from "../components/news/last-news";
  export default {
    components: {LastNews, PageFooter, Navbar}
  }
</script>
