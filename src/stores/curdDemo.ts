import { create } from 'zustand'
import { getEmployeeList } from '@/services/employees'
const useCurdDemoStore = create((set) => ({
    items: [],
    total: 0,
    current: 1,
    pageSize: 10,
    modalOpen: false,
    drawerOpen: false,
    filterData: {
        name: '',
        gender: '',
        mobile: '',
        email: ''
    },
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
        // console.info(res)
        if (res?.code == 200) {
            set({
                current: pageInfo.current,
                pageSize: pageInfo.pageSize,
                items: res.data.items,
                total: res.data.total,
                filterData: filterFields
            })
        }
    },
    setState(state: any) {
        set(state)
    }
}))
export default useCurdDemoStore
