import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {requiresAuth: true},
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){

    if (store.state.id){
      next()
    } else {
      next({name: 'Home'})
    }
  } else {
    next()
  }
})


export default router;
