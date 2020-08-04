<template>
  <div id="content">

    <!-- 全国 -->
    <div class="allCountry">
      <div class="allCountryBox">
      <div style="width:100%;height:30px;line-height:30px"> &nbsp;&nbsp;&nbsp;<b style="color:#FC2E6A">|</b>&nbsp;&nbsp;&nbsp;全国</div>
      <div class="all-flex">
        <div v-for="(item,index) in allCountry" class="all-flex-box" :key="index" @mouseenter="item.show=true" @mouseleave="item.show=false">
          <el-image 
    style="width:100%;height:100%"
    :src="item.imgsrc" 
    :preview-src-list="item.srcList">
    </el-image>
    <div class="showname">
      氧气票务&nbsp;&nbsp;|&nbsp;&nbsp;{{item.showname}}
    </div>
    <div v-if="item.kindid==1" style="font-size:14px">
      <span  style="color:#ccc">演唱会&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
    <div v-else-if="item.kindid==2" style="font-size:14px">
      <span  style="color:#ccc">音乐节&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
    <div v-else-if="item.kindid==3" style="font-size:14px">
      <span  style="color:#ccc">音乐剧&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
    <div v-else-if="item.kindid==4" style="font-size:14px">
      <span  style="color:#ccc">舞台剧&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
    <div v-else style="font-size:14px">
      <span  style="color:#ccc">戏曲综艺&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
          <div v-show='item.show' class="all-flex-box-detail" @click="toDetail(item)">
            <h4 style="text-align:center;color:#fff">点击查看详情<i class="el-icon-d-arrow-right" style="font-size:1.2rem"></i></h4>
            <div> <i class="el-icon-location-information"></i>&nbsp;&nbsp;{{item.showarea}}</div>
            <div><i class="el-icon-date"></i>&nbsp;&nbsp;{{item.showtime}}</div>
          </div>
        </div>
      </div>
      </div>
    </div>


    <!-- 分类模块 -->

    <div class="kindBox" style="background-color:#FAFAFA;height:70vh">
      <div style="width:100%;height:60px;text-align:center;font-size:26px;line-height:60px">演唱会</div>
       <div class="allCountryBox" style="height:70%;background-color:#fafafa;">
      <div class="all-flex">
        <div v-for="(item,index) in songs" class="all-flex-box-kind" :key="index" @mouseenter="item.show=true" @mouseleave="item.show=false">
          <el-image 
    style="width:100%;height:100%"
    :src="item.imgsrc" 
    :preview-src-list="item.srcList">
    </el-image>
    <div class="showname">
      氧气票务&nbsp;&nbsp;|&nbsp;&nbsp;{{item.showname}}
    </div>
    <div style="font-size:14px">
      <span  style="color:#ccc">{{item.showarea}}</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
          <div v-show='item.show' class="all-flex-box-detail-kind" @click="toDetail(item)">
            <h5 style="text-align:center;color:#fff">点击查看详情<i class="el-icon-d-arrow-right" style="font-size:.8rem"></i></h5>
            <div> <i class="el-icon-location-information"></i>&nbsp;&nbsp;{{item.showarea}}</div>
            <div><i class="el-icon-date"></i>&nbsp;&nbsp;{{item.showtime}}</div>
          </div>
        </div>
      </div>
      </div>
      <div style="width:100%;height:3vh;line-height:3vh;text-align:center;margin-top:2vh;">
        <el-button class="gomore" round type="danger" @click="toSongs">查看更多</el-button>
      </div>
    </div>

    <!-- 音乐节 -->
     <div class="kindBox" style="background-color:#fff;height:70vh">
      <div style="width:100%;height:60px;text-align:center;font-size:26px;line-height:60px">音乐节</div>
       <div class="allCountryBox" style="height:70%;">
      <div class="all-flex">
        <div v-for="(item,index) in musicparty" class="all-flex-box-kind" :key="index" @mouseenter="item.show=true" @mouseleave="item.show=false">
          <el-image 
    style="width:100%;height:100%"
    :src="item.imgsrc" 
    :preview-src-list="item.srcList">
    </el-image>
    <div class="showname">
      氧气票务&nbsp;&nbsp;|&nbsp;&nbsp;{{item.showname}}
    </div>
    <div style="font-size:14px">
      <span  style="color:#ccc">{{item.showarea}}</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
          <div v-show='item.show' class="all-flex-box-detail-kind" @click="toDetail(item)">
           <h5 style="text-align:center;color:#fff">点击查看详情<i class="el-icon-d-arrow-right" style="font-size:.8rem"></i></h5>
            <div> <i class="el-icon-location-information"></i>&nbsp;&nbsp;{{item.showarea}}</div>
            <div><i class="el-icon-date"></i>&nbsp;&nbsp;{{item.showtime}}</div>
          </div>
        </div>
      </div>
      </div>
      <div style="width:100%;height:3vh;line-height:3vh;text-align:center;margin-top:2vh;">
        <el-button class="gomore" round type="danger" @click="toMusicparty">查看更多</el-button>
      </div>
    </div>

    <!-- 音乐剧 -->
     <div class="kindBox" style="background-color:#FAFAFA;height:70vh">
      <div style="width:100%;height:60px;text-align:center;font-size:26px;line-height:60px">音乐剧</div>
       <div class="allCountryBox" style="height:70%;background-color:#fafafa;">
      <div class="all-flex">
        <div v-for="(item,index) in drama" class="all-flex-box-kind" :key="index" @mouseenter="item.show=true" @mouseleave="item.show=false">
          <el-image 
    style="width:100%;height:100%"
    :src="item.imgsrc" 
    :preview-src-list="item.srcList">
    </el-image>
    <div class="showname">
      氧气票务&nbsp;&nbsp;|&nbsp;&nbsp;{{item.showname}}
    </div>
    <div style="font-size:14px">
      <span  style="color:#ccc">{{item.showarea}}</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
          <div v-show='item.show' class="all-flex-box-detail-kind" @click="toDetail(item)">
             <h5 style="text-align:center;color:#fff">点击查看详情<i class="el-icon-d-arrow-right" style="font-size:.8rem"></i></h5>
            <div> <i class="el-icon-location-information"></i>&nbsp;&nbsp;{{item.showarea}}</div>
            <div><i class="el-icon-date"></i>&nbsp;&nbsp;{{item.showtime}}</div>
          </div>
        </div>
      </div>
      </div>
      <div style="width:100%;height:3vh;line-height:3vh;text-align:center;margin-top:2vh;">
        <el-button class="gomore" round type="danger" @click="toDrama">查看更多</el-button>
      </div>
    </div>

    <!-- 舞台剧 -->
     <div class="kindBox" style="background-color:#fff;height:70vh">
      <div style="width:100%;height:60px;text-align:center;font-size:26px;line-height:60px">舞台剧</div>
       <div class="allCountryBox" style="height:70%;">
      <div class="all-flex">
        <div v-for="(item,index) in stage" class="all-flex-box-kind" :key="index" @mouseenter="item.show=true" @mouseleave="item.show=false">
          <el-image 
    style="width:100%;height:100%"
    :src="item.imgsrc" 
    :preview-src-list="item.srcList">
    </el-image>
    <div class="showname">
      氧气票务&nbsp;&nbsp;|&nbsp;&nbsp;{{item.showname}}
    </div>
    <div style="font-size:14px">
      <span  style="color:#ccc">{{item.showarea}}</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
          <div v-show='item.show' class="all-flex-box-detail-kind" @click="toDetail(item)">
             <h5 style="text-align:center;color:#fff">点击查看详情<i class="el-icon-d-arrow-right" style="font-size:.8rem"></i></h5>
            <div> <i class="el-icon-location-information"></i>&nbsp;&nbsp;{{item.showarea}}</div>
            <div><i class="el-icon-date"></i>&nbsp;&nbsp;{{item.showtime}}</div>
          </div>
        </div>
      </div>
      </div>
      <div style="width:100%;height:3vh;line-height:3vh;text-align:center;margin-top:2vh;">
        <el-button class="gomore" round type="danger" @click="toStage">查看更多</el-button>
      </div>
    </div>

    <!-- 戏曲综艺 -->
     <div class="kindBox" style="background-color:#FAFAFA;height:70vh">
      <div style="width:100%;height:60px;text-align:center;font-size:26px;line-height:60px">戏曲综艺</div>
       <div class="allCountryBox" style="height:70%;background-color:#fafafa;">
      <div class="all-flex">
        <div v-for="(item,index) in opera" class="all-flex-box-kind" :key="index" @mouseenter="item.show=true" @mouseleave="item.show=false">
          <el-image 
    style="width:100%;height:100%"
    :src="item.imgsrc" 
    :preview-src-list="item.srcList">
    </el-image>
    <div class="showname">
      氧气票务&nbsp;&nbsp;|&nbsp;&nbsp;{{item.showname}}
    </div>
    <div style="font-size:14px">
      <span  style="color:#ccc">{{item.showarea}}</span>
      <span style="float:right;font-size:16px;color:#fc2e6a">￥{{item.price}}</span> 
    </div>
          <div v-show='item.show' class="all-flex-box-detail-kind" @click="toDetail(item)">
             <h5 style="text-align:center;color:#fff">点击查看详情<i class="el-icon-d-arrow-right" style="font-size:.8rem"></i></h5>
            <div> <i class="el-icon-location-information"></i>&nbsp;&nbsp;{{item.showarea}}</div>
            <div><i class="el-icon-date"></i>&nbsp;&nbsp;{{item.showtime}}</div>
          </div>
        </div>
      </div>
      </div>
      <div style="width:100%;height:3vh;line-height:3vh;text-align:center;margin-top:2vh;">
        <el-button class="gomore" round type="danger" @click="toOpera">查看更多</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import db from "../../../utils/localstorage";
export default {
  name:'Content',
  props:{
  
  },
  data(){
    return{
     detailShow:false,
     allCountry:[],
     songs:[],
     opera:[],
     musicparty:[],
     drama:[],
     stage:[],
     detailId:0,
     kind:0
   
    }
  },
  mounted(){
    this.getStateList()
  },
  methods:{
  getStateList(){
    this.songs=db.get('songsList').splice(0,5)
    this.drama=db.get('dramaList').splice(0,5)
    this.stage=db.get('stageList').splice(0,5)
    this.musicparty=db.get('musicpartyList').splice(0,5)
    this.opera=db.get('operaList').splice(0,5)
    this.songs.forEach(i => {
              this.$set(i, 'srcList', [i.imgsrc])
            })
    this.drama.forEach(i => {
              this.$set(i, 'srcList', [i.imgsrc])
            })
    this.stage.forEach(i => {
              this.$set(i, 'srcList', [i.imgsrc])
            })
    this.musicparty.forEach(i => {
              this.$set(i, 'srcList', [i.imgsrc])
            })
     this.opera.forEach(i => {
              this.$set(i, 'srcList', [i.imgsrc])
            })
    this.allCountry=[this.stage[1],this.drama[3],this.drama[1],this.stage[4]]
    
  },
  toDetail(item){
    if(this.$store.state.userLogined===false){
      this.$message.error('您还未进行登录，请先进行登录!!!')
      return 
    }
    this.kind=item.kindid
    if(item.kindid==1){
      this.detailId=item.songsid     
    }else if(item.kindid==2){
      this.detailId=item.musicpartyid
    }else if(item.kindid==3){
      this.detailId=item.dramaid
    }else if(item.kindid==4){
      this.detailId=item.stageid
    }else{
       this.detailId=item.operaid
    }
    this.$router.push({
      path:'/detail',
      query:{
         kind:this.kind,
         detailId:this.detailId
      }
    })
  },
  toSongs(){
      if(this.$store.state.userLogined===false){
      this.$message.error('您还未进行登录，请先进行登录!!!')
      return 
    }
      this.$router.push({path:'/kind',query:{
        kindid:1
      }})
    },
    toMusicparty(){
        if(this.$store.state.userLogined===false){
      this.$message.error('您还未进行登录，请先进行登录!!!')
      return 
    }
      this.$router.push({path:'/kind',query:{
        kindid:2
      }})
    },
    toDrama(){
        if(this.$store.state.userLogined===false){
      this.$message.error('您还未进行登录，请先进行登录!!!')
      return 
    }
      this.$router.push({path:'/kind',query:{
        kindid:3
      }})
    },
    toStage(){
        if(this.$store.state.userLogined===false){
      this.$message.error('您还未进行登录，请先进行登录!!!')
      return 
    }
      this.$router.push({path:'/kind',query:{
        kindid:4
      }})
    },
     toOpera(){
         if(this.$store.state.userLogined===false){
      this.$message.error('您还未进行登录，请先进行登录!!!')
      return 
    }
      this.$router.push({path:'/kind',query:{
        kindid:5
      }})
    }
  }
 
}
</script>
<style>
.allCountry{
  width:100%;
  height:58vh;
}
.allCountryBox{
  width:63.5%;
  height: 100%;
  background-color: #fff;
  margin: 0 auto 0 19.5vw;
}
.all-flex{
  width: 100%;
  display: flex;
}
.all-flex-box{
  height: 41vh;
  margin: 10px 5px;
  flex: 1;
  position: relative;
  cursor: pointer;
}
.all-flex-box-kind{
  height:33vh;
  margin: 10px 5px;
  flex: 1;
  position: relative;
  cursor: pointer;
}
.all-flex-box-detail{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 9vh;
  background: #FC2E6A;
  font-size:16px;
  color:#fff;
}
.all-flex-box-detail-kind{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6vh;
  background: #FC2E6A;
  font-size:12px;
  color:#fff;
}
.all-flex-box-detail div{
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
}
.all-flex-box-detail-kind div{
  width: 100%;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
}
.showname{
  width:98%;
  height:6vh;
  padding:0 20px 0 0px;
}
.showname:hover{
  color:#FC2E6A;
}
.gomore{
  width: 10vw;
  height: 5vh;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  border-radius: 30%;
}
</style>