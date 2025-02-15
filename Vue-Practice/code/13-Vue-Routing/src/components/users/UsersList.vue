<template>
  <ul>
    <button v-on:click="validHandler">Save!</button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      isValid : false
    }
  },
  methods : {
    validHandler(){
      console.log('validHanlder')
      this.isValid = true
    }
  },
  beforeRouteLeave(to, from, next){
    console.log(to, from, next);
    if(this.isValid){
      next()
    } else {
      const questionValid = confirm('are you close?');
      next(questionValid);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>