import { getOptions } from '@/services/options'
import { create } from 'zustand'
const useOptionsStore = create((set) => ({
  items: [],
  total: 0,
  searching: false,
  searchOptions: async (params: any) => {
    const res = await getOptions(params) as any
    console.info(res)
    if (res?.code == 200) {
      set({ items: res.data.items, total: res.data.total })
    }
  }
}))
export default useOptionsStore
