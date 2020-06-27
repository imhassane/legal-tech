<template>
  <div>
    <ul class="border-t-4 rounded border-red-700 font-semibold">
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/members/waiting">En attente de validation</nuxt-link>
      </li>
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/members/confirmed">Membres confirmés</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'members-navigation'
  }
</script>
