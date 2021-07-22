<template>
  <div>
    <h2>Recepción del parámetro de la ruta</h2>
    <p>{{id}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data(){
      const {id} = this.$route.params
      return {
        id,
      }
    },
    watch: {
      '$route'(to){
        this.id = to.params.id
      }
    }
  }
</script>

<style scoped>

</style>