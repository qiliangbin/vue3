import axios from '@/http/index'

export const myUserLogin = () => {
  return axios.get('/myapi/user/list')
}