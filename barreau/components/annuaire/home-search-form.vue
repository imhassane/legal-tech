<template>
  <div class="md:w-5/6 m-auto md:flex md:justify-around">
    <div>
      <h1 class="text-4xl mt-5 mb-5 font-bold border-b-4">Annuaire des avocats</h1>
      <p class="mb-12 font-semibold">Rechercher un avocat du barreau de Conakry</p>
    </div>

    <form class="">
      <div class="m-2">
        <input type="text" class="w-full rounded-lg p-3 bg-gray-200 font-semibold text-lg" placeholder="Nom de l'avocat" />
      </div>
      <div class="m-2 relative">
        <select class="font-semibold block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="">Toutes les spécialités</option>
          <option :value="r.id" :key="r.id" v-for="r in rights">{{ r.name }}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="m-2">
        <input type="text" class="w-full rounded-lg p-3 bg-gray-200 font-semibold text-lg" placeholder="Nom de l'avocat" />
      </div>
      <div class="m-2">
        <button class="font-bold text-white shadow-lg bg-red-700 rounded-lg p-3">
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
