import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import TermsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue';

import App from './App.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/terms', component : TermsList},
        {path : '/users', component : UsersList},
        {path : '/terms/:teamId', component : TeamMembers, props : true},
        {path : '/:notFoundd(.*)', component :NotFound }
    ],
    linkActiveClass : 'active'
})

const app = createApp(App)

app.use(router)

app.mount('#app');
