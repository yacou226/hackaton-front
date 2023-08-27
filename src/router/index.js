import { createRouter, createWebHistory } from "vue-router";


const routes =[
  {path:'/',name:'LoginPage',component:()=> import('@/views/LoginPage.vue')},
 // {path:'/home',name:'Home',component:()=> import('@/views/Home.vue')},
  {
    path:'/dashboard',
    name:'Dashboard',
    component:()=> import('@/views/dashboard/Dashboard.vue'),
    children: [
      {

        path: '/newCandidat',
        name:'NewCandidat',
        component: ()=> import('@/views/dashboard/NewCandidat.vue'),
      },
      {
        path: '/home',
        name:'Home',
        component: ()=> import('@/views/dashboard/Home.vue'),
      },
      {
        path: '/candidats',
        name:'CandidatList',
        component: ()=> import('@/views/dashboard/CandidatList.vue'),
      },
      {
        path: '/add-sondage',
        name:'AddSondage',
        component: ()=> import('@/views/dashboard/AddSondage.vue'),
      },
    ],
  },
  

]


const router = createRouter({
  routes,
  history:createWebHistory(),
})

export default router;