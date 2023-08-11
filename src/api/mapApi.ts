import axios from '@/http/index'

export const getGitList = () => {
  return axios.get('/api/users')
}

export const myUserLogin = () => {
  return axios.get('/myapi/user/list')
}