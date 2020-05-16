<template>
  <div class="md:w-3/4 m-auto">
    <h3 class="font-bold">Actualités des barreaux > (10 au total)</h3>

    <div class="md:flex md:justify-around">
      <bar-news-resume
        :id="n.id"
        :title="n.title"
        :cover="n.cover"
        :key="n.id"
        :extract="n.extract"
        v-for="n in news"
      />
    </div>
  </div>
</template>

<script>
  import BarNewsResume from "./resume";
  export default {
    name: 'last-news',
    components: {BarNewsResume},
    computed: {
      news: () => ([
        {
          id: 1,
          title: "Le barreau central de la Côte d'Ivoire recrute",
          cover: "https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          extract: "Vous avez fini vos études et vous souhaitez vous intégrer dans la vie professionnelle"
        },
        {
          id: 2,
          title: "La France dépasse les 60000 avocats",
          cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          extract: "L'annuaire français des avocats décompte plus de 60000 avocats dans toutes ses régions"
        },
        {
          id: 3,
          title: "Les avocats en Afrique",
          cover: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          extract: "On va discuter des conditions de travail des avocats dans le continent africain"
        },
        {
          id: 4,
          title: "Le barreau sénegalais va recruter plus de femmes",
          cover: "https://images.unsplash.com/photo-1526615735835-530c611a3d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          extract: "Le Senegal souhaite aider ses femmes à avoir plus d'accès au monde professionnel"
        }
      ])
    }
  }
</script>
