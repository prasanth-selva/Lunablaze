import { create } from 'zustand'

interface AppState {
  isPreloaderComplete: boolean
  setPreloaderComplete: (complete: boolean) => void
}

export const useStore = create<AppState>((set) => ({
  isPreloaderComplete: false,
  setPreloaderComplete: (isPreloaderComplete) => set({ isPreloaderComplete }),
}))
