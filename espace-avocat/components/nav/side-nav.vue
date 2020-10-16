<template>
  <aside>
    <ul class="px-2">
      <li
        class="py-2 pl-3 font-semibold flex"
        v-bind:class="[$route.path === '/personal/me/' ? 'text-black border-l-4 border-red-700' : 'text-gray-500']"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <nuxt-link class="ml-2" to="/personal/me/">Mon compte</nuxt-link>
      </li>

      <li
        class="py-2 pl-3 font-semibold flex"
        v-bind:class="[$route.path === '/personal/messages/received/' ? 'text-black border-l-4 border-red-700' : 'text-gray-500']"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        <nuxt-link class="ml-2" to="/personal/messages/received/">Messagerie</nuxt-link>
      </li>

      <li
        class="py-2 pl-3 font-semibold flex"
        v-bind:class="[$route.path === '/personal/professional-card/' ? 'text-black border-l-4 border-red-700' : 'text-gray-500']"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
        <nuxt-link class="ml-2" to="/personal/professional-card/">Carte pro.</nuxt-link>
      </li>

      <li
        class="py-2 pl-3 font-semibold flex"
        v-bind:class="[$route.path === '/personal/contributions/' ? 'text-black border-l-4 border-red-700' : 'text-gray-500']"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <nuxt-link class="ml-2" to="/personal/contributions/">Contributions</nuxt-link>
      </li>

      <li
        class="py-2 pl-3 font-semibold flex"
        v-bind:class="[$route.path === '/personal/help/' ? 'text-black border-l-4 border-red-700' : 'text-gray-500']"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <nuxt-link class="ml-2" to="/personal/help/">Aides</nuxt-link>
      </li>

      <li
        class="py-2 pl-3 font-semibold flex"
        v-bind:class="[$route.path === '/personal/certificates/' ? 'text-black border-l-4 border-red-700' : 'text-gray-500']"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        <nuxt-link class="ml-2" to="/personal/certificates/">Attestations</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'side-nav',
    mounted() {
      console.log(this.$route)
    }
  }
</script>
