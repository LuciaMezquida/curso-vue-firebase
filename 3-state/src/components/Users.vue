<template>
  <div>
    <ul>
      <li v-bind:key="user.name" v-for="user in users">{{user.name}} tiene {{user.age}} años</li>
    </ul>
  </div>
</template>

<script>

  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'Users',
    computed: mapState(['users'])
  }
</script>

<style scoped>

</style>