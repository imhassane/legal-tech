<template>
  <div>
    <breadcrumb />
    <main>

      <div class="mb-5 m-auto md:w-2/3">
        <h1 class="ml-2 mb-2 mt-2 font-bold text-lg">Epinglé</h1>
        <featured-post :post="featured" />
      </div>

      <div class="mb-5">
        <h1 class="mt-10 mb-10 font-bold text-lg text-center">Nos derniers articles</h1>
        <posts-list :posts="posts" />
      </div>

      <div class="mb-5">
        <h1 class="mt-10 mb-10 font-bold text-lg text-center">Notre article favoris</h1>
        <favorite-post :post="favorite" />
      </div>

    </main>
  </div>
</template>

<script>
import Breadcrumb from '~/components/breadcrumb.vue';
import FeaturedPost from "../components/posts/featured";
import PostsList from "../components/posts/posts";
import FavoritePost from "../components/posts/favorite";

export default {
  components: {
    FavoritePost,
    PostsList,
    'featured-post': FeaturedPost,
    Breadcrumb
  },
  computed: {
    featured: () => ({
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
    }),
    posts: () => ([
      {
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
      }
    ]),
    favorite: () => (
      {
        id: 4,
        title: "Quelles expériences feront de vous un bon avocat ?",
        slug: "quelles-experiences-feront-de-vous-un-bon-avocat",
        extract: "C'est bien, vous avez fini vos études et vous pensez à votre insertion professionnelle ? Il est temps d'apprendre les techniques...",
        cover: "https://images.unsplash.com/photo-1504454449875-92cfa39e1315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        createdAt: "11 Mai 2020",
        likes: 10,
        readingTime: 5,
        author: {
          firstName: "Hassane",
          lastName: "SOW",
          avatar: "https://images.unsplash.com/photo-1561259230-46fa9832bf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        }
      }
    )
  }
}
</script>
