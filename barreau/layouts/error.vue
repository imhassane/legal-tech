<template>
  <div class="mt-10 mb-10 md:w-1/2 m-auto">

    <div class="text-center" v-if="error.statusCode === 404">
      <p class="font-light">Vous vous êtes perdu en chemin, cette page n'existe pas!</p>
      <not-found-vector />
    </div>

    <div v-else>
      <h1>Oups!</h1>
    </div>
  </div>
</template>

<script>
  import NotFoundVector from "../components/svg/not-found";
  export default {
    components: {NotFoundVector},
    props: ['error'],
  }
</script>
