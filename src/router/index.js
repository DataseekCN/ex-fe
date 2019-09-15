import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import ResetPassword from '@/components/ResetPassword';
import Dashboard from '@/components/Dashboard';
import Connections from '@/components/Connections';
import Signup from '@/components/Signup';
import VerifyEmail from '@/components/VerifyEmail';
import Setup from '@/components/Setup';
import SyncLogs from '@/components/SyncLogs';
import Subscription from '@/components/Subscription';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/verifyemail',
    name: 'VerifyEmail',
    component: VerifyEmail,
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
  {
    path: '/setup',
    name: 'Setup',
    component: Setup,
  },
  {
    path: '/synclogs',
    name: 'SyncLogs',
    component: SyncLogs,
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription,
  },
  ],
});
