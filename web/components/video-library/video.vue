<template>
  <div>
    <iframe class="m-auto w-full md:w-1/2 md:h-64 object-cover"
            :src="url"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
    ></iframe>
  </div>
</template>

<script>
  export default {
    name: 'video-library-video',
    props: ['url']
  }
</script>
