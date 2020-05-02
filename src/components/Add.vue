<template>
  <div>
    <h3>计数器count值为：{{$store.state.count}}</h3>
    <h3>{{$store.getters.showNum}}</h3>
   <button @click="handleAdd">+1</button>
   <button @click="handleAddn">+n</button>
   <button @click="handleAsync">+2async</button>
   <button @click="handleAsyncn">+nasync</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleAdd(){
      // this.$store.state.count++//不可以直接修改store数据
        this.$store.commit("add") //触发mutations
    },
    handleAddn(){
        this.$store.commit("add1",15)
    },
    handleAsync(){//触发action   Action 通过 store.dispatch 方法触发：
this.$store.dispatch("addAsync")
    },
    handleAsyncn(){
      this.$store.dispatch("addAsyncn",11)
    }
  },
}
</script>
