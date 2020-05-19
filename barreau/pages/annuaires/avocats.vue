<template>
  <div class="py-8">
    <div class="md:w-5/6 m-auto">
      <h1 class="text-3xl font-bold border-b-4">Annuaire des avocats</h1>
      <div class="my-5 font-semibold">
        <p class="py-3">
          L'annuaire des avocats contient la liste des avocats régulièrement inscrits sur notre plateforme.
        </p>
        <p class="py-3">
          La transition vers une plateforme en ligne et son adoption prend du temps et fait que certains avocats ne sont
          pas encore inscrits sur la plateforme.
        </p>
        <div class="py-5">
          <lawyers-search :onSearch="handleSearch" />
        </div>

        <div class="mt-5 mb-5" v-if="showSearchResult">
          <p class="font-semibold pb-2 mb-5 border-b-2">{{ lawyers.length }} correspondent à votre recherche</p>
          <div class="md:flex md:flex-wrap">
            <cabinet-lawyers
              v-for="l in lawyers" :key="l.id"
              :id="l.id"
              :firstName="l.firstName" :lastName="l.lastName"
              :avatar="l.avatar" :domain="l.domain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LawyersSearch from "../../components/annuaire/lawyers-search";
  import CabinetLawyers from "../../components/cabinets/lawyers";
  export default {
    name: 'avocats',
    components: {CabinetLawyers, LawyersSearch},
    head: () => ({
      title: "Annuaire des avocats"
    }),
    data: () => ({
      name: '', specialite: '', prefecture: '',
      showSearchResult: false,
    }),
    methods: {
      handleSearch(name, specialite, prefecture) {
        if(name) this.name = name;
        if(specialite) this.specialite = specialite;
        if(prefecture) this.prefecture = prefecture;

        if(name || specialite || prefecture) {
          this.showSearchResult = true;
        }
      }
    },
    computed: {
      lawyers: () => ([
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
      ])
    }
  }
</script>
