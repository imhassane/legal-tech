<template>
  <div v-if="lawyer" class="py-8">
    <div class="border-b-2">
      <h1 class="md:w-5/6 m-auto text-2xl font-semibold mb-5 pb-2">{{ lawyer.firstName }} {{ lawyer.lastName }}</h1>
    </div>
    <div class="md:w-5/6 mt-10 mb-10 m-auto">
      <div class="md:flex md:justify-around">
        <div v-if="lawyer.avatar">
          <img class="rounded-lg shadow-lg w-64 h-64 object-cover" :src="lawyer.avatar" alt="image de profil" />
        </div>
        <div class="my-10 md:my-0 md:flex-1 mx-2 md:mx-5">
          <p class="mb-2 flex justify-between">
            <span class="font-semibold">Prénom</span>
            <span class="text-sm font-light">{{ lawyer.firstName }}</span>
          </p>
          <p class="mb-2 flex justify-between">
            <span class="font-semibold">Nom</span>
            <span class="text-sm font-light">{{ lawyer.lastName }}</span>
          </p>
          <p class="mb-2 flex justify-between">
            <span class="font-semibold">Date de sermon</span>
            <span class="text-sm font-light">{{ lawyer.sermonDate }}</span>
          </p>
          <p class="mb-2 flex justify-between">
            <span class="font-semibold">Travaille à</span>
            <span class="text-sm font-light">{{ lawyer.company.name }}</span>
          </p>
          <div v-if="lawyer.description && lawyer.description.trim().length > 0">
            <span class="block font-semibold">A propos</span>
            <p class="font-light my-3">
              {{ lawyer.description }}
            </p>
          </div>
        </div>
        <div>
          <cabinet-contact :contact="lawyer.contact" />
        </div>
      </div>
      <div class="my-10" v-if="lawyer.education">
        <h1 class="pb-2 mb-4 border-b-2 text-xl font-semibold">Parcours scolaire</h1>
        <div
          v-for="e in lawyer.education" :key="e.id"
          class="pl-3 border-l-4 mb-3"
        >
          <span class="font-light">{{ e.year }}</span>
          <span class="font-light">{{ e.school }}</span>
          <span class="font-semibold">{{ e.name }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- TODO: loading -->
    <p>Chargement</p>
  </div>
</template>

<script>
  import CabinetContact from "../../../components/cabinets/contact";
  export default {
    name: 'avocats-details',
    components: {CabinetContact},
    computed: {
      lawyer: () => ({
        id: 1,
        firstName: "Alpha", lastName: "Diallo",
        avatar: "https://images.unsplash.com/photo-1537281809317-e1da440af90f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        domain: {id: 1, name: "Droits de la famille"},
        description: `
          Je suis passionné par le droit. J'ai l'intention de faire avancer les choses dans mon pays et de rendre la justice là où elle
          est dûe
        `,
        education: [
          { id: 1, name: "Diplôme d'avocat en droit de la famille", year: 2008, school: "Université General Lansana Conté" },
          { id: 2, name: "Baccalauréat", year: 2002, school: "Lycée Sainte Marie" }
        ],
        contact: {
          telephone: "+224 625-345-098",
          email: "alpha.diallo@barreauguinee.gn"
        },
        company: {
          id: 1, name: "Felix Groupe"
        },
        sermonDate: "10 Mai 2010"
      })
    }
  }
</script>
