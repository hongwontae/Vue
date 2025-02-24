import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage }, // homepage
    {
      path: "/board",
      component: null,
      children: [
        { path: ":id", component: null }, // /board/1, /board/2
      ],
    },
    {paht : '/board/detail/:id', component : null}, // board/detail/..
  ],
});

export default router;
