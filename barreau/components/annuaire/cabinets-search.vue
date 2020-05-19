<template>
  <form action="">
    <div class="md:flex md:justify-center">
      <div class="mx-3">
        <label class="block mb-1" for="">Nom du cabinet</label>
        <input v-model="name" type="text" placeholder="Ex: Felix groupe" class="p-3 rounded bg-gray-200 font-semibold" />
      </div>
      <div class="mx-3">
        <label class="block mb-1" for="">Préfecture</label>
        <input v-model="prefecture" type="text" placeholder="Ex: Conakry" class="p-3 rounded bg-gray-200 font-semibold" />
      </div>
      <div class="mx-3 self-end">
        <button @click.prevent="onSearch(name, prefecture)" class="px-4 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-lg">
          Rechercher
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: "cabinets-search",
    props: ['onSearch'],
    data: () => ({ name: '', prefecture: ''})
  }
</script>
