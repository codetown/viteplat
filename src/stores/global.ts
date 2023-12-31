import { create } from 'zustand'
const useGlobalStore = create((set) => ({
  newMessageCount: 0,
  userInfo: null,
  setUserInfo: (inputUserInfo: any) => set({ userInfo: inputUserInfo })
}))
export default useGlobalStore
