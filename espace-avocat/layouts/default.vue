<template>
  <div>
    <header>
      <main-nav />
    </header>
    <main style="min-height: 80vh">
      <div class="md:flex h-full">
        <div class="md:w-2/12">
          <side-nav />
        </div>
        <div class="md:w-10/12">
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
