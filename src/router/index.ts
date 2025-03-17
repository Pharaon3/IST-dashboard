import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import AdminDashboard from "../pages/AdminDashboard.vue";
import StatsDashboard from "../pages/StatsDashboard.vue";
import UsersPage from "../pages/UsersPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/dashboard", component: AdminDashboard },
  { path: "/users", component: UsersPage },
  { path: "/stats", component: StatsDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
