
import Vue from 'vue';//引入Vue
import App from './App';//根组件
import router from './router';//路由 不同的路径匹配出不同的内容

//引入公用样式，很多页面都用的
import './assets/css/index.less'
//引用轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);//VueAwesomeSwiper 会提供两个组件


import VueScroller from 'vue-scroller';
Vue.use(VueScroller);//会注册全局组件 scroller

import VueLazyLoad from 'vue-lazyload';
import loading from './assets/img/loading.gif';
Vue.use(VueLazyLoad, {
  loading: loading//加载时显示的loading图，提供了一个

})

import store from './vuex/index';
new Vue({
  el: '#app',
  router,
  ...App,
  store

})
