<template>
  <div id="admin">
    <h1>Hello {{ username }}</h1>
    <ul v-if="getPosts">
      <li v-for="post in getPosts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    username() {
      return this.$store.state.username;
    },
    getPosts() {
      return this.$store.state.posts;
    },
  },
};
</script>
