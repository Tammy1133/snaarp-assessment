import { Database, Zap } from "lucide-react";

export const StorageCard = () => {
  const legendItems = [
    { label: "Files", value: 10, color: "#A855F7" },
    { label: "Folders", value: 15, color: "#FFB100" },
    { label: "Videos", value: 20, color: "#84CC16" },
    { label: "Apps", value: 15, color: "#38BDF8" },
    { label: "Audios", value: 10, color: "#FF5252" },
    { label: "Miscellaneous", value: 10, color: "#4F46E5" },
    { label: "Available Space", value: 20, color: "#E0E0E0" },
  ];

  const radius = 75;
  const innerDashedRadius = 55;
  const circumference = 2 * Math.PI * radius;
  let accumulated = 0;

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col font-sans h-full">

      <div className="flex gap-x-4 justify-between">
            <div className="flex flex-col">
    <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 bg-gray-50 rounded-md border border-gray-200">
          <Database size={18} className="text-gray-500" strokeWidth={2} />
        </div>
        <span className="text-[18px] font-medium text-[#1A1D1F]">Storage</span>
      </div>
      <div className="relative w-48 h-48 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            {legendItems.map((item, index) => {
              const strokeDasharray = `${(item.value / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -accumulated;
              accumulated += (item.value / 100) * circumference;
              return (
                <circle
                  key={index}
                  cx="96" cy="96" r={radius}
                  stroke={item.color}
                  strokeWidth="18"
                  fill="none"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              );
            })}
            <circle
              cx="96" cy="96" r={innerDashedRadius}
              stroke="#4F46E5"
              strokeWidth="3"
              fill="none"
              strokeDasharray="4 6"
              className="opacity-90"
            />
          </svg>
          <div className="absolute text-center">
            <p className="text-2xl font-bold text-[#1A1D1F]">80%</p>
            <p className="text-[14px] text-[#6F767E]">Used</p>
          </div>
        </div>

      </div>
  

      <div className="flex flex-col gap-2 ">
        <div className="bg-white h-full border-x-2  border-[#FFB100] p-4 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] relative mb-8">
     
            
            <div className="flex items-start gap-3 pl-2">
              <div 
                className="mt-1 bg-[#FFB100] w-5 h-5 flex items-center justify-center shrink-0"
                style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
              >
                <span className="text-white font-bold text-[12px]">!</span>
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#9333EA]">Note</p>
                <p className="text-[12px] text-[#4A4A4A] leading-tight">
                  You've almost reached your limit
                </p>
                <p className="text-[12px] text-[#4A4A4A] leading-tight ">
                  You have used 80% of your available storage. Upgrade plan to access more space.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-2 gap-y-2 px-2">
            {legendItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-[4px] shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] text-[#1A1D1F] whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>

          <div className=" flex justify-end w-full mt-2">
            <button className="border border-[#4F46E5] border-opacity-40 text-[#4F46E5] px-6 py-2 rounded-xl flex items-center gap-2 text-[12px] font-medium hover:bg-indigo-50 transition-colors">
              <Zap size={16} strokeWidth={2.5} /> Upgrade Plan
            </button>
          </div>
      </div>
      </div>

  
    </div>
  );
};