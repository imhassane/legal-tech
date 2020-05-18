<template>
  <div class="md:w-5/6 m-auto">
    <div class="md:flex md:justify-around">
    <p class="flex-1">
      <company-vector />
    </p>
    <div class="md:flex md:justify-around text-right">
      <div class="p-5 pt-0">
        <h1 class="text-4xl mt-5 mb-5 font-bold border-b-4">Entreprises</h1>
        <p class="mt-5 mb-5 text-lg font-semibold">
          Notre annuaire vous propose une liste des avocats inscrits dans le barreau de Conakry
        </p>
        <p class="mb-5 text-lg font-semibold">
          Ils sont à votre écoute et prêts à vous assister notamment pour:
        </p>
        <ul>
          <li class="mb-3 border-r-8 pr-3">
            <nuxt-link class="font-semibold" to="particuliers/aide-juridictionnelle">Une aide juridictionnelle</nuxt-link>
          </li>
          <li class="mb-3 border-r-8 pr-3">
            <nuxt-link class="font-semibold" to="particuliers/aide-juridictionnelle">Vous représenter</nuxt-link>
          </li>
          <li class="mb-3 border-r-8 pr-3">
            <nuxt-link class="font-semibold" to="particuliers/conflits">Une résolution de conflits sans recours au jug</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import CompanyVector from "../svg/companies";
  export default {
    name: 'section-company',
    components: {CompanyVector}
  }
</script>
