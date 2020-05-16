<template>
  <div class="m-1 border-1 rounded shadow-md flex">
    <div class="flex-auto">
      <img class="h-20 w-20 object-cover" :src="avatar" alt="Image de profil de l'avocat" />
    </div>
    <div class="p-3">
      <p>{{ firstName }} {{ lastName }}</p>
      <p class="text-sm font-light">Travaille à {{ company.name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lawyer-resume',
    props: ['avatar', 'firstName', 'lastName', 'company']
  }
</script>
