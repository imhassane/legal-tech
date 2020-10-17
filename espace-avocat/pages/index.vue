<template>
  <div>

    <div class="py-3">
      <div class="md:w-1/3 py-2 bg-red-700 text-white font-semibold rounded-full m-auto text-center">
        <svg class="inline mx-1 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span class=" text-center">Nouvelles offres de stage dans un cabinet</span>
      </div>
    </div>

    <div class="px-4 mt-6">
      <page-title title="Actualités du barreau" />

      <last-news
        :title="lastNews.title" :extract="lastNews.extract"
        :tags="lastNews.tags" :cover="lastNews.cover"
      />

      <div class="flex flex-wrap">
        <news v-for="n in posts" :key="n.id"
              :title="n.title" :extract="n.extract"
              :cover="n.cover" :author="n.author" :date="n.date" />
      </div>

    </div>

  </div>
</template>

<script>
import PageTitle from "../components/page-title";
import LastNews from "../components/articles/last-news";
import News from "../components/articles/news";
export default {
  components: {News, LastNews, PageTitle},
  layout: "visitor",
  computed: {
    lastNews: () => ({
      title: "Les femmes de plus en plus actives dans le barreau",
      cover: "https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      extract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      tags: [
        { id: 1, name: "equite" },
        { id: 2, name: "modernisation" },
        { id: 3, name: "societe" }
      ]
    }),
    posts: () => ([
      {
        id: 1,
        title: "Plus d'emplois disponibles pour les futurs étudiants",
        cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        extract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        author: {
          id: 1, firstName: "SOW", lastName: "Hassane",
          avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        date: "Aout 2020"
      },
      {
        id: 2,
        title: "Aider les jeunes dans leur formation",
        cover: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        extract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        author: {
          id: 1, firstName: "SOW", lastName: "Hassane",
          avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        date: "Aout 2020"
      },
      {
        id: 3,
        title: "La technologie aux portes du barreau guinéen",
        cover: "https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        extract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        author: {
          id: 1, firstName: "SOW", lastName: "Hassane",
          avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        date: "Aout 2020"
      },
    ])
  }
}
</script>
