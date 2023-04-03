import { createRouter, createWebHistory } from "vue-router";
import MainVue from "./Main.vue";
import OtherVue from "./Other.vue";

const routes = [
  { path: "/", component: MainVue },
  { path: "/about", component: OtherVue },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
