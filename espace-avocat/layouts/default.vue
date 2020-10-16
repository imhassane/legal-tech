<template>
  <div>
    <header>
      <main-nav />
    </header>
    <main style="min-height: 80vh">
      <div class="md:flex h-full">
        <div class="md:w-2/12">
          <div class="hidden md:block"><side-nav /></div>
          <div class="md:hidden"><side-nav-mobile /></div>
        </div>
        <div class="md:w-10/12 px-1">
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
  import SideNavMobile from "../components/nav/side-nav-mobile";
  export default {
    components: {SideNavMobile, SideNav, MainNav, Box}
  }
</script>

<style>

</style>
