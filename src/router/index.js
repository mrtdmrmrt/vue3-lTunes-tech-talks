import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const loggedIn = authStore.getIsLogin;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    checkPageWhenSignIn();
  }

  function checkPageWhenSignIn() {
    if (to.name === "Login") {
      if (loggedIn) {
        next({
          path: "/",
        });
      } else {
        next();
      }
    } else {
      next();
    }
  }
});
export default router;
