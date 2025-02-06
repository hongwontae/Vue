<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleHandler">{{tn ? 'ff' : 'tt'}}</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name : {
      type : String,
      required : true
    },
    phoneNumber : {
      type : String,
      required : true
    },
    emailAddress : {
      type : String,
      required : true
    },
    toggleNumber : {
      type : Boolean,
      required : true
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      tn : this.toggleNumber
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleHandler(){
      this.tn = !this.tn
    }
  }
};
</script>