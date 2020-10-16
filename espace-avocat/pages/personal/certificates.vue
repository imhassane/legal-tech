<template>
  <div>
    <page-title title="Attestations" />

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
      title: "Attestations"
    })
  }
</script>
