<template>
  <div id="ticketHistory">
  <div style="border-bottom:1px solid #000;height:4vh;font-size:1rem;padding-top:10px"> <i class="el-icon-copy-document"></i> 购票记录 </div>

  <el-row>
    <el-col :span="24">
      <table class="tickettable" v-for="(item,index) in historyList" :key="index">
        <tr style="height:4vh;">
          <td style="width:15vw;font-weight:bold">下单时间：{{item.taketime}}</td>
          <td style="width:30vw;">订单号:{{item.ticketid}}</td>
          <td style="width:10vw;"></td>
          <td style="text-align:right;padding-right:20px;width:20vw;"></td>
          <td style="text-align:right;padding-right:20px;width:10vw;cursor:pointer">删除</td>
        </tr>
        <tr style="background-color:#fff;">
          <td style="border-top:1px solid #ccc;">
            <img :src="item.ticketimgsrc" alt="" style="width:5vw;">
          </td>
          <td style="border-right:1px solid #ccc;border-top:1px solid #ccc;">{{item.ticketname}}</td>
          <td style="border-right:1px solid #ccc;border-top:1px solid #ccc;">购票价：￥{{item.ticketprice}}</td>
          <td style="border-right:1px solid #ccc;border-top:1px solid #ccc;width:20vw;">演出时间：{{item.tickettime}}</td>
          <td style="border-right:1px solid #ccc;border-top:1px solid #ccc;width:10vw;">交易成功</td>
          </tr>
      </table>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import db from '../../../utils/localstorage'
export default {
  name:'TicketHistory',
  data(){
    return{
    historyList:[]
    }
  },
  mounted(){
    this.getHistory()
  },
  methods:{
  getHistory(){
    const ticketuser=db.get('user').username
    this.$store.dispatch('store_getTicketHistory',{ ticketuser:ticketuser}).then(
      res=>{
       this.historyList=res
      }
    )
  }
  }
}
</script>
<style>
.tickettable{
  border: 1px solid #ccc;
  width: 87vw;
  height: 200px;
  text-align: center;
  background-color:rgb(226, 225, 225);
  margin-top:20px;
  margin: 20px auto;
}
.tickettable tr td{
  
}

</style>