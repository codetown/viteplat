/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import axios, { AxiosResponse } from 'axios'
import { message, notification } from 'antd'
import routes from '@/routes'
import { pureParams } from './common'

// 某个字符串是否在某个数组中
// const inArray = (str: string, strArr: string[]) => {
//   let tag = false
//   for (let index = 0; index < strArr.length; index++) {
//     if (str == strArr[index]) {
//       tag = true
//       break
//     }
//     return tag
//   }
// }

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: AxiosResponse }) => {
  const { response } = error
  if (response && response.status) {
    const statusIndex = response.status as keyof typeof codeMessage
    const errorText = codeMessage[statusIndex] || response.statusText
    const { status } = response
    notification.error({
      // message: `请求错误 ${status}: ${url}`,
      message: `网络错误${status},请重新连接网络`,
      description: errorText
    })
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常'
    })
  }
  if (sessionStorage.getItem('jwt')) {
    sessionStorage.removeItem('jwt')
  }
  if (sessionStorage.getItem('menuTree')) {
    sessionStorage.removeItem('menuTree')
  }
  // history.push('/login');
  // const responseData = {
  //   data: '',
  //   status: 500,
  //   statusText: 'Internal Server Error',
  //   headers: {
  //     'access-control-allow-origin': '*',
  //     connection: 'keep-alive',
  //     'content-type': 'text/plain',
  //     date: 'Mon, 25 Sep 2023 08:19:20 GMT',
  //     'keep-alive': 'timeout=5',
  //     'transfer-encoding': 'chunked'
  //   },
  //   config: {
  //     transitional: {
  //       silentJSONParsing: true,
  //       forcedJSONParsing: true,
  //       clarifyTimeoutError: false
  //     },
  //     adapter: 'xhr',
  //     transformRequest: [null],
  //     transformResponse: [null],
  //     timeout: 10000,
  //     xsrfCookieName: 'XSRF-TOKEN',
  //     xsrfHeaderName: 'X-XSRF-TOKEN',
  //     maxContentLength: -1,
  //     maxBodyLength: -1,
  //     env: {},
  //     headers: {
  //       Accept: 'application/json, text/plain, */*'
  //     },
  //     baseURL: '/',
  //     method: 'get',
  //     params: {
  //       current: 1,
  //       pageSize: 20
  //     },
  //     url: '/api/v1/admins'
  //   },
  //   request: {}
  // }
  return response
}

/**
 * 配置request请求时的默认参数
 */
const request = axios.create({
  baseURL: '/', //请求地址

  timeout: 10000, //超时时间

  headers: {
    //请求头参数

    'Content-Type': 'application/json'
  }
})

function clearLoginInfo() {
  // 返回405时删除已缓存的jwt数据
  if (sessionStorage.getItem('jwt')) {
    sessionStorage.removeItem('jwt')
  }
  if (sessionStorage.getItem('menuTree')) {
    sessionStorage.removeItem('menuTree')
  }
  routes.navigate('login')
}
// response拦截器, 处理response
request.interceptors.response.use(async (response: any) => {
  const responseData = response.data
  if (responseData) {
    if (responseData.code === 405) {
      message.info('登录超时，请重新登录', 1, clearLoginInfo)
      return responseData
    }
    if (responseData.code !== 200) {
      message.error(responseData.message)
      // const { status, data } = response
      return responseData
    }
  } else {
    responseData.code = response.status
    responseData.message = response.message
  }
  return responseData
}, errorHandler)

//不需要登录就可以访问的接口
const noLoginUrls = ['/api/v1/login', '/api/v1/plf/login', '/api/v1/get-captcha', '/api/v1/upload-test']

// const myRequest = (url:string, options:any) => {
//   const result = { url, options };
//   if (!inArray(url, noLoginUrls)) {
//     const jwt = sessionStorage.getItem('jwt');
//     if (jwt) {
//       const headers = { Authorization: `Bearer ${jwt}` };
//       result.options = { ...options, headers };
//     }
//   }
//   return result;
// };
// request.interceptors.request.use(myRequest);

// 请求拦截器
request.interceptors.request.use(function (config) {
  // if(config.data){
  //   config.data = pureParams(config.data);
  // }
  if(config.params){
    config.params = pureParams(config.params);
  }
  if (!noLoginUrls.includes(`${config?.url}`)) {
    const jwt = sessionStorage.getItem('jwt')
    if (jwt) {
      // const headers = { Authorization: `Bearer ${jwt}` }
      config.headers['Authorization'] = `Bearer ${jwt}`
    }
  }
  return config
})
export default request
