<template>
  <div>
    <div class="flex mr-3">
      <h1 class="font-semibold text-3xl mb-3">Mes contacts</h1>
    </div>
    <hr />

    <div class="my-4">
      <nuxt-link to="/personal/contacts/add-contact/" class="bg-red-700 text-white font-semibold px-3 py-2 rounded">Ajouter un contact</nuxt-link></li>
    </div>

    <div class="my-4">
      <input type="text" class="border-b border-gray-500 w-full py-4 px-2 font-light text-sm" placeholder="Rechercher un contact" />
      <div class="my-2">
        <button
          class="mx-1 my-1 bg-red-700 text-white font-semibold px-3"
          v-for="alpha in filterAlphabet" :key="alpha"
        >
          {{ alpha.toUpperCase() }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: () => ({
      title: "Mes contacts"
    }),

    computed: {
      filterAlphabet: () => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                            'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                            't', 'u', 'v', 'w', 'x', 'y', 'z']
    }
  }
</script>
