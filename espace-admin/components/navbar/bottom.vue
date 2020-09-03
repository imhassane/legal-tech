<template>
  <div class="py-1 w-full">
    <ul class="md:flex md:justify-around w-full py-4">
      <li class="font-semibold">
        <nuxt-link class="hover:p-4" to="/managment/companies/resume">Cabinets</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/managment/members/resume">Membres</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/managment/posts/resume">Articles</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/managment/messages/received">Messages</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/managment/events/resume">Evenements</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/statistics">Statistiques</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/notifications">Notifications</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navbar-bottom'
  }
</script>
