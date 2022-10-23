import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import talentList from "../views/TalentList.vue";

const routes = [
  {
    path: "/",
    name: "talents",
    // component: HomeView,
    component: talentList,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
