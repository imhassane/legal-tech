<template>
  <div class="w-full shadow">
    <navbar-top />
    <navbar-main />
    <navbar-bottom />
  </div>
</template>
<script>
  import NavbarTop from "./top";
  import NavbarMain from "./main";
  import NavbarBottom from "./bottom";
  export default {
    components: {NavbarBottom, NavbarMain, NavbarTop}
  }
</script>
