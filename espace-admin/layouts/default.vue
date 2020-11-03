<template>
  <div>
    <header>
      <navbar />
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
  import Navbar from "../components/navbar/navbar";

  const diffHours = (dt2, dt1) => {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
  };

  export default {
    components: {Navbar},
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

            this.$router.push("/auth/signin");
          }
        } else {
          this.$router.push("/auth/signin");
        }
      }
    }
  }
</script>
