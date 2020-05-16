<template>
  <div>
    <navigation-top />
    <navigation-main />
    <navigation-bottom />
  </div>
</template>

<script>
  import NavigationTop from "./top";
  import NavigationMain from "./main";
  import NavigationBottom from "./bottom";

  export default {
    name: 'navbar',
    components: { NavigationTop, NavigationMain, NavigationBottom }
  }
</script>
