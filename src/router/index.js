import Vue from 'vue';
import Router from 'vue-router';
import LayoutLogged from '@/components/layout-logged/layout';
import Home from '@/pages/Home';
import Users from '@/pages/Users';
import Login from '@/pages/Login';
import store from '@/store';

// import authActions from '@/store/modules/auth/actions';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutLogged,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: 'users',
          component: Users,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('auth/isLogged')
      .then((data) => {
        if (data) {
          next();
        } else {
          next({
            path: '/login',
          });
        }
      });
  } else {
    next();
  }
});


export default router;
