import { getAdmins } from '@/services/common'
import { create } from 'zustand'
const useAdminStore = create((set) => ({
  items: [],
  total: 0,
  searchAdmins: async (params: any) => {
    const res = await getAdmins(params)
    // console.info(res)
    if (res?.code == 200) {
      set({ items: res.data.items, total: res.data.total })
    }
  }
}))
export default useAdminStore
