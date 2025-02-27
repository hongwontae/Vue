<template>
    <div>
        <label for="agree">Rate your experience</label>
        <input 
            id="agree" 
            type="text" 
            :value="modelValue" 
            @input="updateValue" 
        />
    </div>
</template>

<script>
export default {
    props: ['modelValue'],  // 부모로부터 v-model 데이터 받음
    emits: ['update:modelValue'],  // 부모에게 변경된 값 전달
    methods : {
        updateValue(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
};
</script>