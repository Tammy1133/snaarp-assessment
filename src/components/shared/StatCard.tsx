import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  isUp: boolean;
  Icon: any;
}

export const StatCard = ({
  title,
  value,
  trend,
  isUp,
  Icon,
}: StatCardProps) => {
  const gradientId = `gradient-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const color = isUp ? "#30D158" : "#FF453A";

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between h-[160px]">
      <div className="flex items-center space-x-2 text-[#6F767E]">
        <Icon size={18} strokeWidth={1.5} />
        <span className="text-[14px] font-medium">{title}</span>
      </div>

      <div className="flex justify-between gap-x-3 items-end mt-4">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <h3 className="text-[28px] font-bold text-[#1A1D1F] tracking-tight">
              {value}
            </h3>
            <span
              className={`flex items-center text-[12px] font-bold ${isUp ? "text-[#30D158]" : "text-[#FF453A]"}`}
            >
              {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {trend}
            </span>
          </div>
          <p className="text-[12px] text-[#9A9FA5] font-medium whitespace-nowrap">
            Compared to last week
          </p>
        </div>

        <div className="w-24 sm:w-32 h-14 overflow-visible">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>

            <path
              d={
                isUp
                  ? "M0 35 Q 25 35, 40 20 T 80 10 T 100 5 V 40 H 0 Z"
                  : "M0 5 Q 25 5, 40 20 T 80 30 T 100 38 V 40 H 0 Z"
              }
              fill={`url(#${gradientId})`}
            />

            <path
              d={
                isUp
                  ? "M0 35 Q 25 35, 40 20 T 80 10 T 100 5"
                  : "M0 5 Q 25 5, 40 20 T 80 30 T 100 38"
              }
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
