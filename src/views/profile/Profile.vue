<template>
  <div id="profile">
    <el-card>
      <head-bar />
    </el-card>
<el-row style="background-color:#fafafa;">
  <el-col :span="4">
<div class="aside">
  <div style="width:92%;height:4vh;line-height:4vh;background-color: #fc2e6a;color:#fff;padding-left:15px;font-size:1rem;">
     <i class="el-icon-tickets"></i> 我 的 信 息
  </div>
<el-menu :default-active="active" class="el-menu-vertical-demo" :collapse="false" style="width:10vw;border:0;background-color: #fafafa;">
  <el-submenu index="1">
      <span slot="title">基本信息管理</span>
      <el-menu-item-group>
      <el-menu-item index="1-1" @click="toBaseInfo"><i class="el-icon-view"></i>信息管理</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
 <el-submenu index="2">
      <span slot="title">票务管理</span>
      <el-menu-item-group>
      <el-menu-item index="2-1" @click="toTicketHistory"><i class="el-icon-document"></i>购票记录</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="3">
      <span slot="title">地址管理</span>
      <el-menu-item-group>
      <el-menu-item index="3-1"><i class="el-icon-truck"></i>我的地址</el-menu-item>
      <el-menu-item index="3-2"> <i class="el-icon-coordinate"></i>添加地址</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
   <el-submenu index="4">
      <span slot="title">会员权益</span>
      <el-menu-item-group>
      <el-menu-item index="3-1"><i class="el-icon-truck"></i>我的会员</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
</div>
  </el-col>
</el-row>
<div style="background-color:#fff;width:88vw;height:82vh;position:absolute;top:15vh;left:10vw;overflow-y:auto;padding:0 15px;">
<router-view></router-view>
</div>
  </div>
</template>
<script>
import HeadBar from '../home/header/Header'
export default {
  name:'Profile',
  components:{
    'head-bar':HeadBar
  },
  data(){
    return{
  active:''
    }
  },
  mounted(){
    this.active=this.$route.query.active
  },
  methods:{
toBaseInfo(){
  this.$router.push('/profile/baseInfo')
},
toTicketHistory(){
  this.$router.push('/profile/ticketHistory')
  this.active='2-1'
}
  }
}
</script>
<style>
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 190px;
}
.el-menu-item.is-active {
    color: #fc2e6a;
}
.aside{
  width: 10vw;
  height:83vh;
  margin-top:1vh;
  background-color: #fafafa;
}
#profile{
  background-color: #fafafa;
}
</style>