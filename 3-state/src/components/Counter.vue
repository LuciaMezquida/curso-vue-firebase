<template>
  <div>
    <p>El valor del contador es: {{this.$store.state.count}}</p>
    <button @click="increment">Sumar</button>
    <button @click="decrement">Restar</button>
  </div>
</template>

<script>

  import {store} from '../store/store'

  export default {
    name: 'Counter',
    store,
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