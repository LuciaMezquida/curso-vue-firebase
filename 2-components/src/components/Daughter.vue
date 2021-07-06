<template>
  <div>
    <p>I'm a Daughter</p>
    <button @click="sendEvent">Cerrar hija</button>
  </div>
</template>

<script>
  export default {
    name: 'Daughter',
    methods: {
      sendEvent(){
        this.$emit('close')
      }
    },
  }
</script>

<style scoped>

</style>