import axios from '@/http/index'
import type { ILoginRegister, IRegister } from '@/interface/login'

export const loginApi = (params: ILoginRegister) => {
  return axios.post('/myapi/user/login', params)
}

export const registerApi = (params: IRegister) => {
  return axios.post('/myapi/user/register', params)
}