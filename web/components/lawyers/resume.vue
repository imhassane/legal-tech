<template>
  <div class="w-1/2 md:w-1/4 mb-2 md:mb-0">
    <div class="border-1 rounded shadow-md md:flex mr-1 ml-1">
      <div class="flex-auto p-0">
        <img class="h-24 w-full object-cover" :src="avatar" alt="Image de profil de l'avocat" />
      </div>
      <div class="p-3">
        <p>{{ firstName }} {{ lastName }}</p>
        <p class="text-sm font-light">@{{ company.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lawyer-resume',
    props: ['avatar', 'firstName', 'lastName', 'company']
  }
</script>
