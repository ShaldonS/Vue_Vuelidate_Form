<template>
  <div id="app">
    <button @click="isFormVisible=!isFormVisible; changeBtnText()">{{btnText}}</button>
    <ClientForm :isFormVisible="isFormVisible"/>
  </div>
</template>

<script>
import ClientForm from './components/ClientForm.vue'

export default {
  name: 'App',
  components: {
    ClientForm
  },
  data() {
    return {
      btnText: 'Hide form',
      isFormVisible: true
    }
  },
  methods: {
    changeBtnText() {
      this.btnText = this.isFormVisible ? 'Hide form' : 'Show form'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
