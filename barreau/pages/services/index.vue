<template>
  <div class="py-8">
    <div class="md:w-5/6 m-auto" v-if="services">
      <h1 class="text-3xl font-bold border-b-4 mb-5">Services du barreau</h1>
      <div>
        <p class="py-2 text-lg font-semibold">
          Le barreau doit fournir un service éfficace à ses membres.
        </p>
        <p class="py-2 text-lg font-semibold">Nous restons à vos côtés et voulons avant tout repondre à vos besoins</p>
        <p class="py-3 text-lg font-semibold">Nous vous fournissons la liste de nos services ci-dessous</p>
      </div>

      <div class="my-3">
        <input
          type="search"
          class="w-full md:w-1/2 py-3 px-5 rounded-lg shadow-lg bg-gray-300 font-semibold"
          placeholder="Je cherche un service"
          v-model="search"
        />
      </div>

      <div class="my-8">
        <div
          class="border-l-4 py-4 mb-3 bg-blue-200"
          v-if="s.name.toLowerCase().includes(search)"
          v-for="s in services" :key="s.id"
        >
          <span class="pl-5 font-semibold">{{ s.name }}</span>
        </div>
      </div>

    </div>
    <div v-else>
      <!-- TODO: loading -->
    </div>
  </div>
</template>

<script>
  export default {
    head: () => ({
      title: "Les services du barreau",
    }),
    data: () => ({
      search: ""
    }),
    computed: {
      services: () => ([
        {id: 22, name: "ACCÈS AU DROIT ET À LA JUSTICE"},
        {id: 21, name: "BARREAU ENTREPRENEURIAL (BE)"},
        {id: 20, name: "BUREAU D'AIDE A LA PROCEDURE ET A LA COMMUNICATION ELECTRONIQUE (BAPA)"},
        {id: 19, name: "BUREAU DE PRÉVENTION ÉCONOMIQUE ET FINANCIÈRE (BPEF)"},
        {id: 18, name: "BUREAU DES ASSOCIATIONS"},
        {id: 17, name: "BUREAU DES ASSURANCES"},
        {id: 16, name: "CENTRE DE REGLEMENT DES LITIGES PROFESSIONNELS (CRLP)"},
        {id: 15, name: "COMMISSION DE RÈGLEMENTATION DE L'EXERCICE DU DROIT (CRED)"},
        {id: 14, name: "COMMISSIONS OUVERTES"},
        {id: 13, name: "COMMUNICATION & AFFAIRES PUBLIQUES"},
        {id: 12, name: "COTISATIONS"},
        {id: 11, name: "ÉCONOMIQUE ET SOCIAL"},
        {id: 10, name: "FORMATION CONTINUE"},
        {id: 9, name: "HONORAIRES"},
        {id: 8, name: "RELATIONS INTERNATIONALES"},
        {id: 7, name: "SÉQUESTRE JURIDIQUE"},
        {id: 6, name: "SERVICE D'EXERCICE PROFESSIONNEL (SEP)"},
        {id: 5, name: "SERVICE DE L'ADMINISTRATION DES CABINETS D’AVOCATS EMPÊCHÉS D’EXERCER (SACAEE)"},
        {id: 4, name: "SERVICE DES VENTES ET SÛRETÉS JUDICIAIRES (SVS)"},
        {id: 3, name: "VESTIAIRE DU PALAIS DE JUSTICE"},
        {id: 2, name: "ZEN JAF"},
        {id: 1, name: "ZEN PRUD’HOMMES"}
      ])
    }
  }
</script>
