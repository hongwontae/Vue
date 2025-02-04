const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "010-1234-5667",
          email: "koala3121@naver.com",
        },
        {
          id: "hwt",
          name: "HWWW",
          phone: "010-dddd-3337",
          email: "dnjsxoghd@naver.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {},
  },
});

app.component("friend-contact", {
  template: `
         <li>
            <h2>{{ friend.name }}</h2>
            <button @click="()=>toggleDetails()">
                {{detailAreVisible ? 'Hide' : 'Show'}} Details
            </button>
            <ul v-if="detailAreVisible">
              <li><strong>Phone :</strong>{{ friend.phone }}</li>
              <li><strong>Email :</strong>{{ friend.email }}</li>
            </ul>
          </li>
    `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "010-1234-5667",
        email: "koala3121@naver.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount("#app");
