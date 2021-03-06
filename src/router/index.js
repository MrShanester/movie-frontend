import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesEdit from "../views/moviesEdit.vue";
import MoviesShow from "../views/moviesShow.vue";
import MoviesNew from "../views/moviesNew.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies/:id/edit",
    name: "MoviesEdit",
    component: MoviesEdit,
  },
  {
    path: "/movies/:id",
    name: "MoviesShow",
    component: MoviesShow,
  },
  {
    path: "/newmovie",
    name: "MoviesNew",
    component: MoviesNew,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
