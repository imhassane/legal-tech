<template>
  <div>
    <div class="mb-1">
      <banner />
    </div>
    <div class=" pt-10 pb-10 md:pb-32 border-b-2">
      <home-search-form />
    </div>

    <div>
      <last-registered />
    </div>

    <div class="pt-5 pb-12">
      <div class="mb-0 border-b-2">
        <section-particuliers />
      </div>
      <div class="pt-10 mb-0 border-b-2">
        <section-company />
      </div>
      <div class="mb-5 border-b-2">
        <section-universities />
      </div>

      <div class="md:w-5/6 mt-12 m-auto">
        <h1 class="text-4xl mt-5 mb-5 font-bold border-b-4">Plus d'informations</h1>
        <div class="md:flex md:justify-around">
          <div class="rounded-lg shadow-lg p-5 m-3">
            <p class="text-xl font-bold">Visitez notre blog</p>
            <p class="mt-5 mb-5 text-sm">Nos avocats publient régulièrement des articles concernant le métier, les démarches et pleins d'autres informations qui vous seront utiles</p>
            <p class="mt-5 mb-5">
              <a class="rounded-lg shadow-lg p-3 pr-6 pl-6 bg-red-700 text-white font-bold" target="_blank" href="https://blog-legal-tech.netlify.app">Visiter</a>
            </p>
          </div>
          <div class="rounded-lg shadow-lg p-5 m-2">
            <p class="text-xl font-bold">Notre vidéothèque</p>
            <p class="mt-5 mb-5 text-sm">Nos avocats publient régulièrement des articles concernant le métier, les démarches et pleins d'autres informations qui vous seront utiles</p>
            <p class="mt-5 mb-5">
              <a class="rounded-lg shadow-lg p-3 pr-6 pl-6 bg-red-700 text-white font-bold" target="_blank" href="https://web-legal-tech.netlify.app">Visiter</a>
            </p>
          </div>
          <div class="rounded-lg shadow-lg p-5 m-2">
            <p class="text-xl font-bold">Les actualités</p>
            <p class="mt-5 mb-5 text-sm">Nos avocats publient régulièrement des articles concernant le métier, les démarches et pleins d'autres informations qui vous seront utiles</p>
            <p class="mt-5 mb-5">
              <a class="rounded-lg shadow-lg p-3 pr-6 pl-6 bg-red-700 text-white font-bold" target="_blank" href="https://web-legal-tech.netlify.app">Visiter</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Banner from "../components/banner";
import HomeSearchForm from "../components/annuaire/home-search-form";
import LastRegistered from "../components/lawyers/last-registered";
import SectionParticuliers from "../components/main/particuliers";
import SectionCompany from "../components/main/companies";
import SectionUniversities from "../components/main/universities";

export default {
  components: {
    SectionUniversities,
    SectionCompany,
    SectionParticuliers,
    LastRegistered,
    HomeSearchForm,
    Banner
  }
}
</script>
