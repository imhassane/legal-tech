<template>
  <div>

    <div class="md:flex">

      <div class="md:flex-1 md:pr-2">
        <p class="font-bold text-xl mb-3 pb-3 border-gray-300 border-b-4"><label for="etyDate">Date de debut</label></p>
        <input type="date" id="etyDate" v-model="entryDate" class="w-full border rounded p-2" />
      </div>

      <div class="md:flex-1">
        <p class="font-bold text-xl mb-3 pb-3 border-gray-300 border-b-4"><label for="company">Cabinet</label></p>
        <select id="company" v-model="company" class="w-full border rounded p-2">
          <option value="0">Sélectionnez votre cabinet</option>
          <option v-for="c in companies" :key="c.id" :value="c.id">{{ c.name }}</option>
        </select>
      </div>

    </div>

    <div class="my-4">
      <p>
        <input type="checkbox" id="accept" @change="confirmed = !confirmed" />
        <label for="accept">Je confirme que les informations entrées ci-dessus sont correctes</label>
      </p>
    </div>

    <div class="my-4" v-if="confirmed">
      <button class="bg-red-700 text-white font-semibold rounded w-24 px-4 py-2" @click="handleSubmit">Valider</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "starting-work-form",
    data: () => ({
      confirmed: false,
      company: 0,
      entryDate: new Date()
    }),
    props: ["onSubmit", "companies"],
    methods: {
      handleSubmit: () => {
        this.onSubmit({ company: this.company, entryDate: this.entryDate });
      }
    }
  }
</script>
