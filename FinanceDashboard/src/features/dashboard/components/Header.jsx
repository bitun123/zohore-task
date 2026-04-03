import React from 'react';


import {
  Sun, Moon, Shield, Eye, Menu, X, TrendingUp, LogOut
} from 'lucide-react';
import { useUIStore } from '../store/useUiStore';

export default function Header() {
  const { role, setRole, darkMode, toggleDarkMode, sidebarOpen, toggleSidebar } = useUIStore();



  return (
    <header className="sticky top-0 z-30 h-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center px-4 gap-3 shadow-sm">
      {/* Mobile menu toggle */}
      <button
        id="sidebar-toggle-btn"
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2 flex-1">
        <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center shadow">
          <TrendingUp size={16} className="text-white" />
        </div>
        <span className="font-bold text-lg text-gray-900 dark:text-white hidden sm:block">
          Finance<span className="text-brand-600">Dashboard</span>
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {/* Role Switcher */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 gap-1">
          <button
            id="role-viewer-btn"
            onClick={() => setRole('viewer')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
              role === 'viewer'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <Eye size={14} />
            <span className="hidden sm:inline">Viewer</span>
          </button>
          <button
            id="role-admin-btn"
            onClick={() => setRole('admin')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
              role === 'admin'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <Shield size={14} />
            <span className="hidden sm:inline">Admin</span>
          </button>
        </div>

        {/* Dark mode toggle */}
        <button
          id="dark-mode-toggle-btn"
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      
      </div>
    </header>
  );
}

