<template>
  <div class="py-8">
    <div class="md:w-5/6 m-auto">
      <h1 class="text-3xl font-bold border-b-4">Annuaire des cabinets</h1>
      <div class="my-5 font-semibold">
        <p class="py-3">
          L'annuaire des cabinets contient la liste des cabinets inscrits sur notre plateforme.
        </p>
        <div class="py-5">
          <cabinets-search :onSearch="handleSearch" />
        </div>
      </div>

      <div class="my-5" v-if="search.name && (search.name.length > 0) && search.prefecture && search.prefecture.length > 0">
        <p class="mb-5 pb-2 font-semibold border-b-2">
          Vous avez recherché le cabinet
          <span class="bg-gray-200 rounded px-2 py-1 font-semibold">{{ search.name }}</span>
          dans la préfecture de <span  class="bg-gray-200 rounded px-2 py-1 font-semibold">{{ search.prefecture }}</span>
        </p>

        <div class="md:flex">
          <div class="m-3"
            v-for="c in searchCabinets" :key="c.id"
          >
            <div class="p-3 border-t-2 border-red-800 rounded-lg shadow-lg ">
              <p class="text-lg font-semibold my-2">
                <nuxt-link :to="`/cabinets/voir/${c.id}`">{{ c.name }}</nuxt-link>
              </p>
              <p class="font-light text-sm">{{ c.prefecture }}</p>
              <p class="text-sm font-light text-gray-500">{{ c.totalLawyers }} avocats</p>
              <p class="text-sm font-light text-gray-500">Actif depuis le {{ c.createdAt }}</p>
            </div>
          </div>
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
    }),
    data: () => ({
      search: {
        name: "", prefecture: ""
      }
    }),
    methods: {
      handleSearch: function(name, prefecture){
        if(name.length > 0 && prefecture.length > 0) {
          this.search = {name, prefecture};
        }
      }
    },
    computed: {
      searchCabinets: () => ([
        {id: 1, name: "Felix Groupe", prefecture: "Kindia", totalLawyers: 5, createdAt: "11 Mai 2010"},
        {id: 1, name: "Hampathé Bah", prefecture: "Mamou", totalLawyers: 2, createdAt: "10 Avril 2000"},
        {id: 1, name: "Condé & frères", prefecture: "Mandiana", totalLawyers: 3, createdAt: "5 Juillet 2008"},
        {id: 1, name: "Les justiciers", prefecture: "Conakry", totalLawyers: 20, createdAt: "25 Novembre 2012"},
        {id: 1, name: "Les hirondelles", prefecture: "Conakry", totalLawyers: 15, createdAt: "1 Janvier 2018"},
      ])
    }
  }
</script>
