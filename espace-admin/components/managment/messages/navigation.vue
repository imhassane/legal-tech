<template>
  <div>
    <ul class="border-t-4 rounded border-red-700 font-semibold">
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/messages/received">Boîte de reception</nuxt-link>
      </li>
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/messages/sent">Envoyés</nuxt-link>
      </li>
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/messages/trash">Corbeille</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'messages-navigation'
  }
</script>
