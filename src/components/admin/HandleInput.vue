<template>
  <span class="fst-italic text-success">---- Child Component ----</span>
  <span class="text-dark">Input data :</span>
  <div class="d-flex gap-2 mb-4">
    <input type="text" class="w-50" v-model="formInput"/>
    <button @click="toUpperCase">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HandleInputComp',
  emits: ['to-upper-case'],
  methods: {
    toUpperCase(){
      this.$emit('to-upper-case', this.formInput.toLocaleUpperCase())
    }
  },
  data(){
    return{
      formInput: ''
    }
  }
}
</script>