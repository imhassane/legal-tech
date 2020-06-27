<template>
  <div class="md:px-12">
    <div class="md:flex md:flex-wrap md:justify-between">
      <div class="flex items-center">
        <img class="object-cover w-12 h-12 rounded-full" :src="member.avatar" :alt="member.firstName" />
        <div class="ml-4 font-semibold inline">
          <span>{{ member.firstName }}</span>
          <span>{{ member.lastName }}</span>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar-top',
    computed: {
      member: () => ({
        avatar: "https://images.unsplash.com/photo-1556611932-a07fb5fdd8ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        firstName: "Bintou",
        lastName: "Baldé",
        type: "ADMIN"
      })
    }
  }
</script>
