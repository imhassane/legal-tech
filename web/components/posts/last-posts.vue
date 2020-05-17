<template>
  <div class="w-full m-auto md:w-4/5">
    <div class="m-auto">
      <last-post
        :id="lastPosts.last.id",
        :title="lastPosts.last.title"
        :cover="lastPosts.last.cover",
        :author="lastPosts.last.author",
        :extract="lastPosts.last.extract"
        :readingTime="lastPosts.last.readingTime"
        :slug="lastPosts.last.slug"
      />
    </div>
    <div class="m-auto flex justify-around flex-wrap">
      <post-resume
        :id="p.id",
        :title="p.title"
        :cover="p.cover",
        :author="p.author",
        :extract="p.extract"
        :slug="p.slug"
        :readingTime="p.readingTime"
        :key="p.id"
        v-for="p in lastPosts.posts"
      />
    </div>

    <p class="mt-10 mb-5 text-center">
      <a class="p-2 border-1 rounded shadow-md bg-gray-600 text-white font-bold" href="https://blog-legal-tech.netlify.app" target="_blank">Voir le blog</a>
    </p>
  </div>
</template>

<script>
  import LastPost from "./last-post";
  import PostResume from "./resume";
  export default {
    name: 'last-posts',
    components: {PostResume, LastPost},
    computed: {
      lastPosts: () => ({
        last: {
          id: 1,
          title: "Trouver un stage dans le domaine",
          slug: "trouver-un-stage-dans-le-domaine",
          extract: "C'est bien, vous avez fini vos études et vous pensez à votre insertion professionnelle ? Il est temps d'apprendre les techniques...",
          cover: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80",
          createdAt: "11 Mai 2020",
          likes: 10,
          readingTime: 6,
          author: {
            firstName: "Hassane",
            lastName: "SOW",
            avatar: "https://images.unsplash.com/photo-1561259230-46fa9832bf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }
        },
        posts: [
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
      ]
      })
    }
  }
</script>
