<template>
    <div>
        <h2>{{fullname}}</h2>
    </div>
</template>

<script>
import {computed} from 'vue';
export default {
    props : ['username'],
    setup(props){
        console.log(props)
        const fullname = computed(()=>{
            return props.username.firstName + ' ' + props.username.lastName
        })

        return {
            fullname
        }
    }
}
</script>