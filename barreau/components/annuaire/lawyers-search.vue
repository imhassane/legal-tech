<template>
  <form action="">
    <div class="md:flex md:justify-center">
      <div class="mx-3">
        <label class="block mb-1" for="">Nom de l'avocat</label>
        <input v-model="name" type="text" placeholder="Ex: Fatima Condé" class="p-3 rounded bg-gray-200 font-semibold" />
      </div>
      <div class="mx-3">
        <label class="block mb-1" for="">Spécialisation</label>
        <rights-list-select :onChange="handleSelectChange" />
      </div>
      <div class="mx-3">
        <label class="block mb-1" for="">Préfecture</label>
        <input v-model="prefecture" type="text" placeholder="Ex: Conakry" class="p-3 rounded bg-gray-200 font-semibold" />
      </div>
      <div class="mx-3 self-end">
        <button
          @click.prevent="onSearch(name, specialite, prefecture)"
          class="px-4 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-lg"
        >
          Rechercher
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import RightsListSelect from "./rights-list-select";
  export default {
    name: 'lawyers-search',
    props: ['onSearch'],
    components: {RightsListSelect},
    data: () => ({
      name: '', specialite: '', prefecture: ''
    }),
    methods: {
      handleSelectChange(event) {
        this.specialite = event.target.value;
      }
    }
  }
</script>
