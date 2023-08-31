import axios from '@/http/index'
import * as GlobalType from '@/interface/gloabl'

export const getBgList = (params: GlobalType.IBgParams): Promise<any> => {
  return axios.get('/myapi/publicList/getBgList', params)
}

export const delBgImg = (params: GlobalType.IDelParams): Promise<any> => {
  return axios.get('/myapi/publicList/delBgImg', params)
}