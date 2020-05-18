<template>
  <footer class="border-t-2 bg-red-800 pt-20">
    <div class="md:w-5/6 m-auto md:flex md:justify-between pb-20">
      <div class="m-2">
        <h1 class="text-lg font-semibold text-white border-b-2 mb-2">Ordre des avocats du barreau de Conakry</h1>
        <p class="text-white">Siège: Dixinn</p>
        <p class="text-white">Téléphone: 622-876-904</p>
        <div class="mt-8">
          <nuxt-link class="p-3 bg-red-600 font-semibold text-white shadow-lg rounded" to="/contact">Contactez-nous</nuxt-link>
        </div>
      </div>
      <div class="md:flex-1 md:flex md:justify-end">
        <div class="m-2">
          <h2 class="font-semibold text-lg text-white border-b-2 mb-2">Particuliers</h2>
          <ul>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Rencontrer un avocat</nuxt-link>
            </li>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">L’aide juridictionnelle</nuxt-link>
            </li>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Commission d'office</nuxt-link>
            </li>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Conflits</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="m-2">
          <h2 class="font-semibold text-lg text-white border-b-2 mb-2">Entreprises</h2>
          <ul>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Un avocat pour vous</nuxt-link>
            </li>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Transactions</nuxt-link>
            </li>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Conflits</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="m-2">
          <h2 class="font-semibold text-lg text-white border-b-2 mb-2">Universités</h2>
          <ul>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Partenariats</nuxt-link>
            </li>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Rencontrer un avocat</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="m-2">
          <h2 class="font-semibold text-lg text-white border-b-2 mb-2">Avocats</h2>
          <ul>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Devenir avocat en Guinée</nuxt-link>
            </li>
            <li class="ml-1">
              <nuxt-link class="text-white font-semibold text-sm" to="">Offres d'emploi</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <p class="text-center text-white text-sm p-1">
      Cette plateforme a été créée par
      <a href="https://imhassane.github.io" target="_blank" class="font-semibold">Hassane SOW</a>
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'page-footer'
  }
</script>
