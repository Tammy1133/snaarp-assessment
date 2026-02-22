import React, { useState } from "react";
import type { ReactNode } from "react";
import Sidebar from "./sidebar";
import NavBar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 relative overflow-hidden">
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <NavBar
          isOpen={isOpen}
          toggleSidebar={() => setIsOpen(!isOpen)}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;