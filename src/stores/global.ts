import { create } from 'zustand'
const useGlobalStore = create((set) => ({
  newMessageCount: 13,
  newMessageList: [
    {
      id: 1,
      title: '消息1',
      content: '消息内容1',
      time: '2021-01-01 00:00:00'
    },
    {
      id: 2,
      title: '消息2',
      content: '消息内容2',
      time: '2021-01-01 00:00:00'
    }
  ],
  currentUser: { username: '管理员', loginAccount: '15152318082', unreadCount: 98 },
  breadData:[{title:'首页'}],
  menuData:[],
  setGlobalState(state: any) {
    set(state)
  }
}))
export default useGlobalStore
