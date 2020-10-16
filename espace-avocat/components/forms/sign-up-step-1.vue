<template>
  <div class="py-6 px-4">
    <div class="my-4 py-2 border-red-700 border rounded-full text-red-700 font-semibold text-center" v-if="errors.message">
      <p>{{ errors.message }}</p>
    </div>
    <div class="flex">
      <div class="flex-auto mr-3">
        <label for="last-name" class="font-bold text-2xl block">
          Nom
          <span v-if="errors.lastName" class="text-xl text-red-700 font-semibold mx-2">*</span>
        </label>
        <input type="text" id="last-name" @input="handleLastName" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
      </div>
      <div class="flex-auto">
        <label for="first-name" class="font-bold text-2xl block">
          Prénom
          <span v-if="errors.firstName" class="text-xl text-red-700 font-semibold mx-2">*</span>
        </label>
        <input type="text" id="first-name" @input="handleFirstName" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />

      </div>
    </div>

    <div class="my-5">
      <label for="email" class="font-bold text-2xl block">
        Adresse email
        <span v-if="errors.email" class="text-xl text-red-700 font-semibold mx-2">*</span>
      </label>
      <input type="email" id="email" @input="handleEmail" class="py-3 px-4 rounded-full border-gray-300 border-2 w-full" />
    </div>

    <div class="my-5 text-right">
      <input type="button"
             value="Etape suivante" class="px-4 py-2 rounded-full font-semibold bg-red-700 text-white"
             @click="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "sign-up-step-1",
    data: () => ({
      data: { firstName: null, lastName: null, email: null },
      errors: { firstName: true, lastName: true, email: true, message: null }
    }),
    methods: {
      handleFirstName: function({target: {value}}) {
        if (value && value.trim().length > 0) {
          this.data.firstName = value.trim();
          this.errors.firstName = false;
        } else {
          this.data.firstName = null;
          this.errors.firstName = true;
        }
      },
      handleLastName: function({target: {value}}) {
        if (value && value.trim().length > 0) {
          this.data.lastName = value.trim();
          this.errors.lastName = false;
        } else {
          this.data.lastName = true;
          this.errors.lastName = "Le nom ne doit pas être vide";
        }
      },
      handleEmail: function({target: {value}}) {
        if (value && value.trim().length > 0) {
          this.data.email = value.trim();
          this.errors.email = false;
        } else {
          this.data.email = true;
          this.errors.email = "L'adresse email ne doit pas être vide";
        }
      },
      handleSubmit: function() {
        const { firstName, lastName, email } = this.data;
        const { errors } = this;

        if(errors.firstName || errors.lastName || errors.email) {
          this.errors.message = "Veuillez remplir tous les champs";
        } else {
          sessionStorage.setItem("x-auth-step-1", JSON.stringify({ firstName, lastName, email }));
          this.$router.push("/authentication/sign-up/step-2/");
        }
      }
    }
  }
</script>
