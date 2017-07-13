<template>
    <div>
      <m-header title="收藏"></m-header>
      <div class="content-scroll">
        <ul>
          <li v-for="book in collect">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>
              <span @click=""><i class="iconfont icon-shouc01">取消收藏</i></span>
            </div>
          </li>
        </ul>

      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';
  import MHeader from '../components/MHeader.vue'
    export default {
        data(){
            return {}
        },
        computed: {
          ...mapState(['collect'])
        },
        components: {MHeader},
        methods: {}
    }
</script>
<style scoped>

</style>
