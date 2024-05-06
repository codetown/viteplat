// getVideoDetail 获取视频详情信息和播放链接地址
import { RepsonseData } from './common'
import request from './request'

export function getVideoDetail(params: any): Promise<RepsonseData> {
    return request(`/api/v1/videos/${params?.id}`, {
      method: 'GET',
      params
    })
  }
  
  // getVideos 获取视频列表
  export function getVideos(params: any): Promise<RepsonseData> {
    return request('/api/v1/videos', {
      method: 'GET',
      params
    })
  }
  
  // 第三方平台搜索视频
  export function getVideosFromBty4lyy(params: any): Promise<RepsonseData> {
    return request(`/api/v1/bt4kyy/search`, {
      method: 'GET',
      params
    })
  }
  
  // getVcateDetail 获取视频分类详情
  export function getVideoCateDetail(id: number): Promise<RepsonseData> {
    return request(`/api/v1/video-cates/${id}`)
  }
  
  // getVcates 获取视频分类列表
  export function getVcates(params: any): Promise<RepsonseData> {
    return request('/api/v1/video-cates', {
      method: 'GET',
      params
    })
  }
  
  // getTVChannels 获取电视频道
  export function getTVChannels(params: any): Promise<RepsonseData> {
    return request('/api/v1/tv-channels', {
      method: 'GET',
      params
    })
  }
