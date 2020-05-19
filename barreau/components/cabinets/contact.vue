<template>
  <div class="border-t-2 border-red-800 m-2 rounded-lg py-5 px-12 shadow-lg">
    <h1 class=" mb-2 text-lg font-semibold">Contact du cabinet</h1>
    <div>
      <p v-if="contact.telephone" class="flex">
        <icon-call />
        <span class="mx-1">{{ contact.telephone }}</span>
      </p>
      <p v-if="contact.email" class="flex">
        <icon-mail />
        <span class="mx-1">{{ contact.email }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import IconCall from "../svg/icon-call";
  import IconMail from "../svg/icon-mail";
  export default {
    name: 'cabinet-contact',
    components: {IconMail, IconCall},
    props: ['contact']
  }
</script>
