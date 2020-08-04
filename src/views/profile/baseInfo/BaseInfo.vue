<template>
  <div id="baseInfo">
    <div style="border-bottom:1px solid #000;height:4vh;font-size:1rem;padding-top:10px"> <i class="el-icon-copy-document"></i> 基本信息 </div>
    <div style="width:100%;border-bottom:1px dashed #ccc;float:left;padding-bottom:10px;padding-top:10px">
      <div style="float:left;width:8vw;height:16vh;">
        <el-avatar style="width:100%;height:100%" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div style="float:left;width:18vw;height:15vh;font-size:14px;margin-left:10px;">
       <div style="margin-top:5vh;">登录账号：{{user.username}}</div>
       <div style="margin-top:15px;">账号类型：普通用户</div>
      </div>
    </div>

    <div style="width:100%;border-bottom:1px dashed #ccc;float:left;padding-bottom:10px;font-size:14px">
     <div style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;font-weight:bold;">
       登录密码
     </div>
     <div style="float:left;width:68vw;height:6vh;line-height:6vh;text-align:center;">
      安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码。
     </div>
      <div style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;">
      <span style="color:green;">已设置</span>&nbsp;|&nbsp;<span style="color:#fc2e6a;cursor:pointer" @click="updatedialogVisible=true">修改</span>
     </div>  
    </div>

     <div style="width:100%;border-bottom:1px dashed #ccc;float:left;padding-bottom:10px;font-size:14px">
     <div style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;font-weight:bold;">
       手机绑定
     </div>
     <div v-if="user.phone" style="float:left;width:68vw;height:6vh;line-height:6vh;text-align:center;">
      您已绑定了手机[您的手机为安全手机，可以找回密码，但不能用于登录]
     </div>
      <div v-else style="float:left;width:68vw;height:6vh;line-height:6vh;text-align:center;">
      您暂未绑定手机！
     </div>
      <div v-if="user.phone" style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;">
      <span  style="color:green;">已绑定</span>&nbsp;|&nbsp;<span style="color:#fc2e6a;cursor:pointer" @click="updatedialogVisible=true">修改</span>
     </div>  
     <div v-else style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;">
      <span  style="color:#f2ce6a;">未绑定</span>&nbsp;|&nbsp;<span style="color:#fc2e6a;cursor:pointer" @click="updatedialogVisible=true">修改</span>
     </div> 
    </div>

    <div style="width:100%;border-bottom:1px dashed #ccc;float:left;padding-bottom:10px;font-size:14px">
     <div style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;font-weight:bold;">
       身份证号
     </div>
     <div  style="float:left;width:68vw;height:6vh;line-height:6vh;text-align:center;">
      填写身份证号有利于平台进行身份信息确认，我们会对您的身份信息严格保密！
     </div>
    
      <div  v-if="user.idnumber" style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;">
      <span style="color:green;">已绑定</span>&nbsp;|&nbsp;<span style="color:#fc2e6a;cursor:pointer" @click="updatedialogVisible=true">修改</span>
     </div>  
     <div v-else style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;">
      <span style="color:#fc2e6a;">未绑定</span>&nbsp;|&nbsp;<span style="color:#fc2e6a;cursor:pointer" @click="updatedialogVisible=true">修改</span>
     </div> 
    </div>

    <div style="width:100%;border-bottom:1px dashed #ccc;float:left;padding-bottom:10px;font-size:14px">
     <div style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;font-weight:bold;">
       绑定邮箱
     </div>
     <div v-if='user.email' style="float:left;width:68vw;height:6vh;line-height:6vh;text-align:center;">
      您已绑定了邮箱[平台发送的各类系统、营销、服务通知将发送到您的邮箱。]
     </div>
      <div v-else style="float:left;width:68vw;height:6vh;line-height:6vh;text-align:center;">
       您暂未绑定邮箱
     </div>
      <div v-if='user.email' style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;">
      <span style="color:green;">已绑定</span>&nbsp;|&nbsp;<span style="color:#fc2e6a;cursor:pointer" @click="updatedialogVisible=true">修改</span>
     </div> 
     <div v-else style="float:left;width:8vw;height:6vh;line-height:6vh;text-align:center;">
      <span style="color:#fc2e6a;">未绑定</span>&nbsp;|&nbsp;<span style="color:#fc2e6a;cursor:pointer" @click="updatedialogVisible=true">修改</span>
     </div> 
    </div>
     <!-- 信息修改 -->
    <el-dialog title="用户信息修改" :visible.sync="updatedialogVisible"  width="25%" height='40%'>
    <el-form  status-icon :model="updateruleForm" :rules="rules" ref="updateruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="rusername" >
    <el-input v-model="updateruleForm.rusername" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="新密码" prop="rpassword">
    <el-input type="password" v-model="updateruleForm.rpassword" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认新密码" prop="rpasswordrepeat">
    <el-input type="password" v-model="updateruleForm.rpasswordrepeat" autocomplete="off" ></el-input>
  </el-form-item>
  <el-form-item label="电话号码" prop="rphone">
    <el-input v-model="updateruleForm.rphone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="身份证号" prop="ridnumber">
    <el-input v-model="updateruleForm.ridnumber" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="remail">
    <el-input v-model="updateruleForm.remail" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button style="width:10vw;margin-left:30px" round type="danger" @click="update('updateruleForm')">确认修改</el-button>
  </el-form-item>
</el-form>
    </el-dialog>
  </div>
</template>
<script>
import db from '../../../utils/localstorage'
export default {
  name:'BaseInfo',
  data(){
     var userNameReg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/ 
     var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空！'));
        }
        setTimeout(() => {
        if (!userNameReg.test(value)) {
        callback(new Error('用户名只能包含数字、字母、下划线，长度在4-16个字符之间'))
        } else {
        callback()
        }
      }, 500)
      };
      var Passp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'));
        } 
        if (this.updateruleForm.rpasswordrepeat !== '') { 
           return this.$refs.updateruleForm.validateField('rpasswordrepeat');
        }
        setTimeout(() => {
        if (!Passp.test(value)) {
        callback(new Error('密码至少包含8个字符，至少包含大写字母、小写字母、数字和符号中的三种'))
        } else {
        callback()
        }
      }, 500)
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.updateruleForm.rpassword) {
          callback(new Error('两次输入密码不一致，请重新输入!'));
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
        callback(new Error('电话号码格式有误，请重新输入！'))
        } else {
        callback()
        }
      }, 500)
      };
      var Midnumber=/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      var checkidnumber = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入身份证号码！'));
        } 
         setTimeout(() => {
        if (!Midnumber.test(value)) {
        callback(new Error('身份证号格式有误，请重新输入！'))
        } else {
        callback()
        }
      }, 500)
      };
      var Memail=/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
      var checkemail = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入邮箱号！'));
        } 
         setTimeout(() => {
        if (!Memail.test(value)) {
        callback(new Error('邮箱号格式有误，请重新输入！'))
        } else {
        callback()
        }
      }, 500)
      };
    return{
      user:{},
      updatedialogVisible:false,
      updateruleForm:{
      rusername:'',
      rpassword:'',
      rpasswordrepeat:'',
      rphone:'',
      ridnumber:'',
      remail:''
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
          ],
          ridnumber:[
             { validator: checkidnumber, trigger: 'blur' }
          ],
          remail:[
             { validator: checkemail, trigger: 'blur' }
          ]
        },
    }
  },
  mounted(){
 this.user=db.get('user')
  this.updateruleForm.rusername=this.user.username
  this.updateruleForm.rpassword=this.user.password
  this.updateruleForm.rpasswordrepeat=this.user.password
  this.updateruleForm.rphone=this.user.phone
  this.updateruleForm.ridnumber=this.user.idnumber
  this.updateruleForm.remail=this.user.email
},
methods:{
     update(formName) {     
      this.$refs[formName].validate((valid) => {
        if (valid) {
        const userinfo={
        username:this.updateruleForm.rusername,
        password:this.updateruleForm.rpassword,
        phone:this.updateruleForm.rphone,
        idnumber:this.updateruleForm.ridnumber,
        email:this.updateruleForm.remail
      }
      this.$store.dispatch('store_saveUser',userinfo).then(
        res=>{
          if(res==='添加成功'){
            
            this.updatedialogVisible=false
            this.$notify({
          title: '信息修改成功提醒',
          message: '信息修改成功',
          duration: 0
        });
        this.user.username=userinfo.username
        this.user.password=userinfo.password
        this.user.phone=userinfo.phone
        this.user.idnumber=userinfo.idnumber
        this.user.email=userinfo.email
          }
        }
      ) } else {
            return false;
          }
        });
   
    },
}
}
</script>
<style>

</style>