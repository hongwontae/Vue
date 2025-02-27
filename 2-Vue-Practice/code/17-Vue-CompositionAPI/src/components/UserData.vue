<template>
    <div>
        <h2>{{ fullname }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
import { computed, inject } from 'vue';
export default {
    props: ['username'],
    setup(props) {

        const fullname = computed(() => {
            return props.username.firstName + ' ' + props.username.lastName
        })

        const age = inject('userAge');

        return {
            fullname,
            age
        }
    }
}
</script>