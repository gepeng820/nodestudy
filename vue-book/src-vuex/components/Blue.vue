<template>
    <div>
    蓝色 {{color}}
      <button @click="changeColor">变懒</button>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        data(){
            return {}
        },
        computed: {
          ...mapState(['color'])
        },
        components: {},
        methods: {
            changeColor(){
              this.$store.commit('change','blue')
            }
            //不允许组件直接更改状态
        }
    }
</script>
<style scoped>

</style>
