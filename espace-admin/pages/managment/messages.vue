<template>
  <div class="py-8">
    <div class="md:mx-auto md:flex">
      <div>
        <messages-navigation />
      </div>
      <div class="md:ml-5">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
  import MessagesNavigation from "../../components/managment/messages/navigation";
  export default {
    components: {MessagesNavigation},
    head: () => ({
      title: "Gestion des messages"
    })
  }
</script>
