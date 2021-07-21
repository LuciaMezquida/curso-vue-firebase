<template>
  <div>
    <hr>
    <ul>
      <li v-bind:key="user.name" v-for="user in users">{{user.name}} tiene {{user.age}} años</li>
    </ul>
    <ActiveUsers />
    <hr>
    <h3>Trabajadores</h3>
    <ul>
      <li v-bind:key="worker.name" v-for="worker in workers">{{worker.name}}</li>
    </ul>
  </div>
</template>

<script>

  import {mapState, mapActions} from 'vuex';
  import ActiveUsers from './ActiveUsers'

  export default {
    name: 'Users',
    components:{
      ActiveUsers
    },
    computed: {
      ...mapState(['users', 'workers'])
    },
    methods: {
      ...mapActions(['printWorkers'])
    },
    mounted() {
      this.printWorkers()
    },
  }
</script>

<style scoped>

</style>