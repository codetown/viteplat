// import { message, notification } from 'antd'
import request from './request'

// callRestfulApi通用调用Restful API
// export function callRestfulApi(objName, method, params, handleSuccess = null, handleError = null) {
//   let url = `/api/v1/${objName}s`;
//   const options = { method: method?.toUpperCase() }
//   if (params.id && (options.method !== 'POST')) {
//     url = `${url}/${params.id}`
//   }
//   if (options.method === 'POST' || options.method === 'PUT' || options.method === 'PATCH') {
//     options.data = params;
//   } else {
//     //if(method==='GET'||method==='DELETE'){
//     const newParams = {}
//     Object.keys(params).forEach(key => {
//       if (key !== 'id') {
//         newParams[key] = params[key]
//       }
//     })
//     options.params = newParams
//   }
//   request(url, options).then(res => {
//     if (res.code === 200) {
//       if (handleSuccess) {
//         handleSuccess(res)
//       } else {
//         const wordMap = {
//           GET: '查询',
//           POST: '新增',
//           PUT: '修改',
//           DELETE: '删除'
//         }
//         message.success(res.message || `${wordMap[method]}成功`)
//       }
//     } else if (handleError) {
//       handleError(res)
//     } else {
//       message.error(res.message)
//     }
//   }).catch(errors => {
//     notification.error(errors)
//   });
// }
export interface RepsonseData {
  code: number
  message: string
  data: any
}

// fetchLogin 登录
export function fetchLogin(params: any): Promise<RepsonseData> {
  return request('/api/v1/login', {
    method: 'POST',
    data: params
  })
}

// 获取系统通知
export function getNotices(params: any): Promise<RepsonseData> {
  return request('/api/v1/get-notices', {
    method: 'GET',
    params
  })
}

// getMyInfo 获取个人信息
export function getMyInfo(params: any): Promise<RepsonseData> {
  return request('/api/v1/member/my-info', {
    method: 'GET',
    params
  })
}

// putMyInfo 修改个人信息
export function putMyInfo(params: any): Promise<RepsonseData> {
  return request('/api/v1/member/my-info', {
    method: 'PUT',
    params
  })
}

// logout 退出系统
export function fetchLogout(params: any): Promise<RepsonseData> {
  return request('/api/v1/logout', {
    method: 'DELETE',
    params
  })
}

// getHomeInfo 获取首页信息
export function getHomeInfo(params: any): Promise<RepsonseData> {
  return request('/api/v1/home', {
    method: 'GET',
    params
  })
}

// getAdmins获取菜单树
export function getAdmins(params: any): Promise<RepsonseData> {
  return request('/api/v1/admins', {
    method: 'GET',
    params
  })
}

// getAdmins获取菜单树
// export function postUpload(url:string,params:any) {
//   return request(url, {
//     method: 'POST',
//     data:params,
//     // headers:{
//     //   "Content-Type": "multipart/form-data"
//     // },
//     requestType:'form',
//   });
// };

// fakeLogin 登录
export async function fakeLogin(params: any) {
  return request('/api/v1/plt/login', {
    method: 'POST',
    data: params
  })
}

// getCaptcha 获取登录验证码
export async function getCaptcha(params: any) {
  return request(`/api/v1/get-captcha`, {
    method: 'POST',
    data: params
  })
}

// logout 退出系统
export async function fakeLogout(params: any) {
  return request('/api/v1/logout', {
    method: 'DELETE',
    params
  })
}

// getMemberDetail 获取用户信息详情
export async function getMemberDetail(id: number) {
  return request(`/api/v1/members/${id}`, {
    method: 'GET'
  })
}

// getMemberList 获取用户信息列表
export async function getMemberList(params: any) {
  return request('/api/v1/members', {
    method: 'GET',
    params
  })
}

export function pureParams(params: any, deleteZero: boolean = false) {
  const realParams: any = {}
  Object.keys(params).forEach((key) => {
    const condition1 = ['current', 'pageSize'].includes(key)
    let condition2 =
      params[key] === undefined || params[key] === null || params[key] === '' || Number.isNaN(params[key])
    if (deleteZero) {
      condition2 = condition2 || params[key] === 0
    }
    if (!condition1 && !condition2) {
      realParams[key] = params[key]
    }
    if (key === 'current') {
      realParams['page'] = params.current
    }
    if (key === 'pageSize') {
      realParams['per_page'] = params.pageSize
    }
  })
  return realParams
}

// getAdmins获取菜单树
export async function postUpload(url: string, params: any) {
  return request(url, {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
