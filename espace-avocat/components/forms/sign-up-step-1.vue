<template>
  <div class="py-6 px-4">
    <div class="flex">
      <div class="flex-auto mr-3">
        <label for="last-name" class="font-bold text-2xl block">Nom</label>
        <input type="text" id="last-name" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
      </div>
      <div class="flex-auto">
        <label for="first-name" class="font-bold text-2xl block">Prénom</label>
        <input type="text" id="first-name" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
      </div>
    </div>

    <div class="my-5">
      <label for="email" class="font-bold text-2xl block">Adresse email</label>
      <input type="email" id="email" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
    </div>

    <div class="my-5 text-right">
      <input type="button" value="Etape suivante" class="px-4 py-2 rounded-full font-semibold bg-red-700 text-white" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "sign-up-step-1",
  }
</script>
