<template>
  <div v-if="$apollo.loading"><loading /></div>
  <div class="md:px-12" v-else>
    <div v-if="errors.message">{{ errors.message }}</div>
    <div class="md:flex md:flex-wrap md:justify-between" v-else>
      <div class="flex items-center">
        <img class="object-cover w-12 h-12 rounded-full" :src="me.avatar" :alt="me.firstName" />
        <div class="ml-4 font-semibold inline">
          <span>{{ me.firstName }}</span>
          <span>{{ me.lastName }}</span>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import Loading from "../loading";

  const QUERY = gql`
    {
        me {
            firstName, lastName,
            avatar
        }
    }
  `;

  export default {
    name: 'navbar-top',
    components: {Loading},
    data: () => ({ errors: { message: null }}),
    apollo: {
      me: {
        query: QUERY,
        error(err) {
          this.errors.message = err.graphQLErrors[0].message;
        }
      }
    },
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
