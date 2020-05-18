<template>
  <div class="w-full border-b-2 shadow">
    <navbar-top />
    <navbar-main />
  </div>
</template>
<script>
  import NavbarTop from "./top";
  import NavbarMain from "./main";
  export default {
    components: {NavbarMain, NavbarTop}
  }
</script>
