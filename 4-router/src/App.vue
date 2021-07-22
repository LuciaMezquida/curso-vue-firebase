<template>
  <div id="app">
    <h1>Pasos para trabajar con rutas en VUE</h1>
    <router-link tag="li" active-class="active" exact to="/"><a>Inicio</a></router-link>
    <router-link tag="li" active-class="active" to="/blog"><a>Blog</a></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.active a{
  color: orange;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
