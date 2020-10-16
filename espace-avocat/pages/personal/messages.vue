<template>
  <div style="min-height: 80vh;">
    <div class="">

      <page-title title="Messagerie" />

      <div class="my-4">
        <nuxt-link class="py-2 px-3 rounded bg-red-700 text-white font-semibold" to="/personal/messages/new/">Nouveau message</nuxt-link>
      </div>

      <div class="bg-white py-3">
        <ul class="w-full rounded-lg border py-1 font-semibold flex">
          <li class="py-2 border-r border-gray-200 flex">
            <nuxt-link class="flex-1 px-4" to="/personal/messages/received">Reçus</nuxt-link>
            <span class="flex-1 px-4 text-right">
              <span class="bg-gray-100 rounded-full px-3 py-1">5</span>
            </span>
          </li>

          <li class="py-2 border-r border-gray-200 flex">
            <nuxt-link class="flex-1 px-4" to="/personal/messages/sent">Envoyés</nuxt-link>
            <span class="flex-1 px-4 text-right">
              <span class="bg-gray-100 rounded-full px-3 py-1">0</span>
            </span>
          </li>

          <li class="py-2 border-r border-gray-200 flex">
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

      <div>
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
  import PageTitle from "../../components/page-title";
  export default {
    components: {PageTitle},
    head: () => ({
      title: "Messages"
    })
  }
</script>
