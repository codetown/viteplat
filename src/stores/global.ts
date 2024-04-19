import { create } from 'zustand'
const useGlobalStore = create((set) => ({
  newMessageCount: 13,
  currentUser: { username: '管理员', loginAccount: '15152318082', unreadCount: 98 },
  setUserInfo: (inputUserInfo: any) => set({ userInfo: inputUserInfo })
}))
export default useGlobalStore
