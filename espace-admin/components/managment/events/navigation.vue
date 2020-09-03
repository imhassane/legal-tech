<template>
  <div>
    <ul class="border-t-4 rounded border-red-700 font-semibold">
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/events/new">Nouvel évènement</nuxt-link>
      </li>
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/events/upcoming">A venir</nuxt-link>
      </li>
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/messages/finished">Terminés</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'events-navigation'
  }
</script>
