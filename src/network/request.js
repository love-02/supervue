import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  })
  //axios响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },
    err => {
      console.log(config)
    }
  )
  //axios的拦截器
  instance.interceptors.request.use(config => {
    //console.log(config);
    //1 比如config中的一些信息不符合服务器要求

    //2比如每次发送网络请求时,都希望在界面中显示一个请求的图标

    //3 某些网络请求 (比如登录时token ),必须携带一些特殊的信息
    return config
  },
    err => {
      console.log(err)
    }
  )
  return instance(config)

}



