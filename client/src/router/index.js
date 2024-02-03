import { createRouter, createWebHistory } from "vue-router";
import MainHome from "@/views/MainHome";

const routes = [
  {
    path: "/",
    name: "MainHome",
    component: MainHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
