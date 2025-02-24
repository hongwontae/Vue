<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
    <button v-on:click="setUser">SetChange</button>
    <div>
      <input type="text" placeholder="FirstName" v-on:input="nameHandler" />
      <input type="text" placeholder="LastName" v-on:input="ageHandler"/>
      <input type="text" ref="inputRef" v-on:input="testHandler" />
    </div>
  </section>
</template>

<script>
import {computed, reactive, ref, toRefs, watch} from 'vue';
export default {
  setup(){
      const user = reactive({
        age : 28
      })
      const firstName = ref('')
      const lastName = ref('')

      const inputRef = ref('')
      
      function testHandler(){
        console.log(inputRef.value.value)
      }

      function setUser(){
        user.age = 222
      }
      const userName = computed(()=>{
        return firstName.value + ' ' + lastName.value
      })

      function nameHandler(e){
        firstName.value = e.target.value;
      }
      function ageHandler(e){
        lastName.value = e.target.value
      }

      watch(user, (newValue)=>{
        if(newValue.age == 222){
          console.log(222 + 'true');
        }
      })

      const upgradeUser = toRefs(user)

      return {
        userName,
        age : upgradeUser.age,
        firstName,
        lastName,
        setUser,
        nameHandler,
        ageHandler,
        inputRef,
        testHandler
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