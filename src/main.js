import Vue from "vue";
import App from "./App.vue";
// import TodolistItem from "@/components/TodolistItem";
import router from "./router";
import myPlugin from "@/plugins/myPlugin";

Vue.config.productionTip = false;
// Vue.component("todolist-item", TodolistItem);

Vue.use(myPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
