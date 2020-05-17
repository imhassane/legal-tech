<template>
  <div>
    <table class="table-auto">
      <thead>
      <tr>
        <th class="px-4 py-2">Code</th>
        <th class="px-4 py-2">Année</th>
        <th class="px-4 py-2">Voir</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="l.id" v-for="l in laws">
        <td class="border px-4 py-2 font-semibold">{{ l.code }}</td>
        <td class="border px-4 py-2">{{ l.createdAt }}</td>
        <td class="border px-4 py-2">
          <nuxt-link :to="`/lois/${l.id}/${l.slug}`">Voir les articles</nuxt-link>
        </td>
      </tr>
      </tbody>
    </table>
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
