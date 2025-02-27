<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button v-on:click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data(){
    return {
      results : []
    }
  },
  components: {
    SurveyResult,
  },
  methods : {
    async loadExperiences(){
      const response = await fetch('http://localhost:8080/test/show')
      const resData = await response.json()
      
      this.results = resData.data;
    }
  },
  mounted(){
    this.loadExperiences()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>