import React from "react";
import { Search, Bell, Copy } from "lucide-react";
import { Sling as Hamburger } from "hamburger-react";

interface NavBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center space-x-4">
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={toggleSidebar} size={20} />
        </div>

        <div className="relative w-52 sm:w-72 md:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search for users, groups or settings"
            className="w-full pl-10 pr-4 py-2 bg-[#F8F9FB] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <button className="text-gray-400 hover:text-gray-600">
          <Bell size={20} />
        </button>

        <div className="hidden sm:flex items-center space-x-2 bg-[#F8F9FB] border border-gray-200 px-3 py-1.5 rounded-lg">
          <span className="text-xs text-gray-500">Agent Code:</span>
          <span className="text-xs font-mono text-blue-600">
            03650zJ37742y3b38
          </span>
          <Copy size={14} className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;