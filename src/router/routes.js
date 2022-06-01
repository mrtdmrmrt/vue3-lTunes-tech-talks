export default [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/DetailView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () =>
      import(
        /* webpackChunkName: "reservation" */ "../views/ReservationView.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];
