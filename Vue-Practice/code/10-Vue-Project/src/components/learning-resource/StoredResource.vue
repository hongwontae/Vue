<template>
    <ul>
        <learning-resource v-for="res in resources" v-bind:key="res.id" v-bind:title="res.title"
            v-bind:description="res.description" v-bind:link="res.link"></learning-resource>
    </ul>
</template>

<script>
import LearingResource from './LearningResource.vue';

export default {
    components: {
        'learning-resource' : LearingResource
    },
    inject : ['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>