<template>
  <div>
    <hr>
    <ul>
      <li v-bind:key="user.name" v-for="user in users">{{user.name}} tiene {{user.age}} años</li>
    </ul>
    <ActiveUsers />
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import ActiveUsers from './ActiveUsers'

  export default {
    name: 'Users',
    components:{
      ActiveUsers
    },
    computed: mapState(['users'])
  }
</script>

<style scoped>

</style>