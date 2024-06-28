import { create } from 'zustand'
import { getVideos,getVideosFromBty4lyy } from '@/services/videos'
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
    const pageParams = { current: params.current || 1, pageSize: params.pageSize || 24 };
    if (params && params.title) {
      videoOperation = getVideosFromBty4lyy({ ...pageParams, title: params.title });
    } else {
      videoOperation = getVideos({...pageParams });
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
  }
}))
export default useVideoStore
