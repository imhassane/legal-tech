<template>
  <div class="md:w-5/6 m-auto">
    <div class="md:flex md:justify-around">
      <div class="p-5">
        <h1 class="text-4xl mt-5 mb-5 font-bold border-b-4">Universités & étudiants</h1>
        <p class="mt-5 mb-5 text-lg font-semibold">
          Vous êtes intéressé par un partenariat avec nous avocats pour mieux connaître le monde professionnel
        </p>
        <p class="mb-5 text-lg font-semibold">
          Nous vous proposons:
        </p>
        <ul>
          <li class="mb-3 border-l-8 pl-3">
            <nuxt-link class="font-semibold" to="particuliers/aide-juridictionnelle">Des articles écrits par nos avocats</nuxt-link>
          </li>
          <li class="mb-3 border-l-8 pl-3">
            <nuxt-link class="font-semibold" to="particuliers/aide-juridictionnelle">Une vidéothèque pour discuter du métier</nuxt-link>
          </li>
          <li class="mb-3 border-l-8 pl-3">
            <nuxt-link class="font-semibold" to="particuliers/conflits">La possibilité de prendre rendez-vous avec eux</nuxt-link>
          </li>
          <li class="mb-3 border-l-8 pl-3">
            <nuxt-link class="font-semibold" to="particuliers/conflits">La possibilité de signer un partenariat avec nos avocats</nuxt-link>
          </li>
        </ul>
      </div>
      <p class="flex-1">
        <student-vector />
      </p>
    </div>
  </div>
</template>

<script>
  import StudentVector from "../svg/students";
  export default {
    name: 'section-universities',
    components: {StudentVector}
  }
</script>
