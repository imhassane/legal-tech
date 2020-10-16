<template>
  <div>
    <page-title title="Aide juridictionnelle" />

    <div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
  import PageTitle from "../../components/page-title";
  export default {
    components: {PageTitle},
    head: () => ({
      title: "Aide juridictionnelle"
    })
  }
</script>
