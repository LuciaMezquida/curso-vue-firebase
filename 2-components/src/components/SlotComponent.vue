<template>
  <div>
    <h1 style="color: red">
      <slot>Muka tiene mala leche</slot>
    </h1>
    <h2>
      <slot name="slot2">
        Muka quiere mandar
      </slot>
    </h2>
  </div>
</template>

<script>
  export default {
    name:'SlotComponent'
  }
</script>

<style scoped>

</style>