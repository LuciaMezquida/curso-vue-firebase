<template>
  <div>
    <p>El valor del contador es: {{count}}</p>
    <button @click="increment">Sumar</button>
    <button @click="decrement">Restar</button>
  </div>
</template>

<script>

  import {mapState} from 'vuex';

  export default {
    name: 'Counter',
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    },
    computed: mapState(['count'])
  }
</script>

<style scoped>

</style>