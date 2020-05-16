<template>
  <div class="w-full p-5">
    <div class="md:w-2/3 m-auto flex">
      <div class="flex-auto border-l-4 border-gray-500">
        <h1 class="ml-2 uppercase text-xl font-bold">Legal Tech</h1>
      </div>
      <div class="flex-auto">
        <ul class="md:flex">
          <li class="md:flex-auto">
            <div>
              <input type="search" class="bg-gray-200 p-2 rounded text-gray-700 font-bold" placeholder="Vous cherchez une loi, un document ..." />
            </div>
          </li>
          <li class="md:flex-auto">
            <nuxt-link class="font-bold" to="/barreau">Barreau</nuxt-link>
          </li>
          <li class="md:flex-auto">
            <nuxt-link class="font-bold" to="/annuaire">Annuaire</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navigation-main'
  }
</script>
