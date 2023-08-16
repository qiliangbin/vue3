import axios from '@/http/index'
import type { IForgetForm, ILoginRegister, IRegister, IMyself } from '@/interface/login'

export const loginApi = (params: ILoginRegister) => {
  return axios.post('/myapi/user/login', params)
}

export const registerApi = (params: IRegister) => {
  return axios.post('/myapi/user/register', params)
}

export const forgtePwApi = (params: IForgetForm) => {
  return axios.post('/myapi/user/modifyPassword', params)
}

export const getMyselfApi = (params: IMyself) => {
  return axios.get(`/myapi/user/myself`, {...params})
}

export const updateMyselfApi = (params: IMyself) => {
  return axios.post('/myapi/user/updateMyself', params)
}