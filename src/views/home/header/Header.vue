<template>
  <div id="header">
    <el-row>
      <el-col :span="7">
        <div class="logo" @click="toHome">
          <img src="static/logo.png" alt />
        </div>
      </el-col>
      <el-col :span="3" style="line-height:80px;">
        <span class="location" @mouseenter="locationShow=true" @mouseleave="locationShow=false">
          <i class="el-icon-location-information" style="font-size:1.2rem;color:#FC2E6A"></i>
          当前范围：全国
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </el-col>
      <!-- 搜索框 -->
      <el-col :span="7">
        <div style="margin-top:2vh">
          <input
            placeholder="请输入内容"
            class="input-with-select"
            style="margin:0;border:1px solid #FC2E6A;border-radius:0;width:320px;height:36px;margin-left:3px"
            v-model="result"
          />
          <el-button
            slot="append"
            icon="el-icon-search"
            style="border:3px solid #FC2E6A;background-color:#FC2E6A;color:#fff;border-radius:0;border:0;position: absolute;right:39.7vw;top: 1.9vh;"
            @click="findList"
          >搜索</el-button>
        </div>
      </el-col>
      <div v-if='resultList.length!=0' class='showResult' v-show="resultShow" @mouseleave="resultShow=false">
        <div  v-for="(item,index) in resultList" :key="index"  @click="toDetail(item)" >
          <div style="float:left;width:90%;height:40px;overflow:hidden;line-height:40px">{{item.showname}}</div>
        </div>
      </div>
       <div v-else style="position:absolute;top:5.5vh;left:40.7vw;width:17vw;z-index:1999;background-color:#fafafa;" v-show="resultShow" @mouseleave="resultShow=false">
        <div style="width:100%;padding-left:10px;margin-top:10px;border-bottom:1px dash #ccc;height:30px;line-height:30px">
          抱歉，暂无符合条件的场次信息
        </div>
      </div>
      <!-- 头像 -->
      <el-col :span="7">
        <el-dropdown style="width:150px;margin: 2.5vh auto 0 5vw;">
          <span class="el-dropdown-link" @click="openLogin">
      <div v-if="name=='未登录'" style="float:left">
      <el-avatar> user </el-avatar>
    </div>
      <div v-else style="float:left">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
            <div style="margin-top:1vh;margin-left:50px">
              {{name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <ul style="width:120px;height:80px;" class="menu">
              <li @click="toProfileBase">
                <i class="el-icon-tickets"></i>&nbsp;我的信息
              </li>
              <li @click="toProfileTicket">
                <i class="el-icon-menu"></i>&nbsp;购票记录
              </li>
              <li @click="exit">
                <i class="el-icon-switch-button"></i>&nbsp;退出
              </li>
            </ul>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <!-- 登录框 -->
    <el-dialog title="用户登录" :visible.sync="dialogVisible" width="50%">
      <div style="width:30vw">
        <div style="width:50%;">
          <img src="static/home/login/login.JPG" style="width:25vw" />
        </div>
        <div style="position: absolute;left: 28vw;top: 10vh;">
          <div style="width:20vw">
            <span style="float:left;font-size:1rem;line-height:2rem">用户名：</span>
            <el-input placeholder="请输入用户名" v-model="username" style="float:left;width:15vw"></el-input>
          </div>
          <div style="margin-top:8vh">
            <span style="float:left;font-size:1rem;margin-left:15px;line-height:2rem">密码：</span>
            <el-input
              placeholder="请输入密码"
              v-model="password"
              style="float:left;width:15vw"
              show-password
            ></el-input>
          </div>
          <el-button
            round
            type="danger"
            style="width:14vw;margin-left:4vw;margin-top:5vh"
            @click="login"
          >登录</el-button>
          <el-button
            round
            style="width:14vw;margin-left:4vw;margin-top:5vh"
            @click="openRegis"
          >注册</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 注册框 -->
    <el-dialog title="用户注册" :visible.sync="regisdialogVisible"  width="30%" height='40%'>
      <el-form  status-icon :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="rusername" >
    <el-input v-model="ruleForm.rusername" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="rpassword">
    <el-input type="password" v-model="ruleForm.rpassword" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="rpasswordrepeat">
    <el-input type="password" v-model="ruleForm.rpasswordrepeat" autocomplete="off" ></el-input>
  </el-form-item>
  <el-form-item label="电话号码" prop="rphone">
    <el-input v-model="ruleForm.rphone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button style="width:10vw" round type="danger" @click="regis('ruleForm')">注册</el-button>
    <el-button style="width:10vw" round @click="resetdata">重置</el-button>
  </el-form-item>
</el-form>
    </el-dialog>
    <!-- 位置选择框 -->
    <div
      class="locationBox"
      v-show="locationShow"
      @mouseenter="locationShow=true"
      @mouseleave="locationShow=false"
    >
      <div style="margin-top:5px;height:30px;line-height:30px;">
        <div style="float:left;margin-left:15px">
          <i class="el-icon-location-information" style="font-size:1.2rem;color:#FC2E6A"></i>全国
        </div>
        <div style="float:left;margin-left:25px;font-size:14px">
          当前全国共有
          <span style="color:#FC2E6A">890</span>场演出
        </div>
      </div>
      <div style="background-color:#fff;font-size:12px" class="boxmain">
        <div style="margin-top:5px;height:40px;line-height:40px;border-bottom:1px solid #ccc;">
          <div style="float:left;margin-left:35px;">全国 &nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div style="float:left;margin-left:20px;font-size:14px">
            全国(
            <span style="color:#FC2E6A">890</span>)
          </div>
        </div>
        <!-- 华东 -->
        <div style="margin-top:5px;height:40px;line-height:40px;border-bottom:1px solid #ccc;">
          <div style="float:left;margin-left:8px;">华东地区 &nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div style="float:left;margin-left:20px;font-size:14px">
            上海(
            <span style="color:#FC2E6A">236</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            杭州(
            <span style="color:#FC2E6A">62</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            宁波(
            <span style="color:#FC2E6A">17</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            南京(
            <span style="color:#FC2E6A">8</span>)
          </div>
        </div>

        <!-- 华西 -->
        <div style="margin-top:5px;height:40px;line-height:40px;border-bottom:1px solid #ccc;">
          <div style="float:left;margin-left:8px;">西南地区 &nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div style="float:left;margin-left:20px;font-size:14px">
            成都(
            <span style="color:#FC2E6A">36</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            重庆(
            <span style="color:#FC2E6A">90</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            昆明(
            <span style="color:#FC2E6A">7</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            贵阳(
            <span style="color:#FC2E6A">0</span>)
          </div>
        </div>

        <!-- 华中 -->
        <div style="margin-top:5px;height:40px;line-height:40px;border-bottom:1px solid #ccc;">
          <div style="float:left;margin-left:8px;">华中地区 &nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div style="float:left;margin-left:20px;font-size:14px">
            长沙(
            <span style="color:#FC2E6A">3</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            武汉(
            <span style="color:#FC2E6A">0</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            郑州(
            <span style="color:#FC2E6A">11</span>)
          </div>
        </div>
        <!-- 西北地区西安(7) -->
        <div style="margin-top:5px;height:40px;line-height:40px;border-bottom:1px solid #ccc;">
          <div style="float:left;margin-left:8px;">西北地区 &nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div style="float:left;margin-left:20px;font-size:14px">
            西安(
            <span style="color:#FC2E6A">3</span>)
          </div>
        </div>

        <!-- 海外地区新加坡(1)马来西亚(0) -->
        <div style="margin-top:5px;height:40px;line-height:40px;">
          <div style="float:left;margin-left:8px;">海外地区 &nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div style="float:left;margin-left:20px;font-size:14px">
            新加坡(
            <span style="color:#FC2E6A">1</span>)
          </div>
          <div style="float:left;margin-left:20px;font-size:14px">
            马来西亚(
            <span style="color:#FC2E6A">0</span>)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "../../../utils/localstorage";
export default {
  name: "Header",
  data() {
     var userNameReg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/ 
     var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
        if (!userNameReg.test(value)) {
        callback(new Error('用户名只能包含汉字、数字、字母、下划线不能以下划线开头和结尾'))
        } else {
        callback()
        }
      }, 500)
      };
      var Passp= /^(?![A-Za-z]+$)(?![A-Z0-9]+$)(?![a-z0-9]+$)(?![a-z\\W]+$)(?![A-Z\\W]+$)(?![0-9\\W]+$)[a-zA-Z0-9\\W]{8,16}$/
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'));
        } 
        if (this.ruleForm.rpasswordrepeat !== '') { 
           return this.$refs.ruleForm.validateField('rpasswordrepeat');
        }
      //   setTimeout(() => {
      //   if (!Passp.test(value)) {
      //   callback(new Error('密码至少包含8个字符，至少包含大写字母、小写字母、数字和符号中的三种'))
      //   } else {
      //   callback()
      //   }
      // }, 500)
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.ruleForm.rpassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var Mphone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      var checkphone = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入电话号码！'));
        } 
         setTimeout(() => {
        if (!Mphone.test(value)) {
        callback(new Error('电话号码格式有误！'))
        } else {
        callback()
        }
      }, 500)
      };
    return {
      result:'',
      ruleForm:{
      rusername:'',
      rpassword:'',
      rpasswordrepeat:'',
      rphone:''
        },
        rules: {
           rusername: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          // rpassword: [
          //   { validator: validatePass, trigger: 'blur' }
          // ],
          rpasswordrepeat: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          rphone:[
             { validator: checkphone, trigger: 'blur' }
          ]
        },
      locationShow: false,
      dialogVisible: false,
      username: "",
      password: "",
      name: "未登录",
      regisdialogVisible: false,
      user: {},
      resultList:[],
      allList:[],
      resultShow:false
    };
  },
  mounted() {
    
   if(db.get('user').username){
      this.name=db.get('user').username
      this.$store.state.userLogined=true
   }else{
     this.name='未登录'
   }
  },
  methods: {
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
    findList(){
      const list1=db.get('songsList')
      const list2=db.get('musicpartyList')
      const list3=db.get('stageList')
      const list4=db.get('dramaList')
      const list5=db.get('operaList')
      list1.forEach(
        item=>{
          this.allList.push(item)
        }
      )
       list2.forEach(
        item=>{
          this.allList.push(item)
        }
      )
       list3.forEach(
        item=>{
          this.allList.push(item)
        }
      )
       list4.forEach(
        item=>{
          this.allList.push(item)
        }
      )
       list5.forEach(
        item=>{
          this.allList.push(item)
        }
      )
       if(this.result==='演唱会'){
            this.resultList=list1
          }else if(this.result==='音乐节'){
            this.resultList=list2
          }else if(this.result==='戏曲综艺'||this.result==='戏曲'){
            this.resultList=list5
          }else if(this.result==='音乐剧'){
            this.resultList=list3
          }else if(this.result==='舞台剧'){
            this.resultList=list4
        }
        this.resultShow=true
      // allList.forEach(
      //   res=>{
         
      //   }
      // )
    },
    toProfileBase(){
      if(this.$store.state.userLogined===false){
        this.dialogVisible=true
        return 
      }
      this.$router.push({path:'/profile',query:{
        active:'1-1'
      }})
    },
    toProfileTicket(){
      if(this.$store.state.userLogined===false){
        this.dialogVisible=true
        return 
      }
       this.$router.push({path:'/profile/ticketHistory',query:{
        active:'2-1'
      }})
    },
    toHome(){
      this.$router.push('/home')
    },
    resetdata(){
      this.ruleForm.rusername=''
      this.ruleForm.rpassword=''
      this.ruleForm.rpasswordrepeat=''
      this.ruleForm.rphone=''
    },
    openLogin() {
      if(this.$store.state.userLogined===false){
        this.dialogVisible = true
      }     
    },
    openRegis(){
      this.dialogVisible=false
      this.regisdialogVisible=true
    },
    login() {
      const payload = {
        username: this.username,
        password: this.password
      };
      if(this.username!=''&&this.password!=''){
      this.$store.dispatch("store_userLogin", payload).then(res => {
        if (res !== null) {
          this.$store.state.userLogined=true
          this.$message.success("登录成功!!!");
          db.save("user", res);
          this.name = res.username
          this.$store.state.username = res.username
        }
      });
      this.dialogVisible = false;
      }else{
        this.$message.error('请输入用户名和密码！')
      }
      
    },
    regis(formName) { 
      this.$refs[formName].validate((valid) => {
        if (valid) {
        const userinfo={
        username:this.ruleForm.rusername,
        password:this.ruleForm.rpassword,
        phone:this.ruleForm.rphone
      }

      this.$store.dispatch('store_saveUser',userinfo).then(
        res=>{
          if(res==='添加成功'){
            this.regisdialogVisible=false
            this.dialogVisible=true
            this.$notify({
          title: '注册成功提醒',
          message: '您已注册成功，快去登录吧！',
          duration: 0
        });
          }
        }
      ) } else {
            return false;
          }
        });
   
    },
    exit() {
      this.$router.push('/home')
      this.$store.state.userLogined=false
      this.$store.state.username='未登录'
      this.name = "未登录";
      db.save("user", {});
    }
  }
};
</script>
<style>
#header {
  width: 100%;
  height: 10vh;
}
.logo {
  margin-left: 21vw;
  cursor: pointer;
}
.location {
  cursor: pointer;
}

.locationBox {
  width: 500px;
  height: 313px;
  position: absolute;
  background-color: #f5f5f5;
  left: 34vw;
  top: 2vh;
  z-index: 199;
  cursor: pointer;
}
.boxmain div:hover {
  font-size: 14px;
}
.el-dropdown-link {
  cursor: pointer;
}
.menu li {
  list-style-type: none;
  width: 100%;
  padding-left: 15px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  display: block;
}
.menu li:hover {
  color: #fc2e6a !important;
}

.showResult{
position:absolute;
top:5.5vh;
left:40.7vw;
width:17vw;
z-index:2999;
background-color:#fff;
}
.showResult div{
  width:100%;
  padding-left:10px;
  margin-top:10px;
  border-bottom:1px dash #ccc;
  cursor:pointer;
}
.showResult div:hover{
  background-color: #fafafa;
}
</style>