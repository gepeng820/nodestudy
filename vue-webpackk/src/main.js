// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';//App就是根组件
import router from './router';//index.js的文件可以省略

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,//App组件中自带render函数 直接解构即可
  render:h=>h(App) //render方法可以将对象 渲染成真实dom
  // template: '<App/>',
  // components: { App }
})
