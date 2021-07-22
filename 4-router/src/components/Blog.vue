<template>
  <div>
      <h2>Blog</h2>
      <button @click="backToStart">Volver a Inicio</button>
  </div>
</template>

<script>
  export default {
    name: 'Blog',
    methods:{
      backToStart(){
        this.$router.push('/', ()=>{console.log('Has vuelto')})
      }
    }
  }
</script>

<style scoped>

</style>