<template>
  <nav class="py-6 px-3 flex font-semibold text-center">

    <div class="align-bottom">
      <span class="mx-2">
        <nuxt-link to="/personal/me/">Espace avocat</nuxt-link>
      </span>
    </div>

    <div>
      <span class="mx-2">
        <nuxt-link to="/posts/new">
          <svg style="display: inline" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
        </nuxt-link>
      </span>
      <span class="mx-2">
        <nuxt-link to="/library">
          <svg style="display: inline" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        </nuxt-link>
      </span>
    </div>

    <div class="flex-1">
      <img
        class="w-10 h-10 rounded-full object-cover float-right"
        v-bind:class="[$route.path === '/personal/me/' ? 'hidden': '']"
        src="https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">
    </div>
  </nav>
</template>

<script>
  export default {
    name: "main-nav"
  }
</script>
