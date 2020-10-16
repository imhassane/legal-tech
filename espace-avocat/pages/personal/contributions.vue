<template>
  <div>
    <page-title title="Mes contributions" />

    <div>
      <h2>Voir pour cette période</h2>
    </div>

    <div>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
  import PageTitle from "../../components/page-title";
  export default {
    components: {PageTitle},
    head: () => ({
      title: "Côtisations"
    })
  }
</script>
