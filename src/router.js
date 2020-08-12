import Vue from "vue";
import Router from "vue-router";

import MainPage from "@/components/MainPage";
// import SubPage from "@/components/SubPage";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/sub",
    component: () => import("@/components/SubPage"),
  },
];

export default new Router({
  mode: "history",
  routes,
});
