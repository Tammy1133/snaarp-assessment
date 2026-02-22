import { ArrowUpRight, ArrowDownRight, ArrowUp, ArrowDown } from "lucide-react";
import type { StatCardProps } from "../../types/cardtype";

export const DeviceManagementStatsCard = ({
  title,
  value,
  trend,
  isUp,
  Icon,
  subStats,
  details,
}: StatCardProps) => {
  const color = isUp ? "#30D158" : "#FF453A";
  const gradientId = `grad-${title.replace(/\s+/g, "")}`;

  return (
    <div className="bg-white rounded-2xl border border-[#F4F4F4] shadow-sm flex flex-col h-full overflow-hidden font-sans">
      <div className="p-5 flex-1">
        <div className="flex items-center gap-2 text-[#6F767E] mb-4">
          <div className="p-1.5 bg-[#F4F4F4] rounded-lg">
            <Icon size={18} strokeWidth={2} className="text-[#1A1D1F]" />
          </div>
          <span className="text-[14px] font-semibold text-[#6F767E]">{title}</span>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-[28px] font-bold text-[#1A1D1F] tracking-tight">{value}</h3>
              <span className={`flex items-center text-[12px] font-bold ${isUp ? "text-[#30D158]" : "text-[#FF453A]"}`}>
                {isUp ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                {trend}
              </span>
            </div>
            <p className="text-[12px] text-[#9A9FA5] font-medium mt-1">Compared to last week</p>
          </div>

          <div className="w-24 h-12">
            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <path d={isUp ? "M0 35 Q 20 35, 40 20 T 80 10 T 100 5 V 40 H 0 Z" : "M0 5 Q 20 5, 40 20 T 80 30 T 100 38 V 40 H 0 Z"} fill={`url(#${gradientId})`} />
              <path d={isUp ? "M0 35 Q 20 35, 40 20 T 80 10 T 100 5" : "M0 5 Q 20 5, 40 20 T 80 30 T 100 38"} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {subStats && (
          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#F4F4F4]">
            {subStats.map((sub, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${sub.iconBg}`}>
                    <sub.Icon size={16} className="text-[#1A1D1F]" />
                  </div>
                  <span className="text-[14px] font-semibold text-[#1A1D1F]">{sub.label}</span>
                </div>
                <span className="text-[20px] font-bold text-[#1A1D1F]">{sub.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {details && (
        <div className="flex border-t border-[#F4F4F4] bg-[#FCFCFC]/50">
          {details.map((detail, i) => (
            <div 
              key={i} 
              className={`flex-1 flex flex-col px-2 py-3 ${
                i !== details.length - 1 ? "border-r border-[#F4F4F4]" : ""
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <detail.Icon size={16} className={`${detail.color || "text-[#6F767E]"} flex-shrink-0`} />
                <span className="text-[11px] font-medium text-[#6F767E]">{detail.label}</span>
              </div>
              <span className="text-[13px] font-bold text-[#1A1D1F]">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};