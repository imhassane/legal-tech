<template>
  <div class="md:w-5/6 m-auto">
    <h1 class="text-center uppercase mb-4 font-bold text-3xl text-white">Annuaire des avocats</h1>
    <p class="mb-12 text-center font-semibold text-white">Rechercher un avocat du barreau de Conakry</p>

    <form class="md:flex md:justify-around">
      <div class="m-2">
        <input type="text" class="rounded-lg p-3 bg-gray-200 font-semibold text-lg" placeholder="Nom de l'avocat" />
      </div>
      <div class="m-2">
        <select class="rounded-lg p-3 bg-gray-200 font-semibold text-lg">
          <option value="">Toutes les spécialités</option>
          <option :value="r.id" :key="r.id" v-for="r in rights">{{ r.name }}</option>
        </select>
      </div>
      <div class="m-2">
        <input type="text" class="rounded-lg p-3 bg-gray-200 font-semibold text-lg" placeholder="Nom de l'avocat" />
      </div>
      <div class="m-2">
        <button class="border-2 font-bold shadow-lg bg-gray-200 rounded-lg p-3">
          Rechercher
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'home-search-form',
    computed: {
      rights: () => ([
        {id: 1, name: "Droit bancaire et boursier"},
        {id: 2, name: "Droit commercial et de la concurrence"},
        {id: 3, name: "Droit de l'environnement"},
        {id: 4, name: "Droit de l'arbitrage"},
        {id: 5, name: "Droit de la famille"},
        {id: 6, name: "Droit de la santé"},
        {id: 7, name: "Droit de l'assurance"}
      ])
    }
  }
</script>
