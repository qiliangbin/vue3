<template>
  <div class="login">
    <div class="login_form">
      <span class="mb-[50px] mt-[30px] font-sans login_form_title">登录</span>
      <p>
        <span>
          账号：
        </span>
        <input v-model="loginForm.name" class="account" type="text">
      </p>
      <p>
        <span>
          密码：
        </span>
        <input v-model="loginForm.password" class="account mt-[20px]" type="password">
      </p>
      <button class="login_form_loginBtn mt-[30px]" @click="loginBtn">登录</button>
      <span class="registerBtn">我想你是在找<text @click="goRegister" class="registerBtn_btn">注册</text>按钮吧</span>
      <span class="registerBtn_btn" style="font-size: 12px; line-height: 14px" @click="forgetPsword">忘记密码</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { loginApi } from '@/api/login'
import type { ILoginRegister } from '@/interface/login'
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/user'

const useUser = useUserStore()
const loginForm = ref<ILoginRegister>({
  name: '',
  password: '',
})
const router = useRouter()
const goRegister = () => {
  router.push('/register')
}
const loginBtn = async () => {
  const {name, password} = loginForm.value
  if(!name || !password) return ElMessage.warning('账号和密码不能为空')
  const res: any = await loginApi(loginForm.value)
  if(res.status) {
    useUser.setToken(res.msg.token)
    useUser.setNickName(res.msg.data.name)
    ElMessage.success('登录成功')
    router.push('/')
  }
}
const forgetPsword = async () => {
  router.push('/forgetPassword')
}
</script>
<style lang="less" scoped>
.login{
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/imgs/loginbg.jpg');
  background-size: 100%;
  background-attachment: fixed;
  background-position: right top;
  background-repeat: no-repeat;
  &_form{
    position: absolute;
    inset: 0;
    margin: auto;
    width: 600px;
    height: 350px;
    // background: #fb7299;
    background: rgba(255, 255, 255, .8);
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #00AEEC;
    font-size: 16px;
    line-height: 32px;
    &_title{
      font-size: 26px;
      cursor: pointer;
    }
    &_loginBtn{
      width: 140px;
      line-height: 18px;
      padding: 10px;
      background: #fff;
      border: 1px solid #00AEEC;
      color: #00AEEC;
      border-radius: 6px;
      &:hover{
        background: #00AEEC;
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
  border: 2px solid #00AEEC;
  color: #00AEEC;
  font-weight: 700;
  caret-color: #00AEEC;
  outline-style: none;
  &:focus{
    border-color: #00AEEC;
  }
}
.registerBtn{
  color: #000;
  font-size: 12px;
  line-height: 32px;
  &_btn{
    color: #00AEEC;
    cursor: pointer;
  }
}
</style>