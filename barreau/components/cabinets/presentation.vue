<template>
  <div>
    <h1 class="font-semibold text-xl pb-2 border-b-2 mb-5">Présentation</h1>
    <p class="mb-2 flex">
      <span class="font-semibold flex-1">Identification du cabinet</span>
      <span class="font-light text-gray-700 text-sm">{{ identification}}</span>
    </p>
    <p class="mb-2 flex">
      <span class="flex-1 font-semibold">Préfecture</span>
      <span class="font-light text-gray-700 text-sm">{{ prefecture}}</span>
    </p>
    <p class="mb-2 flex">
      <span class="font-semibold flex-1">Nombre d'avocats</span>
      <span class="font-light text-gray-700 text-sm">{{ totalLawyers}}</span>
    </p>
    <p class="mb-2 flex">
      <span class="flex-1 font-semibold">Actif depuis le</span>
      <span class="font-light text-gray-700 text-sm">{{ createdAt}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'presentation',
    props: ['prefecture', 'totalLawyers', 'identification', 'description', 'createdAt']
  }
</script>
