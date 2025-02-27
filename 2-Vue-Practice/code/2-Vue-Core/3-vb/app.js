const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("실행");
      console.log(newValue);
      if (newValue === "") {
        this.fullname = "";
      } else {
        this.fullname = newValue + " " + "HWT";
      }
    },
  },
  computed: {
    // fullname() {
    //   console.log("재실행");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Hong Won Tae";
    // },
  },
  methods: {
    outputFullName() {
      console.log("재실행");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Hong Won Tae";
    },
    // setName(event) {
    //   this.name = event.target.value;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
