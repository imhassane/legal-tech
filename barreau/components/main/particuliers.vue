<template>
  <div class="md:w-5/6 m-auto">
    <div class="md:flex md:justify-around">
      <div class="p-5">
        <h1 class="text-4xl mt-5 mb-5 font-bold border-b-4">Particuliers</h1>
        <p class="mt-5 mb-5 text-lg font-semibold">
          Notre annuaire vous propose une liste des avocats inscrits dans le barreau de Conakry
        </p>
        <p class="mb-5 text-lg font-semibold">
          Ils sont à votre écoute et prêts à vous assister notamment pour:
        </p>
        <ul>
          <li class="mb-3 border-l-8 pl-3">
            <nuxt-link class="font-semibold" to="particuliers/aide-juridictionnelle">Une aide juridictionnelle</nuxt-link>
          </li>
          <li class="mb-3 border-l-8 pl-3">
            <nuxt-link class="font-semibold" to="particuliers/aide-juridictionnelle">Vous représenter</nuxt-link>
          </li>
          <li class="mb-3 border-l-8 pl-3">
            <nuxt-link class="font-semibold" to="particuliers/conflits">Une résolution de conflits sans recours au jug</nuxt-link>
          </li>
        </ul>
      </div>
      <p class="flex-1">
        <technology-vector />
      </p>
    </div>
  </div>
</template>

<script>
  import TechnologyVector from "../svg/technology";
  export default {
    name: 'section-particuliers',
    components: {TechnologyVector}
  }
</script>
