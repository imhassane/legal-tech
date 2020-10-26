<template>
    <div v-if="$apollo.loading">Chargement en cours...</div>
    <div style="min-height: 80vh;" v-else>

      <div class="text-center">
        <img
          v-if="me.avatar"
          :src="me.avatar"
          class="w-32 h-32 object-cover mb-5 mt-5 mx-auto rounded-full" alt=""
        />

        <div class="md:w-1/2 m-auto">
          <div class="text-center font-hairline md:font-light md:flex">
            <div class="flex">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span v-if="me.firstName && me.lastName">{{ me.lastName.toUpperCase() }} {{ me.firstName }}</span>
            </div>
            <div class="flex md:mx-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
              <span class="ml-1" v-if="me.credentials.email">{{ me.credentials.email }}</span>
            </div>
            <div class="flex">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span class="ml-1" v-if="me.companies.current.company.name">{{ me.companies.current.company.name }}</span>
            </div>
          </div>
          <span class="hidden"></span>
          <span class="text-blue-800 text-sm underline ml-2">Modifier</span>
        </div>

        <div class="md:w-1/2 m-auto" v-if="me.description">
          <p class=" py-2 font-hairline md:font-light italic">{{ me.description }}</p>

          <span class="text-blue-800 text-sm underline ml-2">Modifier</span>
        </div>

        <div class="my-3 flex-wrap flex">

          <div class="flex border-2 border-gray-300 rounded p-2 w-1/2 md:w-48">
            <svg class="w-10 h-10 bg-red-400 rounded-full p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            <div class="w-2/3">
              <p class="font-light">Articles écrits</p>
              <p class="font-semibold">5</p>
            </div>
          </div>

          <div class="md:ml-3 flex border-2 border-gray-300 rounded p-2 w-1/2 md:w-48">
            <svg class="w-10 h-10 bg-green-400 rounded-full p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <div class="w-2/3">
              <p class="font-light">Livres ajoutés</p>
              <p class="font-semibold">0</p>
            </div>
          </div>

          <div class="md:ml-3 flex border-2 border-gray-300 rounded p-2 w-1/2 md:w-48">
            <svg class="w-10 h-10 bg-yellow-400 rounded-full p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            <div class="w-2/3">
              <p class="font-light">Meetings</p>
              <p class="font-semibold">12</p>
            </div>
          </div>

          <div class="md:ml-3 flex border-2 border-gray-300 rounded p-2 w-1/2 md:w-48">
            <svg class="w-10 h-10 bg-indigo-400 rounded-full p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div class="w-2/3">
              <p class="font-light">Connexions</p>
              <p class="font-semibold">9</p>
            </div>
          </div>

        </div>

      </div>

  </div>
</template>

<script>
  import gql from "graphql-tag";

  const PROFILE = gql`
    {
        me {
          id, firstName, lastName, avatar, description,
          credentials { email, status }
          contact {
            email, telephone
          }
          companies {
            current {
              company { id, name }
            }
          }
        }
    }
  `;

  export default {
    head: () => ({
      title: "Mes informations personnelles"
    }),
    apollo: {
      me: {
        query: PROFILE,
        update: data => data.me,
        error: (err) => {
          console.log(err);
        }
      }
    }
  }
</script>
