import React from 'react';
import Sidebar from '../components/Sidebar';
import { Menu, Moon, Sun } from 'lucide-react';
import { useUIStore } from '../store/useUiStore';



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
        <div className="h-full px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu size={18} />
            </button>
            <h1 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">Finance Dashboard</h1>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar/>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:ml-0" onClick={handleMainClick}>
          <div className="max-w-7xl mx-auto animate-fade-in">
           
          </div>
        </main>
      </div>
    </div>
  );
}
