<template>
  <div class="py-8">
    <div class="md:mx-auto md:flex">
      <div>
        <events-navigation />
      </div>
      <div class="md:ml-5">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
  import EventsNavigation from "../../components/managment/events/navigation";
  export default {
    components: {EventsNavigation},
    head: () => ({
      title: "Gestion des évènements"
    })
  }
</script>
