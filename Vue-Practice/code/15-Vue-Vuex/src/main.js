import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const app = createApp(App);

const counterModule = {
    namespaced : true,
    state(){
        return {
            counter : 0,
        }
    },
    mutations : {
        increment(state){
            state.counter +=1;
        },
        increase(state, payload){
            state.counter +=payload.value
        },
    },
    getters : {
        finalCounter(state){
            return state.counter*3
        },
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
    }
}

const store = createStore({
    modules : {
        numbers : counterModule
    },
    state(){
        return {
            isLoggedIn : false
        }
    },
    mutations : {
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    getters : {
        userIsAuthenticated(state){
            return state.isLoggedIn;
        }
    },
    actions : {
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
