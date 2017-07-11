import Vue from 'vue'
import Router from 'vue-router';//vue的第三方插件
import Hello from '@/components/Hello'

Vue.use(Router);//使用vue-router插件

export default new Router({//导出一个对象
  routes: [//路由的规则
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
