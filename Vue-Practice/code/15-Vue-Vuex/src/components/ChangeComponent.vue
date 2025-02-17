<template>
    <button v-on:click="addOne">Add 1</button>
    <button v-on:click="dynamicAdd">Add 10</button>
</template>

<script>
export default {
    methods : {
        addOne(){
            this.$store.commit('increment');
        },
        dynamicAdd(){
            this.$store.commit({
                type : 'increase',
                value : 10
            })
        }
    }
}
</script>