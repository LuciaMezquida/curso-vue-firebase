<template>
  <div>
    <button @click="show = true">Mostrar componente hija</button>
    <Daughter @close="show = false" v-show="show"></Daughter>
  </div>
</template>

<script>
  import Daughter from './Daughter'
  export default {
    name: 'Mother',
    components: {
      Daughter
    },
    data() {
      return {
        show: false
      }
    },
  }
</script>

<style scoped>

</style>