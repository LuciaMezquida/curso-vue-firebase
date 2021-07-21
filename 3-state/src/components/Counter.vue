<template>
  <div>
    <p>El valor del contador es: {{this.$store.state.count}}</p>
    <button @click="increment">Sumar</button>
    <button @click="decrement">Restar</button>
  </div>
</template>

<script>

  export default {
    name: 'Counter',
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
}
  }
</script>

<style scoped>

</style>