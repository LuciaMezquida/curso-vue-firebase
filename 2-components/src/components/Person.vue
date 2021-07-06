<template>
  <div>
    <p class="name">El nombre es: {{name}}</p>
    <p>La edad que tiene es: {{age}}</p>
    <Child v-bind:name="name" :age="age"></Child>
  </div>
</template>

<script>
  import Child from './Child';

  export default {
    name: 'Person',
    props: ['name', 'age'],
    components: {
      Child
    }
  }
</script>

<style scoped>
  .name{
    font-size: 2rem;
  }
</style>