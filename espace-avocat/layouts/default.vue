<template>
  <div>
    <page-header/>
    <div class="bg-gray-200" style="min-height: 100vh">
      <nuxt />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/header';

export default {
 components: { PageHeader }
}
</script>

