/* global UIkit */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Practice from '../views/Practice';
import Mock from '../views/Mock';
import About from '../views/About';
import NotFound from '../views/NotFound';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    return {
      selector: to.hash,
    };
  }
  return { x: 0, y: 0 };
};

const router = new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'uk-active',
  scrollBehavior,
  routes: [
    {
      name: '基本法全文',
      path: '/',
      component: Home,
      meta: { scrollToTop: true },
    },
    {
      name: '基本法測試試題',
      path: '/practice',
      component: Practice,
      meta: { scrollToTop: true },
    },
    {
      name: '基本法模擬考試',
      path: '/mock',
      component: Mock,
      meta: { scrollToTop: true },
    },
    {
      name: '關於',
      path: '/about',
      component: About,
      meta: { scrollToTop: true },
    },
    {
      name: '錯誤404',
      path: '*',
      component: NotFound,
      meta: { scrollToTop: true },
    },
  ],
});

router.beforeEach((route, redirect, next) => {
  UIkit.offcanvas.hide(true);
  next();
});

export default router;
