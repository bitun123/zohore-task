import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      setUser: (userData) => set({ user: userData }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),

      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    },
  ),
);
