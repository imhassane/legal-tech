<template>
  <div>
    <p class="font-semibold mb-3">Recherchez un avocat et ajoutez le à votre carnet de contact électronique</p>
    <div class="mb-3">
      <input type="text"
             placeholder="Rechercher un avocat"
             class="w-full border-b border-gray-500 font-light text-sm px-2 py-4"
      />
      <p class="mt-1 text-sm font-light">0 résultat</p>
    </div>
  </div>
</template>

<script>
  export default {
    head: () => ({
      title: "Ajouter un contact"
    })
  }
</script>
