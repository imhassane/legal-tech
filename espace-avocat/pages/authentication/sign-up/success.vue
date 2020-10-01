<template>
  <div class="py-4 px-3">
    <h1 class="text-center text-4xl font-bold border-gray-300 border-b-4">Votre inscription est terminée !</h1>

    <p class="text-center my-4">Veuillez vous connecter pour accéder à votre espace personnel</p>

    <p class="text-center my-3">
      <input type="button" value="Accès à votre espace personnel"
             class="py-2 px-3 bg-red-700 font-semibold text-white rounded-full"
             @click="$router.push('/authentication/sign-in')"
      />
    </p>
  </div>
</template>

<script>
  export default {
    head: () => ({
      title: "Confirmation de votre inscription"
    }),
    layout: "visitor",
  }
</script>
