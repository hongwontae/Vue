<template>
  <section class="container">
    <user-data v-bind:username="username"></user-data>
    <div>
      <input type="text" placeholder="FirstName" v-on:input="nameHandler" />
      <input type="text" placeholder="LastName" v-on:input="ageHandler"/>
    </div>
  </section>
</template>

<script>
import {ref, provide} from 'vue';
import UserData from './components/UserData.vue';
export default {

  components : {
    UserData
  },
  setup(){
      const username = ref({firstName : '', lastName : ''});
      const userage = ref(0);

      function nameHandler(e){
        username.value.firstName = e.target.value
      }
      function ageHandler(e){
        username.value.lastName = e.target.value
      }

      provide('userAge', userage);

      return {
        nameHandler,
        ageHandler,
        username,
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>