<template>
  <div>
    <div class="flex flex-wrap">
      <div class="flex-auto px-2">
        <label class="block font-semibold">Nom</label>
        <input type="text" class="border-1 bg-gray-300 font-semibold py-3 px-5 rounded-md w-full" />
      </div>
      <div class="flex-auto px-2">
        <label class="block font-semibold">Prénom</label>
        <input type="text" class="border-1 bg-gray-300 font-semibold py-3 px-5 rounded-md w-full" />
      </div>
      <div class="flex-auto px-2">
        <label class="block font-semibold">Type</label>
        <select class="border-1 bg-gray-300 font-semibold py-3 px-5 rounded-md w-full">
          <option value="">Avocat</option>
          <option value="">Communication</option>
          <option value="">Stagiaire</option>
          <option value="">Développeur</option>
        </select>
      </div>
    </div>
    <div class="my-10 px-2">
      <label class="block font-semibold">Adresse email</label>
      <input type="email" class="border-1 bg-gray-300 font-semibold py-3 px-5 rounded-md w-full" />
    </div>
    <div class="flex flex-wrap">
      <div class="flex-auto px-2">
        <label class="block font-semibold">Mot de passe</label>
        <input type="password" class="border-1 bg-gray-300 font-semibold py-3 px-5 rounded-md w-full" />
      </div>
      <div class="flex-auto px-2">
        <label class="block font-semibold">Repetez le mot de passe</label>
        <input type="password" class="border-1 bg-gray-300 font-semibold py-3 px-5 rounded-md w-full" />
      </div>
    </div>
    <div class="my-10 px-2">
      <button class="bg-red-700 text-white font-semibold py-3 px-3 rounded-md shadow-md">
        Ajouter le membre
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resume-new-member'
  }
</script>
