<template>
  <div
    v-if="post"
    class="w-full mt-10"
  >
    <div class="m-auto pr-1 pl-1 md:p-0 md:w-1/2">
      <h1 class="text-4xl font-bold mb-5">{{ post.title }}</h1>
      <hr class="mb-2" />
      <post-meta :author="post.author" :createdAt="post.createdAt" />
      <div class="mt-5 mb-5">
        <img class="w-full md:h-64 object-cover" :src="post.cover" alt="">
      </div>
      <article>
        <p class="text-xl font-bold mb-3">{{ post.introduction }}</p>
        <div class="font-light" v-html="post.content"></div>
        <!-- Publicité -->
        <div class="font-light mt-3 mb-5" v-html="post.conclusion"></div>
      </article>

      <div class="flex justify-left">
        <tag :id="t.id" :name="t.name" :key="t.id" v-for="t in post.tags" />
      </div>

      <div class="flex justify-between mb-10 mt-10">
        <div class="flex-1 mr-4">
          <div class="p-5 border-1 rounded shadow" v-if="post.previous">
            <p class="w-full md:w-1/2 font-semibold p-1 mb-1 rounded-sm md:font-bold text-gray-700">Précedent</p>
            <h1 class="text-medium md:font-bold mb-2">{{ post.previous.title }}</h1>
            <p>
              <nuxt-link class="font-bold underline" :to="`/lire/${post.previous.id}/${post.previous.slug}`">lire</nuxt-link>
            </p>
          </div>
        </div>
        <div class="flex-1 text-right">
          <div class="p-5 border-1 rounded shadow" v-if="post.next">
            <p class="text-right mb-2 mt-1">
              <span class="w-full md:w-1/2 font-semibold p-1 mb-1 rounded-sm md:font-bold text-gray-700">Suivant</span>
            </p>
            <h1 class="text-medium md:font-bold mb-2">{{ post.next.title }}</h1>
            <p>
              <nuxt-link class="font-bold underline" :to="`/lire/${post.next.id}/${post.next.slug}`">lire</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>

  </div>
</template>

<script>
  import PostMeta from "../../../components/posts/meta";
  import Tag from "../../../components/tags/tag";
  export default {
    name: 'lire',
    components: {Tag, PostMeta},
    computed: {
      post: () => ({
        id: 1,
        title: "Trouver un stage dans le domaine",
        slug: "trouver-un-stage-dans-le-domaine",
        introduction: `
        La recherche d'un stage peut s'avérer être la partie la plus compliquée
        pendant votre parcours universitaire, très peu d'entreprises ont la
        capacité de vous en offrir et aujourd'hui on verra comment se démarquer`,
        content: `
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error saepe quasi atque repellat,
            ab est amet omnis blanditiis quisquam sint.
            Blanditiis fugit facilis labore aliquam vitae, neque itaque tempora saepe!
           </p>
           <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error saepe quasi atque repellat,
            ab est amet omnis blanditiis quisquam sint.
            Blanditiis fugit facilis labore aliquam vitae, neque itaque tempora saepe!
           </p>
           <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error saepe quasi atque repellat,
            ab est amet omnis blanditiis quisquam sint.
            Blanditiis fugit facilis labore aliquam vitae, neque itaque tempora saepe!
           </p>
           <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error saepe quasi atque repellat,
            ab est amet omnis blanditiis quisquam sint.
            Blanditiis fugit facilis labore aliquam vitae, neque itaque tempora saepe!
           </p>
        `,
        conclusion: `
          <p>Et voilà, on espère vraiment vous avoir aidé au maximum et bon courage dans votre recherche de stage</p>
        `,
        cover: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80",
        createdAt: "11 Mai 2020",
        likes: 10,
        readingTime: 6,
        author: {
          firstName: "Hassane",
          lastName: "SOW",
          avatar: "https://images.unsplash.com/photo-1561259230-46fa9832bf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        tags: [
          { id: 1, name: "droit"},
          { id: 2, name: "emploi"},
          { id: 3, name: "etudes"}
        ],
        next: {
          id: 5,
          title: "Quelques conseils pour votre entretien d'embauche",
          slug: "quelques-conseils-pour-votre-entretien-d-embauche"
        },
        previous: {
          id: 0,
          title: "Rencontrer un avocat professionel pour discuter du métier",
          slug: "rencontrer-un-avocat-professionnel-pour-discuter-du-metier"
        }
      })
    }
  }
</script>
