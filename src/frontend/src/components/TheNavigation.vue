<template>
  <div id="navbar">
    <nav class="navbar">
      <h1 class="navbar__logo">
        <router-link :to="{ name: 'Home' }">VueJS</router-link>
      </h1>
      <ul class="navbar__menu">
        <li class="navbar__menu-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="navbar__menu-item" v-if="$store.state.username">
          <router-link :to="{ name: 'Admin' }">Admin</router-link>
        </li>
        <li class="navbar__menu-item">
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
        <li class="navbar__menu-item" v-if="$store.state.username === null">
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </li>
        <li class="navbar__menu-item" v-if="$store.state.username">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "TheNavigation",
  computed: {
    username: () => {
      return this.$store.state.username;
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gold;
  padding: 0 1.5rem;
}

.navbar__logo > a {
  text-decoration: none;
  color: inherit;
}
.navbar__menu {
  display: flex;
  align-items: center;
  list-style: none;
}

.navbar__menu-item {
  margin-left: 1.2rem;
}

.navbar__menu-item > a {
  text-decoration: none;
  color: #333;
}
.navbar__menu-item > a:hover {
  color: antiquewhite;
}
button {
  border: none;
  background-color: gold;
  outline: none;
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1em;
}
button:hover {
  color: antiquewhite;
}
</style>
