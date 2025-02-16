<template>
    <ul>
        <transition-group tag="ul">
            <li v-for="user in users" v-bind:key="user" v-on:click="() => removeUser(user)">{{ user }}</li>            
        </transition-group>
    </ul>
    <div>
        <input type="text" ref="userNameInput"/>
        <button v-on:click="()=>addUser()">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Max', 'Manu', 'Juile', 'Angela', 'Michael']
        }
    },
    methods: {
        addUser() {
            const username = this.$refs.userNameInput.value;
            console.log(username)
            this.users.unshift(username)
        },
        removeUser(value) {
            this.users = this.users.filter(ele => {
                return ele !== value
            })
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}
</style>