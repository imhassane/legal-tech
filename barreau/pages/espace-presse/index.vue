<template>
  <div class="py-8">
    <div class="md:w-5/6 m-auto" v-if="posts">
      <h1 class="pb-2 mb-5 border-b-4 text-3xl font-semibold">Espace presse</h1>
      <div class="my-5">
        <div class="md:flex md:flex-wrap">
          <div
            class="md:w-1/2 m-auto px-3 my-4"
            v-for="p in posts" :key="p.id"
          >
            <div class="shadow rounded border-b-2 border-red-800">
              <div>
                <img :src="p.cover" :alt="p.title" class="w-full h-64 object-cover" />
              </div>
              <div class="py-2 px-4">
                <h1 class="font-semibold">{{ p.title}}</h1>
                <p class="my-2">
                  <span class="font-light text-sm text-gray-400">{{ p.readingTime }} min</span>
                </p>
                <p class="my-2 font-light text-sm text-gray-500">
                  {{ p.extract }}
                </p>
              </div>
            </div>
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
  export default {
    head: () => ({
      title: "Espace presse du barreau"
    }),
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
