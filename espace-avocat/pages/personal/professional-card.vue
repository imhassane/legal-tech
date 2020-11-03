<template>
  <div>
    <page-title title="Carte professionnelle" />

    <div class="my-4 font-light">
      <p>Pour recevoir votre carte professionnelle, vous devez éffectuer une demande  et vous acquitter</p>
      <p>des frais de traitement dossier</p>
    </div>

    <div class="text-center">
      <button class="bg-red-700 text-white font-semibold px-4 py-2 rounded">
        Faire une demande
      </button>
    </div>

  </div>
</template>

<script>
  import PageTitle from "../../components/page-title";
  export default {
    components: {PageTitle},
    head: () => ({
      title: "Carte professionnelle"
    })
  }
</script>
