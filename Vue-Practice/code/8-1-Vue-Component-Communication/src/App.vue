<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="submitData"></new-friend>
    <ul>
      <friend-contact v-for="friend in friends" v-bind:key="friend.id" v-bind:id="friend.id" v-bind:name="friend.name"
        v-bind:phone-number="friend.phone" v-bind:email-address="friend.email" v-bind:toggle-number="friend.toggle"
        @cutom-toggle="toggleFavoriteStatus" @delete-contact="deleteData"></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          toggle: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          toggle: true
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(id) {
      console.log('자식 => 부모 컴포넌트 역방향 통신', id)
      const targetFriend = this.friends.find(ele => {
        return ele.id == id
      })
      console.log(targetFriend)
      targetFriend.toggle = !targetFriend.toggle
    },
    submitData(name, phone, email){
      const newFriend = {
        id : new Date().toISOString(),
        name,
        phone,
        email,
        toggle : false
      }
      this.friends.push(newFriend)
    },
    deleteData(id){
      const filteredFriends = this.friends.filter(ele=>{
        return ele.id != id
      })
      this.friends = filteredFriends
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>