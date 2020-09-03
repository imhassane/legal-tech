<template>
  <form>
    <div class="md:flex">
      <div class="w-full md:w-1/2">
        <p><label for="first-name">Nom</label></p>
        <input type="text" id="first-name" />
      </div>
      <div class="w-full md:w-1/2">
        <p><label for="last-name">Prénom</label></p>
        <input type="text" id="last-name" />
      </div>
    </div>

    <div>
      <p><label for="email">Adresse email</label></p>
      <input type="email" id="email" />
    </div>

    <div class="md:flex">
      <div class="w-full md:w-1/2">
        <p><label for="password">Mot de passe</label></p>
        <input type="password" id="password" />
      </div>
      <div class="w-full md:w-1/2">
        <p><label for="repeat-password">Repetez le mot de passe</label></p>
        <input type="password" id="repeat-password" />
      </div>
    </div>

    <div>
      <p><label for="prefecture">Préfecture</label></p>
      <select id="prefecture">
        <option v-for="p in prefectures" :key="p.id" :value="p.name.toLowerCase()">{{ p.name }}</option>
      </select>
    </div>

    <div>
      <p><label for="about">A propos de vous</label></p>
      <textarea id="about" cols="30" rows="5"></textarea>
    </div>

    <div>
      <p><label for="avatar">Image de profil</label></p>
      <input type="file" accept="image/*" />
    </div>

    <div>
      <input type="submit" value="M'inscrire" />
    </div>
  </form>
</template>

<script>
  export default {
    name: "register-form",
    computed: {
      prefectures: () => ([
        { id: 1, name: "Conakry" },
        { id: 2, name: "Boffa" },
        { id: 3, name: "Boké" },
        { id: 4, name: "Fria" },
        { id: 5, name: "Gaoual" },
        { id: 6, name: "Koundara" },
        { id: 7, name: "Dabola" },
        { id: 8, name: "Dinguiraye" },
        { id: 9, name: "Faranah" },
        { id: 10, name: "Kissidougou" },
        { id: 11, name: "Kankan" },
        { id: 12, name: "Kérouané" },
        { id: 13, name: "Kouroussa" },
        { id: 14, name: "Mandiana" },
        { id: 15, name: "Siguiri" },
        { id: 16, name: "Coyah" },
        { id: 17, name: "Dubréka" },
        { id: 18, name: "Kindia" },
        { id: 19, name: "Télimélé" },
        { id: 20, name: "Koubia" },
        { id: 21, name: "Labé" },
        { id: 22, name: "Lélouma" },
        { id: 23, name: "Mali" },
        { id: 24, name: "Tougué" },
        { id: 25, name: "Dalaba" },
        { id: 26, name: "Mamou" },
        { id: 27, name: "Pita" },
        { id: 28, name: "Beyla" },
        { id: 29, name: "Guéckedou" },
        { id: 30, name: "Lola" },
        { id: 31, name: "Macenta" },
        { id: 32, name: "N'Zérékoré" },
        { id: 33, name: "Yomou" },
      ])
    }
  }
</script>
