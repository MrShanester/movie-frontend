<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <p></p>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <p></p>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <p></p>
      <div>
        <label>Email:</label>
        <p></p>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <p></p>
      <div>
        <label>Password:</label>
        <p></p>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <p></p>
      <div>
        <label>Password confirmation:</label>
        <p></p>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <p></p>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped>
.signup {
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
