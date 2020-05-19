<template>
  <div class="py-8">
    <div class="md:w-5/6 m-auto">
      <h1 class="text-3xl font-bold border-b-4">Annuaire des avocats</h1>
      <div class="my-5 font-semibold">
        <p class="py-3">
          L'annuaire des avocats contient la liste des avocats régulièrement inscrits sur notre plateforme.
        </p>
        <p class="py-3">
          La transition vers une plateforme en ligne et son adoption prend du temps et fait que certains avocats ne sont
          pas encore inscrits sur la plateforme.
        </p>
        <div class="py-5">
          <lawyers-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LawyersSearch from "../../components/annuaire/lawyers-search";
  export default {
    name: 'avocats',
    components: {LawyersSearch},
    head: () => ({
      title: "Annuaire des avocats"
    })
  }
</script>
