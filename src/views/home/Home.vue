<template>
  <div id="home">
    <!-- 回到顶部 -->
    <el-backtop :visibility-height='20' :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #FC2E6A;
      }"
    >
      UP
    </div>
  </el-backtop>
    <el-container>
      <el-header style="height:100px">
        <head-content/>
      </el-header>
      <!-- 轮播图 -->
   <slider></slider>
   <!-- 内容 -->
   <home-content  />
<el-footer style="height:345px;padding:0">
  <img src="static/home/footer.png" alt="" style="width:100%">
</el-footer>
   </el-container>
   
  </div>
</template>

<script>
import db from '../../utils/localstorage'
import Slider from './slider/Slider'
import HeadContent from './header/Header'
import HomeContent from './content/Content'
export default {
  name: 'Home',
  components:{
    "slider":Slider,
     "head-content":HeadContent,
     "home-content":HomeContent
  },
  data(){
    return{
     
    }
  },
  mounted(){
    this.getSonsList()
    this.getDramaList()
    this.getMusicpartyList()
    this.getStageList()
    this.getOperaList()
  },
  methods:{
    getSonsList(){
      const payload={kindid:'1'}
      this.$store.dispatch('store_songsList',payload).then(
        res=>{
           res.forEach(i => {
              this.$set(i, 'show', false)
            })
        this.$store.state.songsList=res
        db.save('songsList',res)
        }
      )
    },
     getMusicpartyList(){
      const payload={kindid:'2'}
      this.$store.dispatch('store_musicpartyList',payload).then(
        res=>{
           res.forEach(i => {
              this.$set(i, 'show', false)
            })
        this.$store.state.musicpartyList=res
        db.save('musicpartyList',res)
        }
      )
    },
    getDramaList(){
      const payload={kindid:'3'}
      this.$store.dispatch('store_dramaList',payload).then(
        res=>{
           res.forEach(i => {
              this.$set(i, 'show', false)
            })
        this.$store.state.dramaList=res
        db.save('dramaList',res)
        }
      )
    },
    getStageList(){
      const payload={kindid:'4'}
      this.$store.dispatch('store_stageList',payload).then(
        res=>{
           res.forEach(i => {
              this.$set(i, 'show', false)
            })
        this.$store.state.stageList=res
        db.save('stageList',res)
        }
      )
    },
    getOperaList(){
      const payload={kindid:'5'}
      this.$store.dispatch('store_operaList',payload).then(
        res=>{
           res.forEach(i => {
              this.$set(i, 'show', false)
            })
        this.$store.state.operaList=res
        db.save('operaList',res)
        }
      )
    },
  }
}
</script>

<style>

</style>
