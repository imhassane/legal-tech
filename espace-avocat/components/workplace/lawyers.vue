<template>
  <div class="flex flex-wrap">
    <div
      class="p-1"
      v-for="l in lawyers" :key="l.id"
    >
      <div>
        <div>
          <img :src="l.member.avatar" class="w-40 h-32 object-cover" :alt="l.member.firstName">
        </div>
        <div>
          <p class="font-bold">{{ l.member.lastName }} {{ l.member.firstName }}</p>
          <div class="font-light text-sm">
            <p class="mb-1" v-if="l.member.domains && l.member.domains.length">{{ l.member.domains[0].name }}</p>
            <div class="text-red-700">
              <svg class="inline w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              <button class="ml-1">Discuter</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "workplace-lawyers",
    props: ["lawyers"]
  }
</script>
