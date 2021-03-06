import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
