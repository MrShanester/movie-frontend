<template>
  <div class="home">
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
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.plot }}</p>
      <button v-on:click="showMovie(movie)">Show More Info</button>
      <dialog id="movie-details">
        <form method="dialog">
          <h2>Movie Info:</h2>
          <p>
            Title:
            <input type="text" v-model="currentMovie.title" />
          </p>
          <p>
            Plot:
            <input type="text" v-model="currentMovie.plot" />
          </p>
          <p>
            Year:
            <input type="integer" v-model="currentMovie.year" />
          </p>
          <button v-on:click="updateMovie(currentMovie)">Update Movie</button>
          <button v-on:click="destroyMovie(currentMovie)">Delete Movie</button>
          <button>Close</button>
        </form>
      </dialog>
      <p>------------------------------------</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  border: 12px solid;
  border-image: linear-gradient(135deg, #ff0000 0%, #49ff33 25%, #3364ff 50%, #f6ff33 75%, #ff00a8 100%) 1;
}

img {
  width: 350px;
}

.home {
  margin: 0 auto;
  padding: 10px 25px;
  border: 3px solid;
  border-image: linear-gradient(135deg, #ff0000 0%, #49ff33 25%, #3364ff 50%, #f6ff33 75%, #ff00a8 100%) 1;

  background: rgb(228, 226, 226);
}
</style>

<script>
const axios = require("axios");

export default {
  data: function () {
    return {
      message: "Welcome To The Shop",
      movies: [],
      newMovieParams: {},
      currentMovie: {},
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        this.movies = response.data;
      });
    },
    createMovie: function () {
      axios.post("http://localhost:3000/moviess", this.newMovieParams).then((response) => {
        console.log(response.data);
        this.movies.push(response.data);
      });
      this.newMovieParams.title = "";
      this.newMovieParams.plot = "";
      this.newMovieParams.year = "";
    },
    showMovie: function (movie) {
      this.currentMovie = movie;
      console.log(movie);
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      axios.patch("http://localhost:3000/movies/" + movie.id, movie).then((response) => {
        console.log("Movie Created", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("http://localhost:3000/movies/" + movie.id).then((response) => {
        console.log("Movie Destroyed", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
