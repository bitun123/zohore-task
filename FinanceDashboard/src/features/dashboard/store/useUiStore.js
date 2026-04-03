import {create} from "zustand";

export const useUIStore = create((set) => ({
  currentPage: 'dashboard',

  darkMode: false,
  sidebarOpen: false,

  toggleDarkMode: () =>
    set((s) => {
      const next = !s.darkMode;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('finance_dark_mode', String(next));
      return { darkMode: next };
    }),

  setPage: (page) => set({ currentPage: page }),

  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));