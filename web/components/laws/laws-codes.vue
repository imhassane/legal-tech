<template>
  <div>
    <div v-for="l in laws" :key="l" class="flex justify-between pt-2 pb-2 pl-1 mb-2 border-b-2 border-gray-300">
      <p class="font-semibold">{{ l.code }}</p>
      <div>
        <span class="font-bold mr-2">{{ l.createdAt }}</span>
        <nuxt-link class="pl-2 pr-2 pt-1 pb-1 text-purple-900 font-bold" :to="`/lois/${l.id}/${l.slug}`">Afficher</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'laws-codes',
    computed: {
      laws: () => ([
        { id: 1, code: "Aviation civile", slug: "aviation-civile", createdAt: "1975" },
        { id: 2, code: "1er", slug: "1-er", createdAt: "2012" },
        { id: 3, code: "Chasse", slug: "chasse", createdAt: "2005" },
        { id: 4, code: "Déontologie de la police nationale", slug: "deontologie-de-la-police-nationale", createdAt: "2018" },
        { id: 5, code: "Déontologie médicale", slug: "deontologie-medicale", createdAt: "1983" },
        { id: 6, code: "Artisanat", slug: "artisanat", createdAt: "1990" },
        { id: 7, code: "Eau", slug: "eau", createdAt: "1975" },
        { id: 8, code: "Elevages et produits animaliers", slug: "elevages-et-produits-animaliers", createdAt: "2018" },
        { id: 9, code: "Enfant", slug: "enfant", createdAt: "2018" },
        { id: 10, code: "Environnement", slug: "environnement", createdAt: "2018" },
      ])
    }
  }
</script>
