<template>
  <div>
    <div class="border-gray-300 border-b-2">
      <img src="/cancel.svg" alt="" class="object-cover h-12 p-3" @click="goBack" />
    </div>

    <client-only>
      <new-article-form />
    </client-only>
  </div>
</template>

<script>
  import NewArticleForm from "../../components/posts/new-article";
  export default {
    name: "new-post",
    components: {NewArticleForm},
    layout: "no-header",
    head: () => ({
      title: "Nouvel article"
    }),
    methods: {
      goBack: function() {
        this.$router.go(-1);
      }
    }
  }
</script>
