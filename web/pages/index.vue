<template>
  <div class="">
    <div class="w-full">
      <last-registered />
    </div>
    <div class="w-full">
      <last-videos />
    </div>
  </div>
</template>

<script>

import LastRegistered from "../components/lawyers/last-registered";
import LastVideos from "../components/videos/last-videos";
export default {
  components: {
    LastVideos,
    LastRegistered

  }
}
</script>
