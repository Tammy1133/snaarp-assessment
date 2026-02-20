import { Database, AlertCircle, Zap } from "lucide-react";

export const StorageCard = () => {
  const legendItems = [
    { label: "Files", color: "bg-purple-500" },
    { label: "Folders", color: "bg-orange-400" },
    { label: "Videos", color: "bg-green-500" },
    { label: "Apps", color: "bg-blue-400" },
    { label: "Audios", color: "bg-red-400" },
    { label: "Miscellaneous", color: "bg-indigo-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
      <div className="flex items-center space-x-2 text-gray-500 mb-6">
        <Database size={18} strokeWidth={1.5} />
        <span className="text-[15px] font-medium text-[#6F767E]">Storage</span>
      </div>

      <div className="flex flex-1 gap-8">
        {/* Donut Chart Simulation */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#F4F4F4"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#3B82F6"
              strokeWidth="12"
              fill="none"
              strokeDasharray="300 440"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center">
            <p className="text-2xl font-bold">80%</p>
            <p className="text-[10px] text-gray-400 uppercase">Used</p>
          </div>
        </div>

        {/* Legend & Note */}
        <div className="flex-1 space-y-4">
          <div className="bg-[#FFF9E6] border-l-4 border-[#FFC107] p-3 rounded-r-lg relative">
            <div className="flex items-start gap-2">
              <AlertCircle size={14} className="text-[#FFC107] mt-0.5" />
              <div>
                <p className="text-[12px] font-bold text-[#1A1D1F]">Note</p>
                <p className="text-[11px] text-[#6F767E] leading-relaxed">
                  You've almost reached your limit. You have used 80% of your
                  available storage.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-2">
            {legendItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                <span className="text-[11px] text-[#6F767E]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="mt-auto w-full border border-blue-600 text-blue-600 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold hover:bg-blue-50 transition-colors">
        <Zap size={16} /> Upgrade Plan
      </button>
    </div>
  );
};
