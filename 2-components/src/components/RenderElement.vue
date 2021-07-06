<template>
  <div>
    <h1 v-if="tipo === h1">
      <slot></slot>
    </h1>
    <h2 v-if="tipo === h2">
      <slot></slot>
    </h2>
    <h3 v-if="tipo === h3">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'RenderElement',
    props: ['tipo'],
    render(createElement){
      return createElement(
        this.tipo, //qué tipo de elemento va a renderizar
        this.$slots.default //contenido del elemento a renderizar
      )
    }
  }
</script>

<style scoped>

</style>