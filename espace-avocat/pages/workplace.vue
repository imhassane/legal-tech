<template>
  <div>
    <page-title title="Cabinet" />

    <workplace-resume :name="workplace.name" :cover="workplace.cover" :contact="workplace.contact" :lawyersCount="workplace.lawyers.length" />

    <h2 class="font-bold text-2xl mb-3">Mes collègues</h2>
    <workplace-lawyers :lawyers="workplace.lawyers" />
  </div>
</template>

<script>
  import PageTitle from "../components/page-title";
  import WorkplaceResume from "../components/workplace/resume";
  import WorkplaceLawyers from "../components/workplace/lawyers";
  export default {
    components: {WorkplaceLawyers, WorkplaceResume, PageTitle},
    head: () => ({
      title: "Mon cabinet"
    }),
    computed: {
      workplace: () => ({
        name: "Adeco Cabinet",
        cover: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        contact: {
          email: "adeco@cabinet.gn",
          telephone: "622347803",
          website: "https://adeco.gn"
        },
        lawyers: [
          {
          id: 1, firstName: "Alpha", lastName: "Diallo", avatar: "https://images.unsplash.com/photo-1537281809317-e1da440af90f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          domain: {id: 1, name: "Droits de la famille"}
        },
          {
            id: 2, firstName: "Tigui", lastName: "Kourouma", avatar: "https://images.unsplash.com/photo-1570406794469-630903944dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            domain: {id: 2, name: "Droits de l'environnement"}
          },
          {
            id: 3, firstName: "Mamadou", lastName: "Kaba", avatar: "https://images.unsplash.com/photo-1531483789621-6dc42dfa5078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            domain: {id: 3, name: "Droits de l'enfant"}
          },
          {
            id: 4, firstName: "Aliou", lastName: "Bah", avatar: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            domain: {id: 4, name: "Droits du commerce"}
          },
          {
            id: 5, firstName: "Kadiatou", lastName: "Sylla", avatar: "https://images.unsplash.com/photo-1580385537175-37f81495ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            domain: {id: 5, name: "Droits des entreprises"}
          }
        ]
      })
    }
  }
</script>
