<template>
  <div>
    <h3>计数器count值为：{{count}}</h3>
    <h3>{{showNum}}</h3>
<button @click="handleSub">-</button>
<button @click="sub1(5)">-n</button>
<button @click="subAsync">-1async</button>
<button @click="subAsyncn">-nasync</button>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { mapMutations,mapActions,Getter } from "vuex";
export default {
          computed: {
            ...mapState(["count"]),
            ...mapGetters(["showNum"]),
          },
          methods: {
            ...mapMutations(["sub","sub1"]),
            ...mapActions(["subAsync","subAsyncn"]),
            handleSub(){
                this.sub() //映射
            },
            /* handleSubn(){
              this.sub1(5)
            } */
          },
}
</script>
