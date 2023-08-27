import { createRouter, createWebHistory } from "vue-router";
import authMiddleware from "../../authMiddleware";

const routes =[
  {path:'/',name:'LoginPage',component:()=> import('@/views/LoginPage.vue')},
 // {path:'/home',name:'Home',component:()=> import('@/views/Home.vue')},
  {
    path:'/dashboard',
    name:'Dashboard',
    component:()=> import('@/views/Dashboard.vue'),
    children: [
      {

        path: '/newCandidat',
        name:'NewCandidat',
        component: ()=> import('@/views/NewCandidat.vue'),
        meta: {
          middleware: [authMiddleware] // Utilisation du middleware pour cette route
        }
      },
      {
        path: '/home',
        name:'Home',
        component: ()=> import('@/views/Home.vue'),
        meta: {
          middleware: [authMiddleware] // Utilisation du middleware pour cette route
        }
      },
      {
        path: '/candidats',
        name:'CandidatList',
        component: ()=> import('@/views/CandidatList.vue'),
        meta: {
          middleware: [authMiddleware] // Utilisation du middleware pour cette route
        }
      },
      {
        path: '/add-sondage',
        name:'AddSondage',
        component: ()=> import('@/views/AddSondage.vue'),
        meta: {
          middleware: [authMiddleware] // Utilisation du middleware pour cette route
        }
      },
    ],
  },
  

]


const router = createRouter({
  routes,
  history:createWebHistory(),
})


// Middleware setup
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    const context = { to, from, next };
    middleware[0]({ ...context });
  } else {
    next();
  }
});

export default router;