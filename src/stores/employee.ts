import { create } from 'zustand'
import { getEmployeeList } from '@/services/employees'
const useEmployeeStore = create((set) => ({
  items: [],
  total: 0,
  page: 1,
  per_page: 10,
  filterFields: { realName: '', status: -1, gender: -1, nickName: '', mobile: -1, createdAt: -1 },
  async searchEmployees(
    pageInfo: { page: number; per_page: number },
    filterFields: {
      realName: string
      status: number
      gender: number
      nickName: string
      mobile: number
      createdAt: number
    }
  ) {
    const res = await getEmployeeList({ ...pageInfo, ...filterFields })
    console.info(res)
    if (res?.code == 200) {
      set({
        current: pageInfo.page,
        per_page: pageInfo.per_page,
        items: res.data.items,
        total: res.data.total,
        filterFields
      })
    }
  }
}))
export default useEmployeeStore
