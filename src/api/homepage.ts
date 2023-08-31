import axios from "@/http";
import type { IUploadBg } from '@/interface/homepage'

export const uploadBgImg = (params: IUploadBg):Promise<any> => {
  return axios.post('/myapi/user/uploadBgImg', params)
}