import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/* Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，
并以相应的规则保证状态以一种可预测的方式发生变化。 */
export default new Vuex.Store({
  state: {//由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：
    count:0
  },
  mutations: {//一条重要的原则就是要记住 mutation 必须是同步函数,更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    add(state){
      state.count++ //加一
    },
    add1(state,step){//定义参数
      state.count+=step//加n
    },
    sub(state){
      state.count--//减一
    },
    sub1(state,step){
        state.count-=step//减n
    }
  },
  actions: {//Action 提交的是 mutation，而不是直接变更状态。   Action 可以包含任意异步操作。 Action 通过 store.dispatch 方法触发：
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation
    addAsync(context){
        setTimeout(() => {
          context.commit("add")
        }, 1000);
      },
      addAsyncn(context,step){  //传参
        setTimeout(() => {
          context.commit("add1",step)
        }, 1000);
      },
      subAsync(context){
        setTimeout(() => {
          context.commit("sub")
        }, 1000);
      },
      subAsyncn(context){
        setTimeout(() => {
          context.commit("sub1",4)
        }, 1000);
      }
  },
  getters:{//就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
      showNum(state){
        return `当前最新数量是:${state.count}`
      }
  },
  modules: {
  }
})
