import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("authToken")) {
    console.log('trigger here')
    return next();
  } else {
    console.log('trigger here there')
    return next("/login");
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      name:'login',
      beforeEnter: guest,
      component: () => import("../views/Login.vue")
    },
    {
      path:'/register',
      name:'register',
      beforeEnter:guest,
      component: () => import("../views/Register.vue")
    },
    {
      path:'/dashboard',
      name:'DashBoard',
      beforeEnter:auth,
      component: () => import("../views/DashBoard.vue")
    },
    {
      path:'/contacts/:contactGroupId',
      name:'Contacts',
      beforeEnter:auth,
      component: () => import("../views/Contacts.vue")
    }
  ]
})

export default router
