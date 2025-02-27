<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <change-component></change-component>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeComponent from './components/ChangeComponent.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeComponent,
    UserAuth
  },
  computed : {
        isAuth(){
            return this.$store.getters.userIsAuthenticated;
        }
    }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>