<template>
  <div>
    <page-title title="Déclarations" />

    <div class="mt-10">
      <div class="flex flex-wrap font-bold text-xl">
        <div class="flex-auto p-1">
          <div class="text-center flex flex-col h-40 bg-gray-200 rounded">
            <span class="flex-auto"></span>
            <nuxt-link class="flex-auto" to="/declarations/changing-address/">Je démenage</nuxt-link>
          </div>
        </div>

        <div class="flex-auto p-1">
          <div class="text-center flex flex-col h-40 bg-gray-200 rounded">
            <span class="flex-auto"></span>
            <nuxt-link class="flex-auto" to="/declarations/changing-workplace/">Je change de cabinet</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageTitle from "../../components/page-title";
  export default {
    components: {PageTitle},
    head: () => ({
      title: "Déclarations"
    })
  }
</script>
