<template>
  <div id="app">
    <transition name="translate">
    <router-view class="pos"></router-view>
    </transition>
    <tab></tab>
  </div>
</template>

<script>
  //引入导航组件
import Tab from './components/Tab.vue';

export default {
    components:{//注册组件 components用负数
        Tab
    }

}
</script>

<style scoped>
  /*进入之前位置*/
  .translate-enter{
    transform: translate(100%);
  }
/*进入之前的位置*/
  .translate-enter-active{
    transition: all .3s linear;
  }
  /*离开状态*/
  .translate-leave-active{
    transform: translate(-100%);
    transition: all .3s linear;

  }
  .pos{
    position: absolute;
    width: 100%;
    left:0;
    top:0;
  }
</style>
