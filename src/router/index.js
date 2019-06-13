import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import ResetPassword from '@/components/ResetPassword';
import Dashboard from '@/components/Dashboard';
import Connections from '@/components/Connections';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login,
    // },
    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword,
    },
    {
      path: '/connections',
      name: 'Connections',
      component: Connections,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
