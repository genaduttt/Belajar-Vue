import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Promo from '../views/Promo.vue';
import Article from '../views/Article.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/promo',
    name: 'Promo',
    component: Promo,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;