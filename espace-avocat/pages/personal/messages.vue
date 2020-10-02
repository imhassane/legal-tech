<template>
  <div class="px-3 py-10">
    <div class="flex flex-wrap">

      <div class="w-full md:w-2/12">
        <ul class="w-full rounded-lg border py-1 shadow-md font-semibold">
          <li class="py-2 border-b border-gray-100 flex">
            <nuxt-link class="flex-1 px-4" to="/personal/messages/received">Reçus</nuxt-link>
            <span class="flex-1 px-4 text-right">
              <span class="bg-gray-100 rounded-full px-3 py-1">5</span>
            </span>
          </li>
          <li class="py-2 border-b border-gray-100 flex">
            <nuxt-link class="flex-1 px-4" to="/personal/messages/sent">Envoyés</nuxt-link>
            <span class="flex-1 px-4 text-right">
              <span class="bg-gray-100 rounded-full px-3 py-1">0</span>
            </span>
          </li>
          <li class="py-2 border-b border-gray-100 flex">
            <nuxt-link class="flex-1 px-4" to="/personal/messages/draft">Brouillon</nuxt-link>
            <span class="flex-1 px-4 text-right">
              <span class="bg-gray-100 rounded-full px-3 py-1">0</span>
            </span>
          </li>
          <li class="py-2 flex">
            <nuxt-link class="flex-1 px-4" to="/personal/messages/trash">Corbeille</nuxt-link>
            <span class="flex-1 px-4 text-right">
              <span class="bg-gray-100 rounded-full px-3 py-1">0</span>
            </span>
          </li>
        </ul>
      </div>

      <div class="w-full md:w-10/12 px-4">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: () => ({
      title: "Messages"
    })
  }
</script>
