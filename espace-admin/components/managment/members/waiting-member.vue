<template>
  <div class="p-1 mb-2 rounded-lg pb-2 border-b border-gray-200 flex align-middle">
    <img :src="member.avatar" class="w-16 h-16 object-cover rounded-full mr-2" :alt="member.firstName" />
    <div class="w-1/6 mr-2">
      <p class="font-semibold text-sm">
        {{ member.firstName }} {{ member.lastName.toUpperCase() }}
      </p>
      <p class="font-light text-sm">{{ member.type.toLowerCase()}}</p>
    </div>
    <div class="w-1/6 mr-2 font-light text-sm">
      <p class="w-40 text-center mb-1 px-1 bg-green-200 text-green-700 rounded" v-if="member.hasDomains">spécialités définies</p>
      <p class="w-40 text-center mb-1 px-1 bg-red-200 text-red-700 rounded" v-else>spécialités non définies</p>

      <p class="w-40 text-center mb-1 px-1 bg-green-200 text-green-700 rounded" v-if="member.hasEducation">formations définies</p>
      <p class="w-40 text-center mb-1 px-1 bg-red-200 text-red-700 rounded" v-else>formations non définies</p>

      <p class="w-40 text-center mb-1 px-1 bg-green-200 text-green-700 rounded" v-if="member.hasCompany">entreprise déclarée</p>
      <p class="w-40 text-center mb-1 px-1 bg-red-200 text-red-700 rounded" v-else>entreprise non déclarée</p>
    </div>
    <div class="w-2/5 py-3">
      <button class="bg-red-700 text-white font-semibold h-8 w-24 rounded mr-1">Valider</button>
      <button class="border-red-700 border bg-white text-red-700 font-semibold h-8 w-24 rounded">Rejeter</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "waiting-member",
    props: ["member"]
  }
</script>
