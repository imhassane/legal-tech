<template>
  <div>
    <img class="object-cover h-64 w-full" :src="covers[0].url" alt="couverture" />
  </div>
</template>

<script>
  export default {
    name: 'banner',
    data: () => ({
      covers: [
        {id: 1, url: "/moj.jpg"},
        {id: 2, url: "/nimba.jpeg"}
      ]
    })
  }
</script>
