<template>
  <div>
    <h1>Inscription</h1>
    <hr />

    <div class="py-8 my-5">
      <register-form />
    </div>

  </div>
</template>

<script>
  import RegisterForm from "../../components/session/forms/register";
  export default {
    components: {RegisterForm},
    head: () => ({ title: "Inscription" }),
    layout: 'auth'
  }
</script>
