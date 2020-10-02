<template>
  <div>
    <messages-list />
  </div>
</template>

<script>
  import MessagesList from "../../../components/messages/messages-list";
  export default {
    components: {MessagesList},
    head: () => ({
      title: "Corbeille"
    })
  }
</script>
