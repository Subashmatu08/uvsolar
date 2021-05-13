import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/residential",
    name: "Residential",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Residential.vue"),
  },
  {
    path: "/commercial",
    name: "Commercial",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Commercial.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services.vue"),
  },
  {
    path: "/getintouch",
    name: "GetInTouch",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GetInTouch.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
