import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Software from "../views/Software.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Software",
    component: Software,
  },
  {
    path: "/software",
    name: "Software",
    component: Software
  },
  {
    path: "/software-project/:id",
    name: "Software Project",
    props: true,
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
    path: "/vr",
    name: "VR and AR",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "design" */ "../views/VR.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
