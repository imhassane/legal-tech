<template>
  <div>
    <div class="mb-1">
      <banner />
    </div>
    <div class="bg-red-800 pt-10 pb-10 md:pb-32">
      <home-search-form />
    </div>

    <div class="pt-12 pb-12">

    </div>

  </div>
</template>

<script>
import Banner from "../components/banner";
import HomeSearchForm from "../components/annuaire/home-search-form";

export default {
  components: {
    HomeSearchForm,
    Banner
  }
}
</script>
