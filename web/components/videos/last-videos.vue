<template>
  <div class="md:w-4/5 m-auto mt-5 pt-2 pb-5">
    <h3 class="font-bold">Nos vidéos > (30 au total)</h3>
    <div class="flex flex-wrap justify-around mb-5" v-if="videos">
      <video-resume
        :title="v.title"
        :avatar="v.author.avatar"
        :id="v.id"
        :cover="v.cover"
        :duration="v.duration"
        :key="v.id"
        v-for="v in videos"
      />
    </div>
    <div v-else>
      <p>chargement</p>
    </div>
    <p class="text-center mb-3">
      <nuxt-link class="p-2 border-1 rounded shadow-md bg-gray-600 text-white font-bold m-auto" to="/annuaire">Voir les vidéos</nuxt-link>
    </p>
  </div>
</template>

<script>
  import VideoResume from "./resume";
  export default {
    name: 'last-videos',
    components: {VideoResume},
    computed: {
      videos: () => ([
        {
          id: 1,
          title: "Quel parcours choisir pour être avocat ?",
          cover: "https://images.unsplash.com/photo-1587613755309-e8293efe70f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
          duration: 15,
          author: {
            avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
          }
        },
        {
          id: 2,
          title: "Le droit expliqué aux débutants",
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 42,
          author: {
            avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
          }
        },
        {
          id: 3,
          title: "Faire votre recherche d'emploi",
          cover: "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 30,
          author: {
            avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
          }
        },
        {
          id: 4,
          title: "Quel est votre rôle en tant qu'avocat ?",
          cover: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 60,
          author: {
            avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
          }
        }
      ])
    }
  }
</script>
