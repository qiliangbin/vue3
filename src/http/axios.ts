import type {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import axios from 'axios'
import {ElMessage} from 'element-plus'
import { useEnv } from '@/hooks/useEnv'
import {RequestEnum} from '@/types/axios'
const {VITE_BASE_API} = useEnv()
const {TIMEOUT, SUCCESS} = RequestEnum
const config = {
  baseURL: VITE_BASE_API as string,
  timeout: TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true
}

// 请求响应参数，包含data
interface ResultData<T = any> {
  data?: T;
}
class Ajax{
  // 定义成员变量并指定类型
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config)
    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    this.service.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = localStorage.getItem('token') || ''
      return {
        ...config,
        headers: {
          'x-access-token': token // 请求头中携带token信息
        }
      }
    }, (err: AxiosError) => {
      return Promise.reject(err)
    })
    this.service.interceptors.response.use((response: AxiosResponse) => {
      const {data} = response
      if(data.code === SUCCESS) {
        return data
      } else {
        return Promise.reject(data)
      }
    }, (err: AxiosError) => {
      return Promise.reject(err)
    })
  }
  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, {params})
  }
  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.post(url, {data: params})
  }
}

export default new Ajax(config)