<template>
  <base-dialog v-if="isValid" title="Invalid Input" @close="confirmError">
  <template v-slot:default>
    <p>at least one input value is invaild</p>
    <p>Please check all inputs and make sure you enter at least...</p>
  </template>
  <template v-slot:actions>
    <base-button v-on:click="confirmError">Okay</base-button>
  </template>
  </base-dialog>
    <base-card>
        <form v-on:submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" type="text" name="title" ref="titleRef"/>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" type="text" name="description" rows="3" ref="descRef" />
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkRef"/>
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
  inject : ['submitHandler'],
  data(){
    return {
      isValid : false
    }
  },
  methods : {
    submitData(){
      const title = this.$refs.titleRef.value;
      const description = this.$refs.descRef.value;
      const link = this.$refs.linkRef.value

      if(title.trim() === '' || description.trim() === '' || link.trim() === ''){
        this.isValid = true
        return;
      }

      this.submitHandler(title, description, link)
    },
    confirmError(){
      this.isValid = false
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>