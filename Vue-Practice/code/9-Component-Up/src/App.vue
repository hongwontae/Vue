<template>
  <div>
    <the-header></the-header>
    <button v-on:click="() => changeComponent()">Change Goal</button>
    <keep-alive>
      <component v-bind:is="componentName"></component>

    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoal from './components/ActiveGoal.vue';
import ManageGoal from './components/ManageGoal.vue'


export default {
  components: {
    'the-header': TheHeader,
    // 'user-info': UserInfo,
    // 'badge-list': BadgeList,
    // 'course-goal': CourseGoals
    'active-goal': ActiveGoal,
    'manage-goal': ManageGoal
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      componentName: 'active-goal'

    };
  },
  methods: {
    changeComponent() {
      if (this.componentName === 'active-goal') {
        this.componentName = 'manage-goal'
      } else {
        this.componentName = 'active-goal'
      }
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>