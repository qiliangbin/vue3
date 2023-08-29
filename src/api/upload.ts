import axios from '@/http/index'
const config = {
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  }
}
export const uploadImgApi = (params) => {
  return axios.post('/myapi/upload/img', params, config)
}