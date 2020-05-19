<template>
  <div class="py-8">
    <div class="md:w-5/6 m-auto">
      <h1 class="text-3xl font-bold border-b-4">Annuaire des cabinets</h1>
      <div class="my-5 font-semibold">
        <p class="py-3">
          L'annuaire des cabinets contient la liste des cabinets inscrits sur notre plateforme.
        </p>
        <div class="py-5">
          <cabinets-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CabinetsSearch from "../../components/annuaire/cabinets-search";
  export default {
    name: 'cabinets',
    components: {CabinetsSearch},
    head: () => ({
      title: "Annuaire des cabinets"
    })
  }
</script>
