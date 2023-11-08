'use client';

import { create } from 'zustand';

type MainLayoutState = {
  closeSidebar: () => void;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  toggleSidebar: () => void;
};

export const useMainLayoutStore = create<MainLayoutState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set((_state) => ({ isSidebarOpen: false })),
  openSidebar: () => set((_state) => ({ isSidebarOpen: true })),
}));
