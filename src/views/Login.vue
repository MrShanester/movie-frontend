<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <p></p>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <p></p>
      <div>
        <label>Password:</label>
        <p></p>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <p></p>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped>
.login {
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$parent.flashMessage = "Successfully Logged In!";
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
