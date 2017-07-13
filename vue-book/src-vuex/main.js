import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
Vue.use(Vuex);//使用vuex插件，帮我们解决跨组件传递数据
let state={
  //状态 ，将所有的状态统一放到state中
  color:'green'
};
//每一个规则都是一个函数，函数的第一个参数就是状态
let mutations={
  change(state,n){
    state.color=n
  },
  changeRed(state,m){
    state.color=m
  }
};
//计算状态的
let getters={
  computeColor(state){//根据状态计算新属性
    return state.color+'black'
  }
};
let store=new Vuex.Store({
  state,
  mutations,//管理状态的
  getters,
});
new Vue({

  ...App,
  store,//会在实例上生成一个属性 this.$store
}).$mount('#app');
