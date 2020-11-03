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

  const diffHours = (dt2, dt1) => {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
  };

  export default {
    components: {SideNavMobile, SideNav, MainNav, Box},
    beforeMount() {
      if(process.browser) {
        if(localStorage.getItem(process.env.LOCALSTORAGE_AUTH_TOKEN)) {
          const loginDate = new Date(localStorage.getItem(process.env.LOCALSTORAGE_AUTH_LOGIN_DATE));
          const expiresIn = parseInt(localStorage.getItem(process.env.LOCALSTORAGE_AUTH_EXPIRESIN));

          if(diffHours(new Date(), loginDate) >= expiresIn) {
            localStorage.removeItem(process.env.LOCALSTORAGE_AUTH_LOGIN_DATE);
            localStorage.removeItem(process.env.LOCALSTORAGE_AUTH_EXPIRESIN);
            localStorage.removeItem(process.env.LOCALSTORAGE_AUTH_TOKEN);
            localStorage.removeItem(process.env.LOCALSTORAGE_AUTH_PERMISSIONS);

            this.$router.push("/");
          }
        } else {
          this.$router.push("/");
        }
      }
    }
  }
</script>

<style>

</style>
