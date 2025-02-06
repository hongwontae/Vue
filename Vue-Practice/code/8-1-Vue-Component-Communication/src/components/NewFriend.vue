<template>
    <form @submit.prevent="addContactHandler">
        <div>
            <label>Name</label>
            <input v-model="enteredName" type="text"/>
            </div>
        <div>
            <label>Phone</label>
            <input v-model="enteredPhone" type="password"/>
            </div>
        <div>
            <label>E-Mail</label>
            <input v-model="enteredEmail" type="email" />
            </div>
        <div>
            <button>Add Contact</button>
        </div>
        <div>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            enteredName : '',
            enteredPhone : '',
            enteredEmail : '',
        }
    },
    emits : ['add-contact', 'delete-contact'],
    methods : {
        addContactHandler(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
}
</script>


<style>
#app input {
    font: inherit;
    padding: 0.15rem;
}

#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}

#app form div {
    margin: 1rem 0;
}
</style>