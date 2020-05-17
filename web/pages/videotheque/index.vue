<template>
  <div class="w-full">
    <div class="w-full md:w-4/5 m-auto">
      <video-library-header />
      <hr />
      <div class="flex justify-left flex-wrap">
        <video-library-video-resume
          :title="v.title"
          :id="v.id"
          :cover="v.cover"
          :likes="v.likes"
          :views="v.views"
          :duration="v.duration"
          :key="v.id"
          v-for="v in videos"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import VideoLibraryHeader from "../../components/video-library/header";
  import VideoLibraryVideo from "../../components/video-library/video";
  import VideoLibraryVideoResume from "../../components/video-library/resume";
  export default {
    name: 'videotheque',
    components: {VideoLibraryVideoResume, VideoLibraryVideo, VideoLibraryHeader},
    head: () => ({
      title: "Vidéothèque"
    }),
    computed: {
      pinnedVideo: () => ({
        url: "https://www.youtube.com/embed/Ue1q0dgo4g4",
      }),
      videos: () => ([
        {
          id: 1,
          title: "Quel parcours choisir pour être avocat ?",
          duration: 15,
          views: 800,
          likes: 100,
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          url: ""
        },
        {
          id: 4,
          title: "Quel est votre rôle en tant qu'avocat ?",
          cover: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 60,
          views: 500,
          likes: 50,
          url: ""
        },
        {
          id: 2,
          title: "Le droit expliqué aux débutants",
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 42,
          views: 1000,
          likes: 200,
          url: ""
        },
        {
          id: 3,
          title: "Faire votre recherche d'emploi",
          cover: "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 30,
          views: 100,
          likes: 20,
          url: ""
        },
        {
          id: 1,
          title: "Quel parcours choisir pour être avocat ?",
          duration: 15,
          views: 800,
          likes: 100,
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          url: ""
        },
        {
          id: 4,
          title: "Quel est votre rôle en tant qu'avocat ?",
          cover: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 60,
          views: 500,
          likes: 50,
          url: ""
        },
        {
          id: 2,
          title: "Le droit expliqué aux débutants",
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 42,
          views: 1000,
          likes: 200,
          url: ""
        },
        {
          id: 3,
          title: "Faire votre recherche d'emploi",
          cover: "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 30,
          views: 100,
          likes: 20,
          url: ""
        },
        {
          id: 1,
          title: "Quel parcours choisir pour être avocat ?",
          duration: 15,
          views: 800,
          likes: 100,
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          url: ""
        },
        {
          id: 4,
          title: "Quel est votre rôle en tant qu'avocat ?",
          cover: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 60,
          views: 500,
          likes: 50,
          url: ""
        },
        {
          id: 2,
          title: "Le droit expliqué aux débutants",
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 42,
          views: 1000,
          likes: 200,
          url: ""
        },
        {
          id: 3,
          title: "Faire votre recherche d'emploi",
          cover: "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 30,
          views: 100,
          likes: 20,
          url: ""
        },
        {
          id: 1,
          title: "Quel parcours choisir pour être avocat ?",
          duration: 15,
          views: 800,
          likes: 100,
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          url: ""
        },
        {
          id: 4,
          title: "Quel est votre rôle en tant qu'avocat ?",
          cover: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 60,
          views: 500,
          likes: 50,
          url: ""
        },
        {
          id: 2,
          title: "Le droit expliqué aux débutants",
          cover: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 42,
          views: 1000,
          likes: 200,
          url: ""
        },
        {
          id: 3,
          title: "Faire votre recherche d'emploi",
          cover: "https://images.unsplash.com/photo-1505582866941-6788e0205dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          duration: 30,
          views: 100,
          likes: 20,
          url: ""
        }
      ])
    }
  }
</script>
