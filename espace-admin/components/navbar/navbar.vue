<template>
  <div class="bg-black text-white pt-4 pb-1">
    <div class="px-10">
      <navbar-top />
      <navbar-bottom />
    </div>
  </div>
</template>
<script>
  import NavbarTop from "./top";
  import NavbarBottom from "./bottom";
  export default {
    name: "navbar",
    components: {NavbarBottom, NavbarTop}
  }
</script>
