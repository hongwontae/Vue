<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <change-component></change-component>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeComponent from './components/ChangeComponent.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeComponent
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