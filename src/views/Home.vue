<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>

      <img v-bind:src="movie.image" v-bind:alt="movie.title" />

      <p>{{ movie.body }}</p>
      <p></p>
      <p>---------------------------------</p>
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
  width: 250px;
  height: 350px;
}

h2 {
  font-style: italic;
  border-top-style: dashed;
  border-bottom-style: dashed;
  border-left-style: solid;
  border-right-style: solid;
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
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Movies",
      moviess: [],
    };
  },
  created: function () {
    this.indexMoviess();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        this.movies = response.data;
      });
    },
  },
};
</script>
