<template>
  <div>
    <div>
      <h1>Accès à l'espace d'administration</h1>
      <span class="block mt-4 border-b-4 border-red-900"></span>

      <div class="my-4">
        <p class="text-red-500" v-if="errors.message">{{ errors.message }}</p>
      </div>

      <div class="my-4">
        <label class="font-semibold block my-2" for="email">Votre adresse email</label>
        <input
          type="email"
          id="email"
          class="border-gray-400 border-2 bg-gray-200 p-2 rounded-lg"
          @input="onEmailChange"
        />
        <p v-if="errors.email" class="text-red-700"><small>{{ errors.email }}</small></p>
      </div>

      <div class="my-4">
        <label class="font-semibold block my-2" for="password">Votre mot de passe</label>
        <input
          type="password"
          id="password"
          class="border-gray-400 border-2 bg-gray-200 p-2 rounded-lg"
          @input="onPasswordChange"
        />
        <p v-if="errors.password"class="text-red-700"><small>{{ errors.password }}</small></p>
      </div>

      <div class="my-4">
        <input
          type="submit"
          value="Se connecter"
          class="bg-red-800 text-white font-semibold rounded-lg border-gray-100 p-2 hover:cursor-pointer"
          @click.prevent="onSignIn"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'signin',
    layout: 'Auth',
    data: () => ({
      values: { email: '', password: '' },
      errors: { email: null, password: null, message: null },
      validations: { email: false, password: false }
    }),
    methods: {
      onSignIn: async () => {
        try {
          const valid = this.validations.email && this.validations.password;
          if(valid) {

          } else {
            this.errors.message = "Les informations ne sont pas correctement entrées"
          }
        } catch(ex) {

        }
      },
      onEmailChange: function({target:{value}}){
        if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value)) {
          this.errors.email = "Veuillez entrer une adresse email correcte";
          this.values.email = '';
          this.validations.email = false;
        } else {
          this.values.email = value;
          this.errors.email = null;
          this.validations.email = true;
        }
      },
      onPasswordChange: function({target:{value}}) {
        if(value.trim().length < 8) {
          this.errors.password = "Le mot de passe doit contenir au moins 8 caractères";
          this.values.password = '';
          this.validations.password = false;
        } else {
          this.values.password = value;
          this.errors.password = null;
          this.validations.password = true;
        }
      }
    }
  }
</script>
