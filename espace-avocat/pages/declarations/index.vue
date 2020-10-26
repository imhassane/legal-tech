<template>
  <div>
    <page-title title="Déclarations" />

    <div class="mt-10">
      <div class="font-bold text-xl">
        <div class="px-4 mb-5 border-l-4 border-red-700">
          <div class="">
            <span class="flex-auto"></span>
            <nuxt-link class="flex-auto" to="/declarations/started-working/">J'ai commencé une activité</nuxt-link>
          </div>
        </div>

        <div class="px-4 mb-5 border-l-4 border-red-700">
          <div class="">
            <span class="flex-auto"></span>
            <nuxt-link class="flex-auto" to="/declarations/changing-address/">Je démenage</nuxt-link>
          </div>
        </div>

        <div class="px-4 mb-5 border-l-4 border-red-700">
          <div class="">
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
