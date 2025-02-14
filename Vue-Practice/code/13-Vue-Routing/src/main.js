import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TermsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/terms',
      components: {
        default: TermsList,
        teamsFooter: TeamsFooter,
      },
      children: [
        {
          path: '/terms/:teamId',
          component: TeamMembers,
          props: true,
          name: 'teamMember',
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        usersFooter: UsersFooter,
      },
    },
    { path: '/:notFoundd(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }
    return {top : 0, left : 0}
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
