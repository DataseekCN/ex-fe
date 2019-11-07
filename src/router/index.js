import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import ResetPassword from '@/components/ResetPassword';
import Dashboard from '@/components/Dashboard';
import Connections from '@/components/Connections';
import Signup from '@/components/Signup';
import VerifyEmail from '@/components/VerifyEmail';
import Setup from '@/components/Setup';
import Backups from '@/components/Backups';
import Settings from '@/components/Settings';
import SyncLogs from '@/components/SyncLogs';
import Subscription from '@/components/Subscription';
import User from '@/components/User';
import MainContent from '@/components/MainContent';


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
    children: [{
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword,
    }, {
      path: '/verifyemail',
      name: 'VerifyEmail',
      component: VerifyEmail,
    }],
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup,

  },
  {
    path: '/user',
    name: 'User',
    component: User,
  }, {
    path: '/main',
    name: 'MainContent',
    component: MainContent,
    children: [{
      path: '/dashboard',
      name: 'DashBoard',
      component: Dashboard,
    }, {
      path: '/connections',
      name: Connections,
      component: Connections,
    }, {
      path: '/settings',
      name: Settings,
      component: Settings,
    }, {
      path: '/subscription',
      name: Subscription,
      component: Subscription,
    }, {
      path: '/synclogs',
      name: SyncLogs,
      component: SyncLogs,
    }, {
      path: '/backups',
      name: Backups,
      component: Backups,
    }],
  },
  ],
});
