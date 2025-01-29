const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmName : ''
    };
  },
  methods : {
    add(num){
      return this.counter = this.counter+num
    },
    reduce(){
      return this.counter = this.counter-1
    },
    nameHandler(event, HWT){
      console.log(HWT)
      return this.name = event.target.value
    },
    confimeHandler(){
      this.confirmName = this.name
    }
  }
});

app.mount('#events');
