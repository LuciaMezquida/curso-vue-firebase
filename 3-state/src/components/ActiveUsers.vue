<template>
  <div>
    <p>Los gatos en activo son: {{numberOfActives}}</p>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'
  export default {
    name: 'ActiveUsers',
    computed: mapGetters(['numberOfActives'])
  }
</script>

<style scoped>

</style>