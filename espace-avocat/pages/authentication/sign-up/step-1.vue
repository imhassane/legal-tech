<template>
  <div class="px-8 pt-4">
    <h1 class="text-5xl font-bold pb-2 border-gray-300 border-b-4 mb-4">Inscription !</h1>

    <p class="mb-2">Cette plateforme est uniquement dédiée aux avocats</p>
    <p>Pour avoir accès à votre compte, une validation sera d'abord nécessaire de la part du barreau</p>

    <sign-up-step-1 />
  </div>
</template>

<script>
  import SignUpStep1 from "../../../components/forms/sign-up-step-1";
  export default {
    components: {SignUpStep1},
    layout: "visitor",
    head: () => ({
      title: "S'inscrire"
    })
  }
</script>
