import React from 'react';
import Sidebar from '../components/Sidebar';
import { Menu, Moon, Sun } from 'lucide-react';
import { useUIStore } from '../store/useUiStore';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';



export default function DashboardLayout() {
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const setSidebarOpen = useUIStore((s) => s.setSidebarOpen);
  const darkMode = useUIStore((s) => s.darkMode);
  const toggleDarkMode = useUIStore((s) => s.toggleDarkMode);

  const handleMainClick = () => {
    if (sidebarOpen && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };



  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 flex flex-col">
      <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur sticky top-0 z-30">
       <Header/>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar/>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:ml-0" onClick={handleMainClick}>
          <div className="max-w-7xl mx-auto animate-fade-in">
              <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
