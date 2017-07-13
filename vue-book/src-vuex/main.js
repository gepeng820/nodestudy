import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
Vue.use(Vuex);//使用vuex插件，帮我们解决跨组件传递数据
let state={
  //状态 ，将所有的状态统一放到state中
  color:'green'
}
let store=new Vuex.Store({
  state
});
new Vue({

  ...App,
  store,//会在实例上生成一个属性 this.$store
}).$mount('#app');
