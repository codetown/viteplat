import { create } from 'zustand'
import { getVideoDetail, getVideos,getVideosFromBty4lyy } from '@/services/videos'
const useVideoStore = create((set) => ({
  items: [],
  total: 0,
  current: 1,
  pageSize: 24,
  filterFields: { title:'' },
  currentVideo:{},
  showPlayer:false,
  loading:false,
  setState: (newState: any) => set(newState),
  async searchVideos(params:any) {
    let videoOperation;
    const pageParams = { page_no: params.current || 1, per_page: params.pageSize || 24 };
    if (params && params.title) {
      videoOperation = getVideosFromBty4lyy({ ...pageParams, title: params.title });
    } else {
      videoOperation = getVideos({ ...params, ...pageParams });
    }
    set({loading:true})
    const res = await videoOperation
    if (res?.code == 200) {
      set({
        loading:false,
        current: params.current,
        pageSize: params.pageSize,
        items: res.data.items,
        total: res.data.total,
        filterFields:{
          title:params.title
        }
      })
    }
  },
  async getCurrentVideo(id: number) {
    const res = await getVideoDetail({ id })
    if (res?.code == 200) {
      set({currentVideo:res.data,showPlayer:true})
      return res.data
    }
  },
}))
export default useVideoStore
