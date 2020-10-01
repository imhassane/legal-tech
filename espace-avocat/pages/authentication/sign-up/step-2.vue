<template>
  <div class="px-8 pt-4">

    <h1 class="text-5xl font-bold pb-2 border-gray-300 border-b-4 mb-4">Mot de passe</h1>

    <p>Le mot de passe est personnel et ne doit pas être partagé</p>
    <p>Il permet l'accès à vos informations</p>

    <sign-up-step-2 />
  </div>
</template>

<script>
  import SignUpStep2 from "../../../components/forms/sign-up-step-2";

  export default {
    layout: "visitor",
    components: {SignUpStep2},
    head: () => ({
      title: "Etape 2: Mot de passe"
    })
  }
</script>
