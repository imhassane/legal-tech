<template>
  <div class="px-8 pt-4">
    <h1 class="text-5xl font-bold pb-2 border-gray-300 border-b-4 mb-4">Terminer l'inscription</h1>

    <sign-up-step-3 />
  </div>
</template>

<script>
  import SignUpStep3 from "../../../components/forms/sign-up-step-3";
  export default {
    components: {SignUpStep3},
    layout: "visitor",
    head: () => ({
      title: "Décrivez vous..."
    })
  }
</script>
