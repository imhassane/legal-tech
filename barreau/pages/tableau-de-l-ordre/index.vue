<template>
  <div class="py-8">
    <div class="md:w-5/6 m-auto" v-if="lawyers">
      <h1 class="text-2xl font-semibold pb-2 mb-5 border-b-2">Tableau de l'ordre des avocats</h1>
      <p class="font-semibold my-3">
        Cette liste contient tous les avocats inscrits sur notre plateforme
      </p>
      <p class="font-light text-sm text-gray-500 ">
        <span>{{ lawyers.length }} avocats trouvés</span>
      </p>
      <hr class="mb-3 mt-2" />

      <div class="my-2">
        <button class="bg-red-800 text-white font-bold px-3 py-1 mr-2">1</button>
        <button class="bg-red-800 text-white font-bold px-3 py-1 mr-2">2</button>
        <button class="bg-red-800 text-white font-bold px-3 py-1">3</button>
      </div>

      <div class="my-5">
        <div class="flex flex-wrap">
          <div class="px-2 py-1">
            <button
              @click="onDomainChange(0)"
              class="rounded-lg shadow lg bg-red-700 text-white font-bold px-5 py-2"
            >
              Tous les domaines
            </button>
          </div>
          <div class="px-2 py-1" v-for="d in domains" :key="d.id">
            <button
              @click="onDomainChange(d.id)"
              class="rounded-lg shadow lg bg-red-700 text-white font-bold px-5 py-2"
            >
              {{ d.name }}
            </button>
          </div>
        </div>
      </div>

      <div class="my-10">
        <div class="flex flex-wrap">
          <div v-for="l in lawyers" :key="l.id">
            <cabinet-lawyers
              :id="l.id"
              :firstName="l.firstName" :lastName="l.lastName"
              :avatar="l.avatar" :domain="l.domain"
              v-if="l.domain.id === currentDomain || currentDomain === 0"
              />
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <!-- TODO: loading -->
      <p>chargement</p>
    </div>
  </div>
</template>

<script>
  import CabinetLawyers from "../../components/cabinets/lawyers";
  export default {
    components: {CabinetLawyers},
    head: () => ({
      title: "Tableau de l'ordre des avocats"
    }),
    data: () => ({
      currentDomain: 0
    }),
    methods: {
      onDomainChange: function(id) {
        this.currentDomain = id;
      }
    },
    computed: {
      domains: () => ([
        { id: 1, name: "Droits de la famille"},
        {id: 2, name: "Droits de l'environnement"},
        {id: 3, name: "Droits de l'enfant"},
        {id: 4, name: "Droits du commerce"},
        {id: 5, name: "Droits des entreprises"}
      ]),
      lawyers: () => ([
        {
          id: 1,
          firstName: "Alpha",
          lastName: "Diallo",
          avatar: "https://images.unsplash.com/photo-1537281809317-e1da440af90f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 1, name: "Droits de la famille"}
        },
        {
          id: 2,
          firstName: "Tigui",
          lastName: "Kourouma",
          avatar: "https://images.unsplash.com/photo-1570406794469-630903944dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 2, name: "Droits de l'environnement"}
        },
        {
          id: 3,
          firstName: "Mamadou",
          lastName: "Kaba",
          avatar: "https://images.unsplash.com/photo-1531483789621-6dc42dfa5078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 3, name: "Droits de l'enfant"}
        },
        {
          id: 4,
          firstName: "Aliou",
          lastName: "Bah",
          avatar: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 4, name: "Droits du commerce"}
        },
        {
          id: 5,
          firstName: "Kadiatou",
          lastName: "Sylla",
          avatar: "https://images.unsplash.com/photo-1580385537175-37f81495ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 5, name: "Droits des entreprises"}
        },
        {
          id: 6,
          firstName: "Alpha",
          lastName: "Diallo",
          avatar: "https://images.unsplash.com/photo-1537281809317-e1da440af90f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 1, name: "Droits de la famille"}
        },
        {
          id: 7,
          firstName: "Tigui",
          lastName: "Kourouma",
          avatar: "https://images.unsplash.com/photo-1570406794469-630903944dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 2, name: "Droits de l'environnement"}
        },
        {
          id: 8,
          firstName: "Mamadou",
          lastName: "Kaba",
          avatar: "https://images.unsplash.com/photo-1531483789621-6dc42dfa5078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 3, name: "Droits de l'enfant"}
        },
        {
          id: 9,
          firstName: "Aliou",
          lastName: "Bah",
          avatar: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 4, name: "Droits du commerce"}
        },
        {
          id: 10,
          firstName: "Kadiatou",
          lastName: "Sylla",
          avatar: "https://images.unsplash.com/photo-1580385537175-37f81495ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 5, name: "Droits des entreprises"}
        }
      ])
    }
  }
</script>
