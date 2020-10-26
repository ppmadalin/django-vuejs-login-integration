<template>
  <div id="login">
    <h1>Login</h1>
    <div class="login">
      <form class="login__form" @submit.prevent="login">
        <input
          v-model="username"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return { username: null, password: null };
  },
  methods: {
    login: function() {
      const payload = {
        username: this.username,
        password: this.password,
        id: 1,
      };
      this.$store.dispatch("login", payload);
    },
  },
};
</script>
<style scoped>
#login {
  text-align: center;
}

.login {
  display: flex;
  justify-content: center;
}

.login__form {
  width: 400px;
  display: flex;
  flex-direction: column;
}

.login__form > input {
  margin: 0.75rem 0;
  padding: 0.75rem;
  font-size: 1.2em;
}
</style>
