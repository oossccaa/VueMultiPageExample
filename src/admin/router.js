import Vue from "vue";
import VueRouter from "vue-router";
import Home2 from "./views/Home2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home2",
    component: Home2
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
