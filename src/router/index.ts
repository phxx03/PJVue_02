import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'employeepage',
    // redirect: '/employeepage'
    // path: 'employeepage',
    component: () => import('@/views/EMPage.vue')
  },
  {
    path: '/cast',
    name: 'cast',
    component: () => import("@/views/CastPD.vue")
  },
  {
    path: '/Product-List',
    name: 'Product-List',
    component: () => import("@/views/PDlist.vue")
  },
  {
    path: '/history',
    name: 'history',
    component: () => import("@/views/History.vue")
  },
  {
    path: '/edit-product',
    name: 'edit-product',
    component: () => import("@/views/EditPD.vue")
  },
  {
    path: '/edit-employee',
    name: 'edit-employee',
    component: () => import("@/views/EditEM.vue")
  },
  {
    path: '/edit-Product-Detail',
    name: 'edit-Product-Detail',
    component: () => import("@/views/EditPDDetail.vue")
  },
  {
    path: '/edit-Employee-Detail',
    name: 'edit-Employee-Detail',
    component: () => import("@/views/EditEMDetail.vue")
  },
  {
    path: '/Cart-Bill',
    name: 'Cart-Bill',
    component: () => import("@/views/CartBill.vue")
  },
  {
    path: '/Export',
    name: 'Export',
    component: () => import("@/views/Export.vue")
  },
  {
    path: '/Export-Detail',
    name: 'Export-Detail',
    component: () => import("@/views/ExportDetail.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
