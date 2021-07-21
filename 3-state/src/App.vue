<template>
  <div id="app">
    <h1>Ejemplo de Vuex básico by {{name}}</h1>
    <Counter/>
    <ReadStore />
  </div>
</template>

<script>

import Counter from './components/Counter'
import ReadStore from './components/ReadStore'

export default {
  name: 'App',
  components: {
    Counter,
    ReadStore
  },
  computed:{
    name(){
      return this.$store.state.name
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
