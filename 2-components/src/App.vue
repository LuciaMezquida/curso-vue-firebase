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
    <SlotComponent>Muka 
      <template v-slot:slot2>
        Muka es la dueña de la casa
      </template>
    </SlotComponent>
    <hr>
    <Mother></Mother>
  </div>
</template>

<script>
import axios from 'axios'
import Mother from './components/Mother'
import Person from './components/Person';
import SlotComponent from './components/SlotComponent';
import Users from './components/Users';

export default {
  name: 'App',
  components: {
    Person,
    Users,
    SlotComponent,
    Mother
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
