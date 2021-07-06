<template>
  <div >
    <Person name='Muka' age='16'/>
    <hr>
    <Person name='Sombra' age='8'/>
    <hr>
    <Person name='Mora' age='14'/>
  </div>
</template>

<script>
import Person from './components/Person';

export default {
  name: 'App',
  components: {
    Person
  }
}
</script>

<style>

</style>
