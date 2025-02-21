<template>
    <button v-on:click="inc">Add 2</button>
    <button v-on:click="incr({value : 10})">Add 11</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    methods : {
    //  ...mapActions(['increment', 'increase'])
    ...mapActions({
        inc : 'numbers/increment',
        incr : 'numbers/increase'
    })
    }
}
</script>