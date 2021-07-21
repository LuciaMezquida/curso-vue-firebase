<template>
  <div>
    <p>El valor es: {{this.$store.state.count}}</p>
  </div>
</template>

<script>

  import {store} from '../store/store'

  export default {
    name: 'ReadStore',
    store
  }
</script>

<style scoped>

</style>