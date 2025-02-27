import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import store from './store/index.js';

const app = createApp(App);

// const store = createStore({
//   state() {
//     return {
//       isLoggedIn: false,
//      
//     };
//   },
//   mutations: {
//     
//     login(state) {
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//     },
//   },
// });

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
