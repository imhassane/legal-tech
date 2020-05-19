<template>
  <div class="py-5">
    <div class="md:w-5/6 m-auto">
      <h1 class="text-3xl font-bold border-b-4">Annuaires</h1>
      <div class="my-5 font-semibold">
        Nous vous proposons deux annuaires. Vous pouvez rechercher les cabinets d'avocats ou aussi
        les avocats de votre région.
      </div>
      <div class="my-5 font-semibold text-lg">
        <p class="border-l-4 pl-5 mb-8 py-5 bg-blue-100">
          <nuxt-link to="/annuaires/avocats">Voir l'annuaire des avocats</nuxt-link>
        </p>
        <p class="border-l-4 pl-5 mb-8 py-5 bg-blue-100">
          <nuxt-link to="/annuaires/cabinets">Voir l'annuaire des cabinets</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'annuaires',
    head: () => ({
      title: "Annuaires"
    })
  }
</script>
