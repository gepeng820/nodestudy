<template>
    <div>
    红色{{color}}
      <button @click="changeColor">变红</button>
      {{computeColor}}
    </div>
</template>
<script>
  //辅助函数 简化写法
  import {mapState,mapMutations,mapGetters} from 'vuex';
  console.log(mapState(['color']));
  export default {
        data(){
            return {}
        },
      //计算属性 this.$store 虽然是属性 但是写法是函数
        computed: {
          ...mapState(['color']),
          ...mapGetters(['computeColor']),
           /* color(){
                return this.$store.state.color
            }*/
        },
        components: {},
        methods: {
          ...mapMutations(['changeRed']),
            changeColor(){
                this.changeRed('red')
            }
        }
    }
</script>
<style scoped>

</style>
