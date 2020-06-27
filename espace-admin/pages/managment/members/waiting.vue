<template>
  <div>
    <page-title title="Membres en attente" />
    <p class="my-3 py-3 px-4 border-l-4 border-gray-800 bg-gray-300">
      Vous pourrez à tout moment changer le statut d'un membre
    </p>

    <div class="my-12">
      <table class="w-full">
        <thead>
          <th>Photo</th>
          <th>Prénom & Nom</th>
          <th>Date d'inscription</th>
          <th>Type</th>
          <th>Plus de details</th>
          <th>Valider</th>
          <th>Rejeter</th>
        </thead>
        <tbody>
          <tr v-for="m in members" :key="m.id" class="py-4 my-4 border-b-2 border-gray-300">
            <td>
              <img :src="m.avatar" class="w-12 h-12 object-cover" :alt="m.firstName" />
            </td>
            <td>{{ m.firstName }} {{ m.lastName }}</td>
            <td>{{ m.createdAt }}</td>
            <td>{{ m.type }}</td>
            <td></td>
            <td><button class="py-2 px-4 bg-blue-400">Valider</button></td>
            <td><button>Rejeter</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import PageTitle from "../../../components/page-title";
  export default {
    components: {PageTitle},
    head: () => ({
      title: "Membres en attente"
    }),
    computed: {
      members: () => ([
        {
          id: 1,
          firstName: "Alpha Mamadou",
          lastName: "Barry",
          avatar: "https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          createdAt: "22 Juin 2020",
          type: "LAWYER"
        },
        {
          id: 2,
          firstName: "Alpha Mamadou",
          lastName: "Barry",
          avatar: "https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          createdAt: "22 Juin 2020",
          type: "LAWYER"
        },
        {
          id: 3,
          firstName: "Jean",
          lastName: "Koivoguy",
          avatar: "https://images.unsplash.com/photo-1538384690625-e2e7bcf9e402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          createdAt: "22 Juin 2020",
          type: "LAWYER"
        },
        {
          id: 4,
          firstName: "Fodé",
          lastName: "Soumah",
          avatar: "https://images.unsplash.com/photo-1563721572772-fbf713fff374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          createdAt: "22 Juin 2020",
          type: "LAWYER"
        },
      ])
    }
  }
</script>
