<template>
  <div class="home">
    <h1>Welcome on my site</h1>
    <ul v-if="posts">
      <li>{{ posts }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    username() {
      return this.$store.state.username;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>
