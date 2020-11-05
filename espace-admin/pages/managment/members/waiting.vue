<template>
  <div v-if="$apollo.loading"></div>
  <div v-else>
    <page-title title="Membres en attente" />
    <p class="my-3 py-3 px-4 border-l-4 border-gray-800 bg-gray-300">
      Vous pourrez à tout moment changer le statut d'un membre
    </p>

    <div class="my-8">
      <input
        type="text" placeholder="Cherchez un membre"
        v-model="search" class="w-full p-1 border-b-2 border-gray-200 font-light"
      />
    </div>

    <div class="my-12" v-if="members">
      <errors-box type="info" message="Aucun utilisateur en attente de validation" v-if="members.length === 0" />
      <waiting-member v-for="m in members" :key="m.id" :member="m" v-else
                      v-if="(m.firstName + ' ' + m.lastName).toLowerCase().includes(search.toLowerCase())" />
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import PageTitle from "../../../components/page-title";
  import WaitingMember from "../../../components/managment/members/waiting-member";
  import ErrorsBox from "../../../components/errors";

  const MEMBERS_QUERY = gql`
    query ($start: Int!, $limit: Int!){
        members(type: ALL, status: PENDING, start: $start, limit: $limit) {
            id, firstName, lastName, avatar, type,
            hasDomains, hasEducation, hasCompany
        }
    }
   `;

  export default {
    components: {ErrorsBox, WaitingMember, PageTitle},
    head: () => ({
      title: "Membres en attente"
    }),
    data: () => ({ start: 0, limit: 20, search: "" }),
    apollo: {
      members: {
        query: MEMBERS_QUERY,
        variables: function() {
          return { start: this.start, limit: this.limit }
        }
      }
    }
  }
</script>
