import { Zap, ChevronDown, LayoutPanelLeft } from 'lucide-react';

export const ProductivityReportHeader = () => {
  return (
    <div className="flex items-center justify-between w-full bg-white p-3 rounded-lg border border-gray-100 shadow-sm mb-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-lg border border-gray-100">
          <LayoutPanelLeft size={20} className="text-gray-600" />
        </div>
        <h2 className="text-base font-bold text-[#1A1D1F]">
          Productivity Report
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-[#4F46E5] hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all shadow-md active:scale-95">
          <Zap size={18} fill="currentColor" />
          <span className="text-[14px] font-semibold">Upgrade Plan</span>
        </button>
        
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
};