import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state(){
        return {
            counter : 0
        }
    },
    mutations : {
        increment(state){
            state.counter +=1;
        },
        increase(state, payload){
            state.counter +=payload.value
        }
    },
    getters : {
        finalCounter(state){
            return state.counter*3
        }
    }
})

app.use(store);

app.mount('#app');
