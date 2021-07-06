<template>
  <div >
    <Person name='Muka' age='16'/>
    <hr>
    <Person name='Sombra' age='8'/>
    <hr>
    <Person name='Mora' age='14'/>
    <hr>
    <h2>Usuarios:</h2>
    <Users 
      v-for="user in users"
      v-bind:key="user.id"
      :name="user.name"
      :email="user.email"
      :phone="user.phone"
    
    >
    </Users>
    <hr>
  </div>
</template>

<script>
import Person from './components/Person';
import Users from './components/Users';
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Person,
    Users
  },
  data(){
      return{
        users: []
      }
    },
    methods:{
      getUsers(){
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => (this.users = response.data));
      }
    },
    mounted() {
      this.getUsers()
    },
}
</script>

<style>

</style>
