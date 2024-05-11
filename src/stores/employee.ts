import { create } from 'zustand'
import { getEmployeeList } from '@/services/employees'
const useEmployeeStore = create((set) => ({
  items: [],
  total: 0,
  current: 1,
  pageSize: 10,
  filterFields: { realName: '', status: -1, gender: -1, nickName: '', mobile: -1, createdAt: -1 },
  async searchEmployees(
    pageInfo: { current: number; pageSize: number },
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
        current: pageInfo.current,
        pageSize: pageInfo.pageSize,
        items: res.data.items,
        total: res.data.total,
        filterFields
      })
    }
  }
}))
export default useEmployeeStore
