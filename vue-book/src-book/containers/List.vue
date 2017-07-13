<template>
    <div class="list page">
      <m-header title="列表"></m-header>
      <scroller
        class="scroll"
        :on-refresh="getData"
        :on-infinite="getListByPage"
        ref="scroll"
      >
      <ul>
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.bookInfo}}</p>
          </div>
        </li>
      </ul>
      </scroller>
    </div>
</template>
<script>
  //组件使用的三部曲，引用注册标签形式使用
  import MHeader from '../components/MHeader.vue';
  import {getBookList} from '../api';
    export default {
        data(){
            return {books:[]}
        },
      /*created(){
          this.getData();
      },*/
        computed: {},
        components: {MHeader},
        methods: {
          getListByPage(){
              //把以前的和新获取的显示到页面上
            getBookList().then(response=>{
                this.books=[...this.books,...response.data];
                //获取数据后要告诉下一次是否还有更多
                this.$refs.scroll.finishInfinite(false);
                //必须第一步满足 有一屏，如果没有看是否有更多数据 有的话会继续加载，没有就停止了
            })
          },
          getData(){
            getBookList().then(response=>{
              this.books=response.data;
              setTimeout(()=>{
                this.$refs.scroll.finishPullToRefresh();
              },500)
            })
          }
        }
    }
</script>
<style scoped lang="less">
.list{
  .scroll{
    top: 40px;
    bottom: 50px;
    height: auto;
  }
  li{
    display: flex;
    height: 160px;
    border-bottom: 1px solid #ccc;
    align-items: center;
    justify-content: center;

    div{
      height:150px;
      margin-left: 10px;
      margin-top: 20px;
    }
    img{
      height: 150px;
      width: 108px;
    }
  }
}
</style>
