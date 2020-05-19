<template>
  <div v-if="domains">
    <h2 class="text-xl font-semibold border-b-2 pb-2 mb-5">Spécialisations du cabinet</h2>
    <ul class="ml-5 font-semibold">
      <li class="pl-3 border-l-4 mb-4" v-for="d in domains" :key="d.id">{{ d.name }}</li>
    </ul>
  </div>
  <div v-else>
    <!-- TODO: loading -->
    <p>Chargement</p>
  </div>
</template>

<script>
  export default {
    name: 'cabinet-domains',
    props: ['domains']
  }
</script>
