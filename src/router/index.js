import Vue from 'vue'
import Router from 'vue-router'
const originalPush = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('views/home/home.vue');
const Cart = () => import('views/cart/cart.vue');
const Category = () => import('views/category/category.vue');
const Profiles = () => import('views/profile/prodile.vue');
const Detail = () => import('views/detail/Detail.vue');
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profiles',
    component: Profiles
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new Router({
  routes,
  mode:"history"
})


export default router
