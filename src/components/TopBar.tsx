"use client";

import { useUIStore } from "@/store/UIStore";
import { Bell, Search, Settings } from "lucide-react";


export function TopBar() {
  const activeSection = useUIStore((state) => state.activeSection);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Title from Zustand */}
      <h1 className="text-2xl font-semibold text-slate-800">
        {activeSection}
      </h1>

      <div className="flex items-center gap-4">
         <div className="flex items-center gap-6">

      {/* Search Box */}
      <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 w-60">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search for something"
          className="bg-transparent outline-none text-sm text-slate-600 placeholder:text-slate-400 w-full"
        />
      </div>

      {/* Settings */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition">
        <Settings className="w-5 h-5 text-indigo-600" />
      </button>

      {/* Notification */}
      <div className="relative">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition">
          <Bell className="w-5 h-5 text-indigo-600" />
        </button>

        {/* Red Dot */}
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
      </div>

      {/* Profile Image */}
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
      />
    </div>
      </div>
    </header>
  );
}
