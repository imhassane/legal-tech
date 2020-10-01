<template>
  <div>
    <header>
      <main-nav />

      <!-- Affichage du menu sous forme de box -->
      <div class="flex flex-wrap bg-black text-white font-semibold py-3">
        <box height="h-12" width="" url="/personal/me/" title="Mes informations" margins="m-1" />
        <box height="h-12" width="" url="/personal/professional-card/" title="Carte professionnelle" margins="m-1" />
        <box height="h-12" width="" url="/personal/contributions/" title="Côtisations" margins="m-1" />
        <box height="h-12" width="" url="/personal/help/" title="Aide juridictionnelle" margins="m-1" />
        <box height="h-12" width="" url="/personal/certificates/" title="Attestations" margins="m-1" />
        <box height="h-12" width="" url="/personal/messages/" title="Messages" margins="m-1" />
      </div>

    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
  import Box from "~/components/personal/box";
  import MainNav from "../components/nav/main-nav";
  export default {
    components: {MainNav, Box}
  }
</script>
