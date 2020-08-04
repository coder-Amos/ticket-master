<template>
  <div id="detail">
  <el-row>
    <el-col :span="24" style="background-color:#ccc">
    <img src="static/detailheader.png" alt="" style="width:100%;height:40vh" />
    </el-col>
  </el-row>
  <el-row style="position:absolute;left:20vw;top:5vh;"> 
    <el-col :span="24">
      <el-card class="box-card">
        <div style="width:100%;height:30px;border-bottom:1px solid #ccc;padding-bottom:10px" class="backHome">
          <div style="cursor:pointer;width:7%" @click="backHome"><i class="el-icon-arrow-left" style="font-size:1.2rem"></i><span style="margin-left:4px;font-size:1.2rem">返回</span></div>
        </div>
      <div style="margin-top:15px;border-right:1px solid #ccc" >
        <div class="imgdetail">
      <img :src='detail.imgsrc' style="float:left" />
      <div style="width:15vw;font-size:1.5rem;float:left;padding-left:20px">{{detail.showname}}</div>
      <div style="position:absolute;left:17vw;top:41vh;font-size:1.2rem">￥{{detail.price}}</div>
      </div>
      </div>
      <div style="float:left;width:25vw;height:35vh;border-left:1px solid #ccc;margin: -410px 0 20px 32vw;">
        <div style="font-size:1.5rem;margin-left:20px"><i class="el-icon-date" style="color:#FC2E6A;"></i>&nbsp;&nbsp;&nbsp;{{detail.showtime}}  </div>
        <div style="font-size:1.5rem;margin-left:20px;margin-top:10px"><i class="el-icon-location" style="font-size:1.7rem;color:#FC2E6A;"></i>&nbsp;&nbsp; {{detail.showarea}} </div>
      </div>
      <button @click="takedialogVisible=true" style="position:absolute;top:30vh;left:35vw;width:12vw;height:4vh;border:0;background-color:#fc2e6a;color:#fff;border-radius:6px;cursor:pointer">购买本场门票</button>
      </el-card>
    </el-col>
  </el-row>

  <!-- 购买确认框 -->
  <el-dialog
  title="确认购买"
  :visible.sync="takedialogVisible"
  width="20%"
  >
  <div v-show="tore">
   <div style="font-size:1rem">演出时间：
     <el-select v-model="time" placeholder="请选择">
     <el-option
      v-for="item in times"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
     </div>
        <div style="margin-top:15px;font-size:1rem">演出地点：
    <el-select v-model="area" placeholder="请选择">
     <el-option
      v-for="item in areas"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
     </div>   
     <div style="margin-top:15px;font-size:1rem" >门票价格： ￥{{detail.price}}
     </div>
  <button  style="margin:35px auto 10px 3vw; cursor:pointer;width:12vw;background-color:#fc2e6a;color:#fff;height:5vh;border:0;border-radius:6px;font-size:1rem" @click="toTake">确 定 购 买</button>
<div style="width:100%;font-size:12px;margin-top:10px;text-align:center">温馨提示：为了防止恶意囤票的行为发生，本场演出每个用户限购一张！</div>
</div>
<div v-show="toing" style="text-align:center">
  <i class="el-icon-loading" style="font-size:3rem;color:#fc2e6a;" ></i>
  <div style="margin-top:20px">支付中...</div>
  
</div>
</el-dialog>

  <el-row style="position:absolute;left:20vw;top:55vh;height:40vh">
    <el-col :span='24'>
      <el-card class="detail-card">
<div style="width:50%;">
  <div style="font-size:1.5rem;width:100%;padding-left:20px">演出介绍</div>
  <div style="font-size:1rem;width:100%;padding-left:20px;margin-top:15px;line-height:2rem;">
    &nbsp; &nbsp; &nbsp; &nbsp;{{detail.introduce}}
  </div>
</div>
<div style="border-left:1px solid #ccc;float:right;width:45%;height:35vh;font-size:.8rem;position:absolute;left:33vw;top:2vh;">
  <div style="margin-left:15px;width:24vw;padding-bottom:10px;border-bottom:1px solid #ccc;padding-left:20px">
    <span style="font-size:1rem;color:#ccc">优 &nbsp;惠:</span>&nbsp;&nbsp;
    <span style="color:#fc2e6a;">折扣</span>
    &nbsp;&nbsp;&nbsp;&nbsp;氧气一夏，指定票价九折
    </div>
  <div style="margin:15px auto auto 20px;width:24vw;padding-bottom:10px;border-bottom:1px solid #ccc;padding-left:20px">
    <span style="font-size:1rem;color:#ccc"> VIP+:</span>&nbsp;&nbsp;
    <span >VIP+专享</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="color:#fc2e6a;">国内免邮，双倍积分</span>
    </div>
    <div style="margin:15px auto auto 20px;width:24vw;padding-bottom:10px;border-bottom:1px solid #ccc;padding-left:20px">
    <span style="font-size:1rem;color:#ccc"> 入场:</span>
    &nbsp;&nbsp;&nbsp;&nbsp;
1.2米以上儿童凭票入场，1.2米以下儿童谢绝入场
  </div>

  <div style="margin-left:20px;margin-top:5px">
    <img src="static/tip.PNG" alt="">
  </div>
</div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import db from '../../utils/localstorage'
export default {
  name:'Detail',
  data(){
    return{
     detailId:0,
     kinds:0,
     detail:{},
     takedialogVisible:false,
     tore:true,
     toing:false,
     areas:[
       {
         lable:'昆明',
         value:'昆明'
       }
     ],
     area:'',
     times:[
       {
         lable:'2020-05-06',
         value:'2020-05-06'
       }
     ],
     time:'',
     user:{}
    }
  },
  mounted(){ 
    this.kinds=this.$route.query.kind
    this.detailId=this.$route.query.detailId
    this.getDeatil()
    this.user=db.get('user')
  },
  methods:{
  toTake(){
   this.tore=false
   this.toing=true
   let date=new Date()
   let nowtime=`${date.getFullYear()} 年 ${date.getMonth()+1} 月 ${date.getDate()} 日 ${date.getHours()}:${date.getMinutes()}`
   const payload={
   ticketname:this.detail.showname,
   ticketuser:this.user.username,
   tickettime:this.time,
   ticketarea:this.area,
   ticketprice:this.detail.price,
   taketime:nowtime,
   ticketimgsrc:this.detail.imgsrc
  }
  console.log(nowtime)
  this.$store.dispatch('store_saveTicket',payload).then(
    res=>{
      if(res=='添加成功'){
    setTimeout(() => {
    this.takedialogVisible=false
     this.tore=true
    this.toing=false
    this.$notify({
          title: '购票成功提醒',
          message: '您已购票成功，您可在购票记录中查看已购买的票务信息',
          duration: 0
        });
   }, 3000)
      }else{
        this.takedialogVisible=false
        this.tore=true
        this.toing=false
       this.$message.error('购票失败，请稍后重试！你支付的金额会退回至您绑定的支付宝账号上')
      }
    }
  )
   
   
    },
    backHome(){
      this.$router.back()
    },
    getDeatil(){
      const songsDetail=db.get('songsList')
      const musicpartyDetail=db.get('musicpartyList')
      const dramaDetail=db.get('dramaList')
      const stageDetail=db.get('stageList')
      const operaDetail=db.get('operaList')
      for(const song of songsDetail){
       if(song.kindid===this.kinds && song.songsid===this.detailId){
         this.detail=song
        //  console.log(this.detail)
       }
      }
      for(const music of musicpartyDetail){
       if(music.kindid===this.kinds && music.musicpartyid===this.detailId){
         this.detail=music
          // console.log(this.detail)
       }
      }
      for(const drama of dramaDetail){
       if(drama.kindid===this.kinds && drama.dramaid===this.detailId){
         this.detail=drama
          // console.log(this.detail)
       }
      }
      for(const stage of stageDetail){
       if(stage.kindid===this.kinds && stage.stageid===this.detailId){
         this.detail=stage
          // console.log(this.detail)
       }
      }
      for(const opera of operaDetail){
       if(opera.kindid===this.kinds && opera.operaid===this.detailId){
         this.detail=opera
          // console.log(this.detail)
       }
      }
      this.areas[0].lable=this.detail.showarea
      this.areas[0].value=this.detail.showarea
      this.times[0].lable=this.detail.showtime
      this.times[0].value=this.detail.showtime
    }
  }
}
</script>
<style>
#detail{
  background-color: #fff;
}
.box-card{
  width: 60vw;

}
.box-card:active{
  border: 0;
}
.backHome>div:hover{
  color:#FC2E6A;
}
.imgdetail img{
width:15vw;
height:37vh;
}
.detail-card{
  width: 60vw;
  height:40vh;
}
</style>