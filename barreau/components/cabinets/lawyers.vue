<template>
  <div>
    <div class="m-3 rounded-lg shadow-lg border-b-2 border-red-700">
      <div>
        <img v-if="avatar" class="w-64 h-48 object-cover" :src="avatar" :alt="firstName" />
      </div>
      <div class="py-3 px-3">
        <p v-if="firstName && lastName" class="text-lg font-semibold mb-3">
          <nuxt-link :to="`/avocats/details/${id}`">{{ firstName }} {{ lastName }}</nuxt-link>
        </p>
        <p v-if="domain && domain.name" class="text-sm font-light">{{ domain.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cabinet-lawyers',
    props: ['id', 'avatar', 'firstName', 'lastName', 'domain']
  }
</script>
