<template>
  <div id="app">
    <h1>Ejemplo de Vuex básico by {{name}} (edad: {{age}})</h1>
    <Counter/>
    <ReadStore />
    <Users />
  </div>
</template>

<script>

import Counter from './components/Counter'
import ReadStore from './components/ReadStore'
import Users from './components/Users'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    Counter,
    ReadStore,
    Users
  },
  // computed:
  //   mapState({
  //     name: state => state.name,
  //     age: state => state.age,
  //   })
  computed: mapState(['name', 'age'])
  
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
