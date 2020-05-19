<template>
  <div v-if="cabinet" class="py-8">
    <div class="py-3 border-b-2 mb-5">
      <h1 class="md:w-5/6 m-auto my-2 font-semibold text-2xl pb-2">{{ cabinet.name }}</h1>
    </div>
    <div class="md:w-5/6 m-auto">
      <div class="md:flex md:justify-between">
        <div class="md:flex-1 md:mr-10">
          <div class="mb-8">
            <cabinet-presentation
              :prefecture="cabinet.prefecture"
              :description="cabinet.description"
              :identification="cabinet.identification"
              :createdAt="cabinet.createdAt"
              :totalLawyers="cabinet.totalLawyers"
            />
          </div>
          <cabinet-domains v-if="cabinet.domains" :domains="cabinet.domains" />
        </div>
        <div v-if="cabinet.contact">
          <cabinet-contact :contact="cabinet.contact" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- TODO: loading component -->
    <p>Chargement</p>
  </div>
</template>

<script>
  import CabinetContact from "../../../components/cabinets/contact";
  import CabinetDomains from "../../../components/cabinets/domains";
  import CabinetPresentation from "../../../components/cabinets/presentation";
  export default {
    components: {CabinetPresentation, CabinetDomains, CabinetContact},
    head: () => ({
      title: "Cabinet Felix groupe"
    }),
    computed: {
      cabinet: () => ({
        name: "Felix Groupe",
        prefecture: "Conakry",
        identification: "N° 5698-0304-29303",
        domains: [
          {id: 1, name: "Droits de la famille"},
          {id: 2, name: "Droits de l'environnement"},
          {id: 3, name: "Droits de l'enfant"},
          {id: 4, name: "Droits du commerce"},
          {id: 5, name: "Droits des entreprises"}
        ],
        description: `
          Nous sommes un cabinet d'avocats sis à la Minière,
          nous sommes un ensemble de jeunes visionnaires tous diplômés et spécialisés dans notre domaine et sommes
          prêts à vous apporter notre expertise dans la résolution de vos problèmes.
        `,
        contact: {
          telephone: "+224 622-345-987",
          email: "contact@felix-groupe.gn",
          facebook: "https://facebook.com/felix-groupe",
        },
        createdAt: "11 Avril 2011",
        totalLawyers: 5,
        lawyers: [
          {
            id: 1, firstName: "Alpha", lastName: "Diallo", avatar: "",
            domain: {id: 1, name: "Droits de la famille"}
          },
          {
            id: 1, firstName: "Alpha", lastName: "Diallo", avatar: "",
            domain: {id: 2, name: "Droits de l'environnement"}
          },
          {
            id: 1, firstName: "Alpha", lastName: "Diallo", avatar: "",
            domain: {id: 3, name: "Droits de l'enfant"}
          },
          {
            id: 1, firstName: "Alpha", lastName: "Diallo", avatar: "",
            domain: {id: 4, name: "Droits du commerce"}
          },
          {
            id: 1, firstName: "Alpha", lastName: "Diallo", avatar: "",
            domain: {id: 5, name: "Droits des entreprises"}
          }
        ]
      })
    }
  }
</script>
