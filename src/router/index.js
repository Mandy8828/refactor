// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Work from "../pages/work.vue";
import Home from "../pages/home.vue";
import Notifications from "../pages/notifications.vue";
import Team from "../pages/team.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
