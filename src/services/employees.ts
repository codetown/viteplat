// import { message, notification } from 'antd'

import request from './request'
import { RepsonseData } from './common'
// getEmployeeDetail 获取用户信息详情
export function getEmployeeDetail(id: number): Promise<RepsonseData> {
  return request(`/api/v1/members/${id}`, {
    method: 'GET'
  })
}

// getEmployeeList 获取用户信息列表
export function getEmployeeList(params: any): Promise<RepsonseData> {
  return request('/api/v1/members', {
    method: 'GET',
    params
  })
}

export function removeEmployee(id: number): Promise<RepsonseData> {
  return request(`/api/v1/members/${id}`, {
    method: 'DELETE'
  })
}