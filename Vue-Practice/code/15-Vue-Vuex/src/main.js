import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state(){
        return {
            counter : 0,
            isLoggedIn : false
        }
    },
    mutations : {
        increment(state){
            state.counter +=1;
        },
        increase(state, payload){
            state.counter +=payload.value
        },
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    getters : {
        finalCounter(state){
            return state.counter*3
        },
        userIsAuthenticated(state){
            return state.isLoggedIn;
        }
    },
    actions : {
        increment(context){
            setTimeout(()=>{
                context.commit('increment');
            }, 2000)
        },
        increase(context, payload){
            setTimeout(()=>{
                context.commit('increase', payload)
            }, 1000)
        },
        login(context){
            context.commit('setAuth', {isAuth : true});
        },
        logout(context){
            context.commit('setAuth', {isAuth : false})
        }
    }
})

app.use(store);

app.mount('#app');
