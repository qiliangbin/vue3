<template>
  <div class="register">
    <div class="register_form">
      <span class="mb-[50px] mt-[30px] font-sans register_form_title">注册</span>
      <p>
        <span class="w-2 inline-block text-right">
          账号：
        </span>
        <input v-model="registerForm.name" class="account" type="text">
      </p>
      <p>
        <span class="w-2 inline-block text-right">
          密码：
        </span>
        <input v-model="registerForm.password" class="account mt-[20px]" type="password">
      </p>
      <p>
        <span class="w-2 inline-block text-right">
          权限选择：
        </span>
        <el-radio-group v-model="registerForm.role" style="width: 280px" class="radioRole">
          <el-radio :label="1">管理员</el-radio>
          <el-radio :label="2">普通用户</el-radio>
        </el-radio-group>
      </p>
      <button @click="registerBtn" class="register_form_registerBtn mt-[10px]">注册</button>
      <span class="loginBtn">去<text @click="goLogin" class="loginBtn_btn">登录</text>？</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import type { IRegister } from '@/interface/login'
import { registerApi } from '@/api/login'
import { ElMessage } from 'element-plus';

const router = useRouter()
const registerForm = ref<IRegister>({
  name: '',
  password: '',
  role: 0
})
const goLogin = () => {
  router.push('/login')
}
const registerBtn = async () => {
  let { name, password, role } = registerForm.value
  if(!name || !password || !role) return ElMessage.warning('有必填项为空')
  const res: any = await registerApi(registerForm.value)
  if(res.status) {
    registerForm.value.name = ''
    registerForm.value.password = ''
    registerForm.value.role = 0
    ElMessage.success('注册成功哦~ 去登录吧')
  }
}
</script>
<style lang="less" scoped>
.register{
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/imgs/register.jpg');
  background-size: 100% auto;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(#fb7299, .4);
  &_form{
    position: absolute;
    inset: 0;
    margin: auto;
    width: 600px;
    height: 350px;
    background: rgba(255, 255, 255, .8);
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fb7299;
    font-size: 16px;
    line-height: 32px;
    &_title{
      font-size: 26px;
      cursor: pointer;
    }
    &_registerBtn{
      width: 140px;
      line-height: 18px;
      padding: 10px;
      background: #fff;
      border: 1px solid #fb7299;
      color: #fb7299;
      border-radius: 6px;
      &:hover{
        background: #fb7299;
        color: #fff;
      }
    }
  }
}
.account {
  width: 280px;
  padding: 5px;
  line-height: 26px;
  border-radius: 6px;
  border: 2px solid #fb7299;
  color: #fb7299;
  font-weight: 700;
  caret-color: #fb7299;
  outline-style: none;
  &:focus{
    border-color: #fb7299;
  }
}
.loginBtn{
  color: #000;
  font-size: 12px;
  line-height: 32px;
  &_btn{
    color: #fb7299;
    cursor: pointer;
  }
}
.radioRole{
  /deep/ .el-radio__input.is-checked+.el-radio__label{
    color: #fb7299;
  }
  /deep/ .el-radio__input.is-checked .el-radio__inner{
    background: #fb7299;
    border-color: #fb7299;
  }
}
</style>