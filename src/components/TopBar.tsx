"use client";

import { useUIStore } from "@/store/UIStore";
import { Bell, Search, Settings, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopBar() {
  const activeSection = useUIStore((state) => state.activeSection);

  return (
    <header className="fixed top-0 lg:left-0 z-40 w-full bg-white border-b shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">

        {/* Left Side */}
        <div className="flex items-center gap-2">

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <SidebarTrigger>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100">
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
            </SidebarTrigger>
          </div>

          {/* Title */}
          <h1 className="text-lg md:text-2xl font-semibold text-slate-800 truncate">
            {activeSection}
          </h1>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-60">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm w-full"
            />
          </div>

          {/* Mobile Search */}
          <button className="md:hidden w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <Search className="w-4 h-4 text-gray-600" />
          </button>

          {/* Settings */}
          <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <Settings className="w-5 h-5 text-indigo-600" />
          </button>

          {/* Notification */}
          <div className="relative">
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Bell className="w-5 h-5 text-indigo-600" />
            </button>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Avatar */}
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-9 h-9 rounded-full object-cover border shadow-sm"
          />

        </div>
      </div>
    </header>
  );
}
