<template>
  <div class="py-8">
    <div class="md:mx-5 flex">
      <div class="hidden md:block">
        <members-navigation />
      </div>
      <div class="flex-1 md:ml-5">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
  import MembersNavigation from "../../components/managment/members/navigation";
  export default {
    components: {MembersNavigation},
    head: () => ({
      title: "Gestion des membres"
    })
  }
</script>
