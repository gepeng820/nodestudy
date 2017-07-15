<template>
    <div class="list page">
      <m-header title="收藏"></m-header>
      <div class="content-scroll scroll">
        <ul>
          <li v-for="book in collect">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>
              <span @click="remove(book)"><i class="iconfont icon-shouc01">取消收藏</i></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';
  import MHeader from '../components/MHeader.vue'
  import {mapMutations} from 'vuex';
  import * as types from '../vuex/mutation-types';
    export default {
        data(){
            return {}
        },
        computed: {
          ...mapState(['collect'])
        },
        components: {MHeader},
        methods: {
          ...mapMutations([types.REMOVE_COLLECT]),
          remove(book){
              this[types.REMOVE_COLLECT](book);

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
  p{
    color: #ccc;
  }
  span{
    display: block;
    bottom:20px;

  .iconfont{

    font-size: 14px;
  }
  }

  }
  img{
    height: 150px;
    width: 108px;
  }
  }
}
</style>
