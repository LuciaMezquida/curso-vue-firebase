<template>
  <div>
    <p>El nombre es: {{name}}</p>
    <p>La edad que tiene es: {{age}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Person',
    props: ['name', 'age']
  }
</script>

<style lang="scss" scoped>

</style>