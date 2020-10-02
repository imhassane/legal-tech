<template>
  <div class="bg-gray-200 md:py-12" style="min-height: 80vh;">

    <div class="md:w-2/3 my-auto m-auto border border-gray-400 rounded-lg bg-white shadow-md">
      <div class="py-4 border-b border-gray-400">
        <div class="px-3">
          <p class="font-bold text-lg">Informations personnelles</p>
          <p class="font-light">Vous pouvez modifier vos informations à tout moment</p>
        </div>
      </div>

      <div>
        <div class="flex bg-gray-100 py-4 px-4">
          <p class="w-1/3 font-semibold text-gray-500">Nom & prénom</p>
          <p class="w-2/3">SOW Hassane</p>
        </div>
        <div class="flex bg-white py-4 px-4">
          <p class="w-1/3 font-semibold text-gray-500">Adresse email</p>
          <p class="w-2/3">thsow.pro@gmail.com</p>
        </div>
        <div class="flex bg-gray-100 py-4 px-4">
          <p class="w-1/3 font-semibold text-gray-500">&Agrave; propos de moi</p>
          <p class="w-2/3">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
            Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
            Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </p>
        </div>
        <div class="flex bg-white py-4 px-4">
          <p class="w-1/3 font-semibold text-gray-500">Attestations</p>
          <div class="w-2/3">
            <div class="border border-gray-200 rounded">
              <div class="border-b flex py-1 px-2">
                <span class="w-1/12"></span>
                <span class="w-8/12">Carte professionnelle</span>
                <span class="w-3/12">
                  <nuxt-link to="/documents/see/" class="text-blue-700 font-semibold">Voir</nuxt-link>
                  <nuxt-link to="/download/" class="text-blue-700 font-semibold">Télécharger</nuxt-link>
                </span>
              </div>
              <div class="flex py-1 px-2">
                <span class="w-1/12"></span>
                <span class="w-8/12">Attestation de côtisation</span>
                <span class="w-3/12">
                  <nuxt-link to="/documents/see/" class="text-blue-700 font-semibold">Voir</nuxt-link>
                  <nuxt-link to="/download/" class="text-blue-700 font-semibold">Télécharger</nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    head: () => ({
      title: "Mes informations personnelles"
    })
  }
</script>
