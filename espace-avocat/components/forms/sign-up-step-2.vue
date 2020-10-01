<template>
  <div class="py-6 px-4">
    <div class="flex">
      <div class="flex-auto mr-3">
        <label for="password" class="py-3 font-bold text-2xl mb-3">Entrez votre mot de passe</label>
        <input type="password" id="password" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
      </div>
      <div class="flex-auto">
        <label for="repeat-password" class="py-3 font-bold text-2xl mb-3">Repetez le mot de passe</label>
        <input type="password" id="repeat-password" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
      </div>
    </div>

    <div class="my-5 text-right">
      <input type="button"
             value="Etape précédente" class="px-4 py-2 rounded-full font-semibold bg-red-700 text-white"
             @click="lastStep"
      />
      <input type="button"
             value="Etape suivante" class="px-4 py-2 rounded-full font-semibold bg-red-700 text-white"
             @click="nextStep"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "sign-up-step-2",
    methods: {
      nextStep: function() {
        this.$router.push("/authentication/sign-up/step-3/");
      },
      lastStep: function() {
        this.$router.push("/authentication/sign-up/step-1/");
      }
    }
  }
</script>
