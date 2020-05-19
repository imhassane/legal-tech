<template>
  <div class="hidden md:block md:flex justify-around py-2 bg-gray-100 shadow-inner">
    <div v-for="p in posts" :key="p.id">
      <div class="bg-white rounded shadow-lg py-2 px-4 my-2 mx-3">
        <p class="font-semibold text-sm">{{ p.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'last-news',
    computed: {
      posts: () => ([
        {
          id: 0,
          title: "Comment trouver un emploi en tant qu'avocat ?",
          slug: "comment-trouver-un-emploi-en-tant-qu-avocat",
          extract: "C'est bien, vous avez fini vos études et vous pensez à votre insertion professionnelle ? Il est temps d'apprendre les techniques...",
          cover: "https://images.unsplash.com/photo-1504454449875-92cfa39e1315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          createdAt: "11 Mai 2020",
          likes: 10,
          readingTime: 3,
          author: {
            firstName: "Hassane",
            lastName: "SOW",
            avatar: "https://images.unsplash.com/photo-1561259230-46fa9832bf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }
        },
        {
          id: 2,
          title: "Quelques conseils pour votre entretien d'embauche",
          slug: "quelques-conseils-pour-votre-entretien-d-embauche",
          extract: "C'est bien, vous avez fini vos études et vous pensez à votre insertion professionnelle ? Il est temps d'apprendre les techniques...",
          cover: "https://images.unsplash.com/photo-1448932284983-0c7b152eba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          createdAt: "10 Avril 2020",
          likes: 10,
          readingTime: 3,
          author: {
            firstName: "Hassane",
            lastName: "SOW",
            avatar: "https://images.unsplash.com/photo-1561259230-46fa9832bf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }
        },
        {
          id: 3,
          title: "Rencontrer un avocat professionel pour discuter du métier",
          slug: "rencontrer-un-avocat-professionnel-pour-discuter-du-metier",
          extract: "C'est bien, vous avez fini vos études et vous pensez à votre insertion professionnelle ? Il est temps d'apprendre les techniques...",
          cover: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          createdAt: "11 Mai 2020",
          likes: 10,
          readingTime: 3,
          author: {
            firstName: "Hassane",
            lastName: "SOW",
            avatar: "https://images.unsplash.com/photo-1561259230-46fa9832bf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }
        },
        {
          id: 5,
          title: "Quelques conseils pour votre entretien d'embauche",
          slug: "quelques-conseils-pour-votre-entretien-d-embauche",
          extract: "C'est bien, vous avez fini vos études et vous pensez à votre insertion professionnelle ? Il est temps d'apprendre les techniques...",
          cover: "https://images.unsplash.com/photo-1448932284983-0c7b152eba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          createdAt: "10 Avril 2020",
          likes: 10,
          readingTime: 3,
          author: {
            firstName: "Hassane",
            lastName: "SOW",
            avatar: "https://images.unsplash.com/photo-1561259230-46fa9832bf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }
        }
      ])
    }
  }
</script>
