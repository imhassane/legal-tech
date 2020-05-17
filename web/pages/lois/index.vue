<template>
  <div>
    <div class="w-full bg-pink-600 p-5">
      <p class="text-white font-semibold">Ces lois proviennent directement du ministère de la justice et sont donc authentiques</p>
    </div>
    <breadcrumb :links="routeLinks" />
    <div class="m-auto md:w-3/5">
      <laws-codes />
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "../../components/breadcrumb";
  import LawsCodes from "../../components/laws/laws-codes";
  export default {
    name: 'loi',
    components: {LawsCodes, Breadcrumb},
    head: () => ({
      title: "Lois | République de Guinée"
    }),
    computed:  {
      routeLinks: () => ([
        { to: "/lois", name: "lois" }
      ])
    }
  }
</script>
