<template>
  <div>
    <page-title title="Cabinet" />

    <div v-if="$apollo.loading">
      <loading />
    </div>
    <div v-else-if="me">
      <workplace-resume
        v-if="me && me.companies.current"
        :name="workplace.name"
        :cover="workplace.cover"
        :contact="workplace.contact"
        :lawyersCount="workplace.lawyers.length"
      />

      <h2 class="font-bold text-2xl mb-3">Mes collègues</h2>
      <workplace-lawyers :lawyers="workplace.lawyers" />
    </div>
  </div>
</template>

<script>
  import PageTitle from "../components/page-title";
  import WorkplaceResume from "../components/workplace/resume";
  import WorkplaceLawyers from "../components/workplace/lawyers";

  import gql from "graphql-tag";
  import Loading from "../components/loading";

  const WORKPLACE = gql`
    {
        me {
          companies {
            current {
              company {
                id, name,
                contact {
                  telephone, email, address, website
                }
                members(start: 0, limit: 5) {
                  current {
                    member {
                      id, avatar, firstName, lastName
                    }
                  }
                }
              }
            }
          }
        }
    }
  `;

  export default {
    components: {Loading, WorkplaceLawyers, WorkplaceResume, PageTitle},
    head: () => ({
      title: "Mon cabinet"
    }),
    apollo: {
      me: {
        query: WORKPLACE
      }
    },
    computed: {
      workplace() {
        const {company} = this.me.companies.current;
        let lawyers = [];
        if(company.members)
          if(company.members.current)
            lawyers = company.members.current;

        return {
          name: company.name,
          cover: company.cover,
          contact: company.contact,
          lawyers
        }
      },
    }
  }
</script>
