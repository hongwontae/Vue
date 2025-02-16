<template>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ 'animate': animationState }"></div>
    <button v-on:click="animationHandler">Animate</button>
  </div>
  <div class="container">
    <transition>
      <p v-if="toggleState">Hello-world</p>
    </transition>
    <button @click="toggleHandler">Click</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="buttonIsVisible" v-on:click="showHandler">Show Users</button>
      <button v-else v-on:click="hideHandler">Hide Users</button>
    </transition>

  </div>
  <base-modal :open="dialogIsVisible" @close="hideDialog">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';
export default {
  components : {
    'list-data' : ListData
  },
  data() {
    return { buttonIsVisible: true, dialogIsVisible: false, animationState: false, toggleState: true };
  },
  methods: {
    showHandler() {
      this.buttonIsVisible = false
    },
    hideHandler() {
      this.buttonIsVisible = true
    },
    animationHandler() {
      this.animationState = true
    },
    toggleHandler() {
      this.toggleState = !this.toggleState
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from{
  opacity: 1;
}


.v-enter-from {
  opacity: 0.4;
}

.v-enter-active {
  transition: all 0.5s ease-out;
}

.v-enter.to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.v-leave-active {
  transition: all 0.3s ease-out
}

.v-leave-to {
  opacity: 0.1;
  transform: translateY(30px);
}

.animate {
  /* transform: translateX(-150px);*/
  animation: slide-fade 0.3s forwards
}

@keyframes slide-fade {
  0% {
    transform: translate(0px) scale(1)
  }

  70% {
    transform: translateX(70px) scale(1.5)
  }

  100% {
    transform: translatex(150px) scale(1);
  }
}
</style>