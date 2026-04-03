import React from 'react';
import { useUIStore } from '../store/useUiStore';


import { LayoutDashboard, ArrowLeftRight, Lightbulb } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard  ,path: '/dashboard'},
  { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight ,path: '/transactions'},
  { id: 'insights', label: 'Insights', icon: Lightbulb ,path: '/insights'},
];

function SidebarItem({ label, icon, path, onClick }) {
  const IconComponent = icon;

  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
        ${isActive
          ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <IconComponent
            size={18}
            className={isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400 dark:text-gray-500'}
          />
          {label}
          {isActive && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-brand-400" />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Sidebar() {

  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const setSidebarOpen = useUIStore((s) => s.setSidebarOpen);

  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 z-20 bg-white dark:bg-gray-900
          border-r border-gray-100 dark:border-gray-800 flex flex-col
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto`}
      >
        <nav className="flex-1 p-3 space-y-1">
          {NAV_ITEMS.map(({ id, label, icon, path }) => (
              <SidebarItem
              key={id}
              label={label}
              icon={icon}
              path={path}
              onClick={handleNavClick}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
            Finance Dashboard v1.0
          </p>
        </div>
      </aside>
    </>
  );
}
