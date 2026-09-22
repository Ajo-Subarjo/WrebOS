import { create } from "zustand";

export type OSWindow = {
  id: string
  appId: string
  tittle: string
  x: number
  y: number
  width: number
  height: number
  minimize: boolean
}

type OSStore = {
  windows: OSWindow[]
  activeWindow: string | null

  openApp: (appId: string, tittle: string) => void
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  restoreWindow: (id: string) => void
  focusWindow: (id: string) => void
  moveWindow: (id: string, x: number, y: number) => void
  showPanel: boolean

  logedIn: boolean
  login: () => void
  logout: () => void
}

export const useOSStore = create<OSStore>((set) => ({
  windows: [],
  activeWindow: null,
  showPanel: false,
  logedIn: false,

  login: () => set({ logedIn: true }),
  logout: () =>  set({ logedIn: false}),

  openApp: (appId, tittle) => set((state) => {
    const id = crypto.randomUUID()
    return { windows: [...state.windows, { id, appId, tittle, x: 100, y: 100, width: 500, height: 400, minimize : false }], activeWindow: id }
  }),

  closeWindow: (id) => set((state) => ({
    windows: state.windows.filter((window) => window.id !== id),
    activeWindow: state.activeWindow === id ? null : state.activeWindow
  })),

  minimizeWindow: (id) => set((state) => ({
    windows: state.windows.map((window) => window.id === id ? { ...window, minimize: true } : window),
    activeWindow: state.activeWindow === id ? null : state.activeWindow
  })),

  restoreWindow: (id) => set((state) => ({
    windows: state.windows.map((window) => window.id === id ? { ...window, minimize: false } : window),
    activeWindow: id
  })),

  focusWindow: (id) => set({activeWindow: id,}),

  moveWindow: (id, x, y) => set((state) => ({
    windows: state.windows.map((window) => window.id === id ? { ...window, x, y } : window),
  })),

}) )
