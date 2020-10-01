<template>
  <div>

    <div>

    </div>

    <div class="md:flex">
      <div class="md:flex-1 md:mr-3">
        <label for="description" class="py-3 font-bold text-2xl mb-3 block">Décrivez-vous en {{ maxLength }} caractères</label>
        <textarea id="description" rows="5" class="bg-gray-200 font-semibold py-2 px-3 rounded w-full" @input="handleDescription"></textarea>
        <p class="font-light text-sm text-bg-gray-300">{{ description.trim().length }} / {{ maxLength }}</p>
      </div>

      <div class="md:flex-1">
        <p class="py-3 font-bold text-2xl mb-3 block">Ajoutez votre photo</p>
        <div class="w-full h-full bg-gray-200 rounded" style="height: 9.5rem;">
          <label for="photo" class="h-full w-full">
            <img src="/cloud-computing.svg" alt="upload" class="object-contain h-12 m-auto" />
          </label>
          <input type="file" id="photo" accept="image/*" style="display: none" />
        </div>
      </div>
    </div>

    <div class="my-5 text-right">
      <input type="button"
             value="Terminer l'inscription" class="px-4 py-2 rounded-full font-semibold bg-red-700 text-white"
             @click="register"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "sign-up-step-3",
    data: () => ({
      description: "",
      maxLength: 200
    }),
    methods: {
      register: function() {
        this.$router.push("/authentication/sign-up/success/");
      }
    }
  }
</script>
