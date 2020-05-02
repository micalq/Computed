<template>
  <div>
      <h2>Hello Vue</h2>
      <Add></Add>
      <p>--------------</p>
      <Sub></Sub>
  </div>
</template>

<script>
import Add from './components/Add'
import Sub from './components/Sub'
export default {
        data() {
          return {

          }
        },
        components:{
          Add,
          Sub
        }
}
</script>

<style>

</style>
