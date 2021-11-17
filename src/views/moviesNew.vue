<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Movie Title:</p>
    <input type="string" v-model="newMovieParams.title" />
    <p>Plot:</p>
    <input type="text" v-model="newMovieParams.plot" />
    <p>Year:</p>
    <input type="integer" v-model="newMovieParams.year" />
    <p>Director:</p>
    <input type="string" v-model="newMovieParams.irector" />
    <p></p>
    <button v-on:click="createMovie()">Create Movie!</button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function () {
    return {
      message: "IMDB (New and Improved)",

      newMovieParams: {},
      currentMovie: {},
    };
  },
  methods: {
    createMovie: function () {
      axios.post("http://localhost:3000/movies", this.newMovieParams).then((response) => {
        console.log(response.data);
        this.movies.push(response.data);
      });
      this.newMovieParams.title = "";
      this.newMovieParams.plot = "";
      this.newMovieParams.year = "";
    },
  },
};
</script>
