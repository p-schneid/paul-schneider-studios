import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/software",
    name: "Software",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "software" */ "../views/Software.vue"),
  },
  {
    path: "/software-project",
    name: "Software Project",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "software" */ "../views/SoftwareProject.vue"),
  },
  {
    path: "/design",
    name: "Design",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "design" */ "../views/Design.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
