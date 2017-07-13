<template> <!--swiper与swiper-slide是全局组件 在main.js中use了 不需要注册 -->
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in data" :key="index"><img :src="slide" ></swiper-slide>
    <!--slot 会将对应的内容插到对应的部分-->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
        data:{
            type:Array
        }
    },
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          loop:true,//循环滚动
          pagination : '.swiper-pagination',
          paginationClickable :false,
          mousewheelControl : true,
          observeParents:true,
        },

      }
    }

    }

</script>

<style scoped>
img{
  width: 100%;
}
</style>
