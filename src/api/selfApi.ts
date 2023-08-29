import axios from '@/http/index'
import * as GlobalType from '@/interface/gloabl'

export const getBgList = (params: GlobalType.IBgParams) => {
  return axios.get('/myapi/publicList/getBgList', params)
}