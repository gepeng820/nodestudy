import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home.vue'
import List from '../containers/List.vue'
import Collect from '../containers/Collect.vue'
import Add from '../containers/Add.vue'


Vue.use(Router)
// 路由的类型 hashRouter browserRouter
// 不刷新页面 spa 单页应用
// 监听hash值变化 onhashchange
// 浏览器自带通过h5的api实现，需要服务端支持，否则页面刷新就会报错，因为路径并不真实存在
// 一般开发时候用 hash 上线时  浏览器自带的
export default new Router({
  //mode:'history',
  routes: [

    {
      path:'/home',
      component:Home   //component是单数
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'/add',
      component:Add
    },
    {
      path:'*',//当以上路径都不匹配  跳转到首页
      redirect:'/home'
    }
  ],
  //更改默认的名字
  "linkActiveClass":'active'
})
