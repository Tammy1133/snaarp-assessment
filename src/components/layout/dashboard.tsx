import React from "react";
import type { ReactNode } from "react";
import Sidebar from "./sidebar";
import NavBar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <NavBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
