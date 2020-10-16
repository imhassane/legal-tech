<template>
  <div>
    <div class="h-64 text-center" :style="`
      background-image: url('${cover}');
      background-repeat: no-repat;
      background-size: cover;
      background-blend-mode: multiply;
    `">
      <div class="pt-4 text-white" style="height: 100%; background-color: rgba(0, 0, 0, .2);">
        <h2 class="font-bold text-4xl">{{ name }}</h2>
        <p class="font-light text-sm">{{ lawyersCount }} avocats</p>
      </div>
    </div>

    <div class="my-5">
      <h2 class="font-bold text-2xl mb-3">Contact</h2>

      <div class="flex flex-wrap">

        <div class="flex-auto">
          <svg class="inline w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <span class="ml-3">{{ contact.email }}</span>
        </div>

        <div class="flex-auto">
          <svg class="inline w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <span class="ml-3">{{ contact.telephone }}</span>
        </div>

        <div class="flex-auto">
          <svg class="inline w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span class="ml-3">{{ contact.website }}</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "workplace-resume",
    props: ["name", "cover", "contact", "lawyersCount"]
  }
</script>
