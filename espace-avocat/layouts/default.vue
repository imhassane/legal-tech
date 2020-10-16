<template>
  <div>
    <header>
      <main-nav />
    </header>
    <main>
      <div class="md:flex">
        <div class="md:w-2/12">
          <side-nav />
        </div>
        <div class="md:w-10/12 bg-gray-200">
          <nuxt />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Box from "~/components/personal/box";
  import MainNav from "../components/nav/main-nav";
  import SideNav from "../components/nav/side-nav";
  export default {
    components: {SideNav, MainNav, Box}
  }
</script>

<style>

</style>
