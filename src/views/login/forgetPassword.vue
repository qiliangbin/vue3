<template>
  <div class="forgetpassword shadow-sm">
    <p class="text-center global-title">{{ text }}</p>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="90px"
      class="ruleForm"
    >
      <el-form-item label="用户名：" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="老密码：" prop="password" v-if="isForget">
        <el-input
          v-model="ruleForm.password"
          :type="inputType"
          autocomplete="off"
        >
          <template #suffix>
            <el-icon @click="lookPassword" class="el-input__icon"><View /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newPassword">
        <el-input v-model="ruleForm.newPassword" :type="inputType">
          <template #suffix>
            <el-icon @click="lookPassword" class="el-input__icon"><View /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="sureNewPassword" v-if="isForget">
        <el-input v-model="ruleForm.sureNewPassword" :type="inputType">
          <template #suffix>
            <el-icon @click="lookPassword" class="el-input__icon"><View /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label-width="0" class="gradient">
        <el-button class="w-3 gradientBg" type="primary" @mouseenter="enterFormBtn" @mouseleave="leaveFormBtn" @click="submitForm(ruleFormRef)"
          >确定</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, watch, onMounted } from 'vue'
import type { IForgetForm } from '@/interface/login'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { addRemoveClass } from '@/hooks/useAnimate'
import { View } from '@element-plus/icons-vue'
import { forgtePwApi } from '@/api/login'
const props = defineProps<{
  isForget: Boolean,
  text: String
}>()

const { isForget, text } = toRefs(props)

const ruleForm = ref<IForgetForm>({
  name: '',
  password: '',
  newPassword: '',
  sureNewPassword: '',
})
const inputType = ref<string>('password')
const ruleFormRef = ref<FormInstance>()
const validatePass = (rule: any, value: any, callback: any) => {
  if(!value) {
    callback(new Error('不能为空'))
  } else {
    callback()
  }
}
const validateNewPass = (rule: any, value: any, callback: any) => {
  if(!value) {
    callback(new Error('不能为空'))
  } else if(value !== ruleForm.value.newPassword) {
    callback(new Error('新密码两次不一样'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ validator: validatePass, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
  newPassword: [{ validator: validatePass, trigger: 'blur' }],
  sureNewPassword: [{ validator: validateNewPass, trigger: 'blur' }]
})

// const tabTitle = computed(() => {
//   return isForget.value
// })

const enterFormBtn = () => {
  if(!ruleForm.value.newPassword) {
    addRemoveClass('.gradientBg', 'animate__headShake', true)
  }
}

const leaveFormBtn = () => {
  addRemoveClass('.gradientBg', 'animate__headShake', false)
}

const submitForm = (formEl: FormInstance | undefined) => {
  if(!formEl) return
  formEl.validate(async (valid: any) => {
    if(!valid) return
    const params = {
      name: ruleForm.value.name,
      newPassword: ruleForm.value.newPassword
    }
    if(!isForget.value) {
      const res: any = await forgtePwApi(Object.assign({}, {
        isForget: false
      }, params))
      if(res.success) {
        ElMessage.success('修改成功')
      }
    } else {
      const res: any = await forgtePwApi(Object.assign({}, {
        password: ruleForm.value.password,
        isForget: true
      }, params))
      console.log(res)
      if(res.success) {
        ElMessage.success('修改成功')
      }
    }
  })
} 

const resetForm = () => {
  ruleFormRef.value.resetFields()
  ruleForm.value.name = ''
  ruleForm.value.password = ''
  ruleForm.value.newPassword = ''
  ruleForm.value.sureNewPassword = ''
}

const lookPassword = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}

defineExpose({
  resetForm
})
</script>

<style lang="less" scoped>
.forgetpassword {

}
.ruleForm {
  width: 600px;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
}
.gradient /deep/ .el-form-item__content{
  justify-content: center;
}
.gradientBg {
  background-image: linear-gradient(to right, #00AEEC, #fb7299);
  border: none;
}
</style>