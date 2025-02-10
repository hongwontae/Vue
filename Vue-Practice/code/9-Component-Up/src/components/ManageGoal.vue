<template>
    <div>
        <h2>Manage Goal</h2>
        <input type="text" ref="goal" />
        <button v-on:click="submitHandler">Submit</button>
        <teleport to="body">
            <error-alert v-if="isBol">
                <h2>유효한 값이 아닙니다.</h2>
                <p>Button을 눌러서 다시 시도해 주세요</p>
                <button v-on:click="restartHandler">Retry</button>
            </error-alert>
        </teleport>

    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {
        'error-alert': ErrorAlert
    },
    data() {
        return {
            isBol: false,
        }
    },
    methods: {
        submitHandler() {
            if (this.$refs.goal.value === '') {
                this.isBol = true
            }
        },
        restartHandler() {
            this.isBol = false
        }
    }
}
</script>