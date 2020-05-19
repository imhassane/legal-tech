<template>
  <form action="">
    <div class="md:flex md:justify-center">
      <div class="mx-3">
        <label class="block mb-1" for="">Nom du cabinet</label>
        <input type="text" placeholder="Ex: Felix groupe" class="p-3 rounded bg-gray-200 text-white font-semibold" />
      </div>
      <div class="mx-3">
        <label class="block mb-1" for="">Préfecture</label>
        <input type="text" placeholder="Ex: Conakry" class="p-3 rounded bg-gray-200 text-white font-semibold" />
      </div>
      <div class="mx-3 self-end">
        <button class="px-4 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-lg">
          Rechercher
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: "cabinets-search"
  }
</script>
