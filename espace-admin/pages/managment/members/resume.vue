<template>
  <div>
    <div class="flex flex-wrap">
      <div class="px-2 flex-auto">
        <div class="py-4 bg-indigo-700 border-indigo-800 rounded-lg shadow-md">
          <p class="text-white text-center font-semibold">Membres inscrits</p>
          <p class="text-center my-1">
            <span class="font-semibold bg-white rounded-full border-2 p-1">15</span>
          </p>
        </div>
      </div>
      <div class="px-2 flex-auto">
        <div class="py-4 bg-pink-700 border-indigo-800 rounded-lg shadow-md">
          <p class="text-white text-center font-semibold">Avocats</p>
          <p class="text-center my-1">
            <span class="font-semibold bg-white rounded-full border-2 p-1">05</span>
          </p>
        </div>
      </div>
      <div class="px-2 flex-auto">
        <div class="py-4 bg-yellow-700 border-indigo-800 rounded-lg shadow-md">
          <p class="text-white text-center font-semibold">En attente</p>
          <p class="text-center my-1">
            <span class="font-semibold bg-white rounded-full border-2 p-1">08</span>
          </p>
        </div>
      </div>
      <div class="px-2 flex-auto">
        <div class="py-4 bg-green-700 border-indigo-800 rounded-lg shadow-md">
          <p class="text-white text-center font-semibold">Confirmés</p>
          <p class="text-center my-1">
            <span class="font-semibold bg-white rounded-full border-2 p-1">12</span>
          </p>
        </div>
      </div>
    </div>
    <!-- Ajout d'un membre -->
    <div class="my-10">
      <h1 class="font-semibold text-2xl pb-3 border-b-4 border-gray-300 mb-5">Ajouter un membre</h1>
      <resume-new-member />
    </div>
  </div>
</template>

<script>
  import ResumeNewMember from "../../../components/managment/members/new-member";
  export default {
    components: {ResumeNewMember}
  }
</script>
