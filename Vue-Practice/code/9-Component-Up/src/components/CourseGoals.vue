<template>
    <ul>
        <li v-for="goal in goals" v-bind:key="goal">
           <slot v-bind:item="goal"></slot> 
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            goals : ['Learn Vue', 'Hello-World']
        }
    }
}
</script>