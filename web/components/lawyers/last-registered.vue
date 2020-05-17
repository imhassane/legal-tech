<template>
  <div class="w-full md:w-4/5 m-auto mt-5 pt-2">
    <h3 class="font-bold mb-2">Derniers avocats inscrits > (200 au total)</h3>
    <div class="flex flex-wrap justify-center md:justify-center mb-5" v-if="lawyers">
      <lawyer-resume
        :avatar="l.avatar"
        :company="l.company"
        :firstName="l.firstName"
        :lastName="l.lastName"
        :key="l.id"
        v-for="l in lawyers"
      />
    </div>
    <div v-else>
      <p>chargement</p>
    </div>
    <p class="text-center mb-3">
      <nuxt-link class="p-2 border-1 rounded shadow-md bg-gray-600 text-white font-bold m-auto" to="/annuaire">Voir l'annuaire</nuxt-link>
    </p>
    <hr class="mt-4" />
  </div>
</template>

<script>
  import LawyerResume from "./resume";
  export default {
    components: {LawyerResume},
    computed: {
      lawyers: () => ([
        {
          id: 1,
          firstName: "Fofana",
          lastName: "Kankou",
          avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
          company: {
            name: "Telix Groupe"
          }
        },
        {
          id: 2,
          firstName: "Moussa",
          lastName: "Kaba",
          avatar: "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          company: {
            name: "Telix Groupe"
          }
        },
        {
          id: 3,
          firstName: "Sow",
          lastName: "Aliou",
          avatar: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          company: {
            name: "SOW & Frères"
          }
        },
        {
          id: 4,
          firstName: "Barry",
          lastName: "Binta",
          avatar: "https://images.unsplash.com/photo-1586171984069-1dbce3573a10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          company: {
            name: "Telix Groupe"
          }
        }
      ])
    }
  }
</script>
