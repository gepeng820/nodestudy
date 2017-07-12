<template>
    <div class="page">
      <!--动态的变量 用:-->
    <m-header title="首页"></m-header>
     <div class="content-scroll">
       <swiper></swiper>

     </div>
    </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue'
  import Swiper from '../components/Swiper.vue'
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {MHeader,Swiper},
        methods: {}
    }
</script>
<style scoped>

</style>
