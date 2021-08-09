import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Web from "../views/Web.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Web Development",
    component: Web,
  },
  {
    path: "/web",
    name: "Web Development",
    component: Web
  },
  {
    path: "/web-app/:id",
    name: "Web App",
    props: true,
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "web-app" */ "../views/WebApp.vue"),
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
      import(/* webpackChunkName: "design" */ "../views/vr/VR.vue"),
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
