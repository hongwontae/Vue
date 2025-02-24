<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
html,
body {
  margin: 0;
  background-color: #112;
  color: white
}
</style>