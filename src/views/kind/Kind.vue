<template>
  <div id="kind">
    <el-card>
      <head-bar />
    </el-card>
   <div class="kindsBox">
     <div class="city">
       <span> 城市：</span>
       <span @click='changeCity(city)' v-for="(city,index) in citys" :key='index' :style="city.value===true?'background-color:#fc2e6a;color:#fff':''">{{city.name}}</span>
      </div>
<br />
       <div class="kinds">
       <span> 类型：</span>
       <span @click="changeKind(kind)" v-for="(kind,index) in kinds" :key='index' :style="kind.value===true?'background-color:#fc2e6a;color:#fff':''">{{kind.name}}</span>
      </div>

       <div class="times">
       <span> 时间：</span>
       <span @click="changeTime(time)" v-for="(time,index) in times" :key='index' :style="time.value===true?'background-color:#fc2e6a;color:#fff':''">{{time.name}}</span>
      </div>
   </div>

   <div class="kindsListBox">
     <div v-if="kindList.length!==0">
     <div class="list-item" v-for="(item,index) in kindList" :key="index">
       <div class="item-img">
         <img :src="item.imgsrc" alt="">
       </div>
       <div class="item-info">
      <div class="item-name" style="font-size:1.2rem;">{{item.showname}}</div>
      <ul>
        <li>时间：{{item.showtime}}</li>
        <li>场馆：{{item.showarea}}</li>
        <li>票价：<span style="color:#fc2e6a">￥{{item.price}}</span></li>
      </ul>
   </div>
   <div class="button">
     <button @click="toDetail(item)">购票</button>
   </div>
     </div>
     </div>
     <div v-else style="width:100%;height:50px;line-height:50px;text-align:center;margin-top:30px;">
       抱歉！暂未匹配到您所需要的信息！
     </div>
   </div>
   <el-row>
     <el-col>
<img src="static/home/footer.png" style="width:100%" />
     </el-col>
     
   </el-row>
  </div>
</template>
<script>
import db from '../../utils/localstorage'
import HeadBar from '../home/header/Header'
export default {
  name:'Kind',
  components:{
    'head-bar':HeadBar
  },
  data(){
    return{
  kindList:[],
  allList:[],
  cityss:'全部',
  timess:'全部',
  kindss:'全部',
  id:0,
  citys:[
    {
    name:'全部',
    value:true
    },
    {
    name:'深圳',
    value:false
    },
    {
    name:'广州',
    value:false
    },
    {
    name:'北京',
    value:false
    },
    {
    name:'上海',
    value:false
    },
    {
    name:'成都',
    value:false
    },
    {
    name:'重庆',
    value:false
    },
    {
    name:'武汉',
    value:false
    },
    {
    name:'杭州',
    value:false
    },
    {
    name:'南京',
    value:false
    },
    {
    name:'长沙',
    value:false},
    {
      name:'昆明',
    value:false
    }
    ],
  kinds:[
    {
      name:'全部',
    value:true
    },
    {
    name:'演唱会',
    value:false
    },
    {
    name:'音乐节',
    value:false
    },
    {
    name:'音乐剧',
    value:false
    },
    {
    name:'舞台剧',
    value:false
    },
    {
    name:'戏曲综艺',
    value:false
    }
],
  times:[
    {
    name:'全部',
    value:true
    },
    {
    name:'三个月内',
    value:false
    },
    {
    name:'一个月内',
    value:false
    },
    {
    name:'一周内',
    value:false
    }]
    }
  },
  mounted(){
   this.getKindList()

  },
  methods:{
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
    getKindList(){   
      let list1=db.get('songsList').concat(db.get('musicpartyList'))
      let list2=db.get('dramaList').concat(db.get('operaList'))
      let list3=list1.concat(list2)
      this.allList=list3.concat(db.get('operaList'))
    this.id = this.$route.query.kindid
        this.kinds.forEach(
         item=> item.value=false
       )
    if(this.id==1){
       this.kindList=db.get('songsList')
       this.kinds[1].value=true

    }else if(this.id==2){
      this.kindList=db.get('musicpartyList')
       this.kinds[2].value=true
    }else if(this.id==3){
      this.kindList=db.get('dramaList')
       this.kinds[3].value=true
    }else if(this.id==4){
      this.citys[4].value=true
       this.kinds[4].value=true
    }else if(this.id==5){
      this.kindList=db.get('operaList')
       this.kinds[5].value=true
    }
    },
    changeCity(city){
      this.citys.forEach(
        item =>{
          item.value=false
        }
      )
      city.value=true
      this.cityss=city.name
      this.change()
    },
   changeKind(kind){
      this.kinds.forEach(
        item =>{
          item.value=false
        }
      )
      kind.value=true
      this.kindss=kind.name  
      this.change() 
  },
   changeTime(time){
      this.times.forEach(
        item =>{
          item.value=false
        }
      )
      time.value=true
      this.timess=time.name
      this.change()
    },
    change(){    
      if(this.timess=='全部'&&this.cityss=='全部'&&this.kindss=='全部'){
       this.kindList=this.allList
      }else{   
      this.kindList=[]
      this.allList.forEach(
      item=>{
        if(this.kindss=='演唱会'){    
        if(item.showarea.indexOf(this.cityss)!=-1){
        this.kindList.push(item)
       }
      }
    if(this.kindss=='音乐节'){       
       if(item.showarea.indexOf(this.cityss)!=-1){
        this.kindList.push(item)    
     }
      }
   if(this.kindss=='音乐剧'){    
       if(item.showarea.indexOf(this.cityss)!=-1){
        this.kindList.push(item)
       }
      }       
  if(this.kindss=='戏曲综艺'){ 
       if(item.showarea.indexOf(this.cityss)!=-1){
        this.kindList.push(item)
     }
      }
    if(this.kindss=='舞台剧'){
       if(item.showarea.indexOf(this.cityss)!=-1){
        this.kindList.push(item)
     }
      }
       }
    ) }

     if(this.timess=='全部'&&this.cityss=='全部'&&this.kindss=='演唱会'){
       this.kindList=db.get('songsList')
       console.log(this.kindss) 
      console.log(db.get('songsList'))
      console.log(this.kindList)
      }
       if(this.timess=='全部'&&this.cityss=='全部'&&this.kindss=='音乐节'){
       this.kindList=db.get('musicpartyList')
      }
       if(this.timess=='全部'&&this.cityss=='全部'&&this.kindss=='音乐剧'){
       this.kindList=db.get('dramaList')
      }
       if(this.timess=='全部'&&this.cityss=='全部'&&this.kindss=='戏曲综艺'){
       this.kindList=db.get('operaList')
      }
       if(this.timess=='全部'&&this.cityss=='全部'&&this.kindss=='舞台剧'){
       this.kindList=db.get('stageList')
      }
    }
  
   }
}
</script>
<style>
.list-item{
  width: 100%;
  display: flex;
 margin-top:10px;
 border-bottom:1px solid #ccc;
}
.list-item div{
padding: 10px;
}
.item-img{
  width:10vw;
  height: 25vh;
  margin-left:15px;

}
.item-img img{
  width: 100%;
  height: 100%;
}
.item-info{
  width: 30vw;
  height:25vh;
}
.item-info ul li{
  list-style: none;
  font-size: 16px;
  line-height: 25px;
  height: 25px;
  padding-left:10px;
  margin-top:10px;
}
.button{
  width:10vw;
  line-height:25vh;
}
.button button{
  width: 10vw;
  height: 4vh;
  border: 0;
  background-color: #fc2e6a;
  color:#fff;
  font-size:16px;
  text-align: center;
  border-radius:2px;
  cursor: pointer;
}
.kindsListBox{
  background-color: #fff;
  width: 60vw;
  min-height: 20vh;
  margin: 30px auto;
}
.kindsBox{
  width: 60vw;
  height: 20vh;
  background-color: #fff;
  margin: 5vh auto;
  cursor:pointer;
  padding-top:10px;
}
#kind{
  background-color: #fafafa;
}
.city{
margin-top:20px;
}
.city span{
  margin-left:10px;
  width:60px;
  height:30px;
  line-height:30px;
  text-align: center;
  display: block;
  float: left;
  font-size: 14px;

}
.kinds{
  margin: 30px auto auto 0px;
}
.kinds span{
  margin-left:10px;
  width:60px;
  height:30px;
  line-height:30px;
  text-align: center;
  display: block;
  float: left;
  font-size: 14px;

}
.times{
  margin: 80px auto auto 0px;
}
.times span{
  margin-left:10px;
  width:60px;
  height:30px;
  line-height:30px;
  text-align: center;
  display: block;
  float: left;
  font-size: 14px;

}
</style>