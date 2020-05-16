<template>
  <div class="">
    <div class="w-full">
      <last-registered />
    </div>
    <div class="w-full">
      <last-videos />
    </div>
    <div class="w-full bg-gray-200 mt-10 mb-10">
      <div class="p-5 w-full md:w-2/3 pt-10 pb-10 m-auto">
        <h1 class="text-2xl md:text-4xl font-bold mb-3">Vous cherchez un avocat ?</h1>
        <ul>
          <li class="ml-5 mb-2 font-bold">pour vous représenter</li>
          <li class="ml-5 mb-2 font-bold">pour des renseignements</li>
          <li class="ml-5 mb-2 font-bold">pour des questions</li>
        </ul>
        <div class="pt-5 pb-5">
          <nuxt-link class="p-3 font-bold rounded shadow-md bg-gray-600 text-white" to="/annuaire">Rendez-vous sur notre annuaire</nuxt-link>
        </div>
      </div>
    </div>
    <div class="w-full">
      <last-news />
    </div>
  </div>
</template>

<script>

import LastRegistered from "../components/lawyers/last-registered";
import LastVideos from "../components/videos/last-videos";
import LastNews from "../components/bars/last-news";
export default {
  components: {
    LastNews,
    LastVideos,
    LastRegistered

  }
}
</script>
