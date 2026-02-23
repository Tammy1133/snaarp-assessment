import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface ProductivityStatCardProps {
  title: string;
  value: string;
  unit: string; 
  trend: string;
  isUp: boolean;
  Icon: React.ElementType;
}

export const ProductivityStatCard = ({
  title,
  value,
  unit,
  trend,
  isUp,
  Icon,
}: ProductivityStatCardProps) => {
  const gradientId = `gradient-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const brandColor = isUp ? "#30D158" : "#FF453A";

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between min-w-[240px]">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1.5 bg-gray-50 rounded-lg border border-gray-100">
          <Icon size={18} className="text-gray-500" strokeWidth={1.5} />
        </div>
        <span className="text-[14px] font-medium text-gray-600">{title}</span>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="text-[24px] font-bold text-[#1A1D1F]">{value}</h3>
            <span className="text-[16px] text-gray-400 font-medium">{unit}</span>
            <div
              className={`flex items-center gap-0.5 text-[12px] font-bold ${
                isUp ? "text-[#30D158]" : "text-[#FF453A]"
              }`}
            >
              {isUp ? <ArrowUp size={12} strokeWidth={3} /> : <ArrowDown size={12} strokeWidth={3} />}
              {trend}
            </div>
          </div>
          <p className="text-[12px] text-gray-400 whitespace-nowrap">
            Compared to last week
          </p>
        </div>

        <div className="w-24 h-12">
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={brandColor} stopOpacity={0.2} />
                <stop offset="100%" stopColor={brandColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <path
              d={isUp 
                ? "M0 35 C 20 35, 40 10, 60 20 S 80 5, 100 10 V 40 H 0 Z" 
                : "M0 10 C 20 10, 40 35, 60 25 S 80 40, 100 35 V 40 H 0 Z"}
              fill={`url(#${gradientId})`}
            />
            <path
              d={isUp 
                ? "M0 35 C 20 35, 40 10, 60 20 S 80 5, 100 10" 
                : "M0 10 C 20 10, 40 35, 60 25 S 80 40, 100 35"}
              fill="none"
              stroke={brandColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};