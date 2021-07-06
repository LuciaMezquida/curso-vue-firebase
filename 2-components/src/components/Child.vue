<template>
  <div>
    <p>Nombre del hijo: {{name}}</p>
    <p>Edad del hijo: {{age}}</p>
  </div>
</template>

<script>

  export default {
    name: 'Child',
    props: ['name', 'age']
  }
</script>

<style scoped>

</style>