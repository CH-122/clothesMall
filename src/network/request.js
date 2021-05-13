import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 10000
  })
  // 2.axios的拦截器
  // axios.interceptors   这是全局拦截
  // 2.1请求拦截
  instance1.interceptors.request.use(config => {   //拦截请求
    return config  //若拦截到需要原封不动的返回
  }, err => {
  })
  // 2.2响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance1(config)

}