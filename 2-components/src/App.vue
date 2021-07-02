<template>
  <div >
      <Greetings />
      <Component2 />
  </div>
</template>

<script>
import Greetings from './components/Greetings'
import Component2 from './components/Component2'

export default {
  name: 'App',
  components: {
    Greetings,
    Component2
  }
}
</script>

<style>

</style>
