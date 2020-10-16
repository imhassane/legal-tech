<template>
  <div class="py-6 px-4">
    <div class="my-4 py-2 border-red-700 border rounded-full text-red-700 font-semibold text-center" v-if="errors.message">
      <p>{{ errors.message }}</p>
    </div>
    <div class="flex">
      <div class="flex-auto mr-3">
        <label for="password" class="py-3 font-bold text-2xl mb-3">
          Entrez votre mot de passe
          <span v-if="errors.password" class="text-xl text-red-700 font-semibold mx-2">*</span>
        </label>
        <input type="password" id="password" @input="handlePassword" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
      </div>
      <div class="flex-auto">
        <label for="repeat-password" class="py-3 font-bold text-2xl mb-3">
          Repetez le mot de passe
          <span v-if="errors.repeat" class="text-sm text-red-700 font-semibold mx-2">les mots de passe doivent être identiques</span>
        </label>
        <input type="password" id="repeat-password" @input="handleRepeatPassword" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
      </div>
    </div>

    <div class="my-5 text-right">
      <input type="button"
             value="Etape précédente" class="px-4 py-2 rounded-full font-semibold bg-red-700 text-white"
             @click="lastStep"
      />
      <input type="button"
             value="Etape suivante" class="px-4 py-2 rounded-full font-semibold bg-red-700 text-white"
             @click="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "sign-up-step-2",
    data: () => ({
      data: { password: null },
      errors: { password: true, repeat: true, message: null },
    }),
    methods: {
      lastStep: function() {
        sessionStorage.removeItem("x-auth-step-2");
        this.$router.push("/authentication/sign-up/step-1/");
      },
      handlePassword: function({target: {value}}) {
        if(value && value.trim().length >= 8) {
          this.data.password = value.trim();
          this.errors.password = false;
        } else {
          this.data.password = null;
          this.errors.password = true;
        }
      },
      handleRepeatPassword: function({target: {value}}) {
        if(value === this.data.password) {
          this.errors.repeat = false;
        } else {
          console.log(value, this.data.password)
          this.errors.repeat = true;
        }
      },
      handleSubmit: function() {
        const { password } = this.data;
        const { errors } = this;

        if(errors.password || errors.repeat) {
          this.errors.message = "Les mots de passe ne sont pas corrects";
        } else {
          sessionStorage.setItem("x-auth-step-2", JSON.stringify({password}));
          this.$router.push("/authentication/sign-up/step-3/");
        }
      }
    }
  }
</script>
