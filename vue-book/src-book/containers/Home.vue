<template>
    <div class="page">
      <!--动态的变量 用:-->
    <m-header title="首页"></m-header>
     <div class="content-scroll">
       <swiper :data="sliders"></swiper>
       <h3>热门图书</h3>
       <!--loading效果-->
       <div class="bookList" v-if="booklist.length">
         <div class="book" v-for="item in booklist">
           <img :src="item.bookCover">
           <span class="bookname">{{item.bookName}}</span>
           <span class="bookinfo">{{item.bookInfo}}</span>
         </div>

       </div>
       <loading v-else>正在加载</loading>
     </div>

    </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue'
  import Swiper from '../components/Swiper.vue'
  import Loading from '../components/Loading.vue'
  //会默认查找api下的index文件，不叫index 查找不到
  import {getSliders,getHotBook} from '../api/index'

    export default {
      //生命周期 beforeCreate created beforeMount mounted beforeMount mounted beforeUpdate updated beforeDestroy destroyed
        data(){
            return {
              sliders:[],
              booklist:[]
            }
        },
        created(){
          getSliders().then(response=>{
            this.sliders=response.data
          });
          getHotBook().then(response=>{
              this.booklist=response.data
          })
        },
        computed: {},
        components: {MHeader,Swiper,Loading},
        methods: {}
    }
</script>
<style scoped lang="less">
  h3{
    font-weight: normal;
    padding-left: 1%;
  }
  .bookList{
    width: 100%;
    padding: 10px 0px 0px 5px;


  .book{
    width: 30%;
    height: 30%;
    margin-left: 5px;
    display: inline-block;

    img{
      width: 100%;
      height:100%;
    }
    .bookname{
      display: block;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .bookinfo{
      color: #ccc;
      font-size: 12px;
    }
  }
}



</style>
