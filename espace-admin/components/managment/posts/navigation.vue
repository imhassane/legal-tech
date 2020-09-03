<template>
  <div>
    <ul class="border-t-4 rounded border-red-700 font-semibold">
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/posts/waiting">En attente de validation</nuxt-link>
      </li>
      <li class="py-1 border-b-2 border-gray-200">
        <nuxt-link class="px-3" to="/managment/posts/confirmed">Articles en ligne</nuxt-link>
      </li>
    </ul>

    <div class="my-10">
      <div>
        <div>
          <nuxt-link class="p-3 block text-center bg-red-700 text-white font-semibold rounded-md shadow-md" to="/managment/posts/new">Nouvel article</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'posts-navigation'
  }
</script>
