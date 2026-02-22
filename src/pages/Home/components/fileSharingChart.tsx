import { FileText, BarChart2, LineChart, ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "JAN", public: 35, link: 45, org: 25 },
  { month: "FEB", public: 55, link: 62, org: 30 },
  { month: "MAR", public: 40, link: 48, org: 20 },
  { month: "APR", public: 30, link: 45, org: 35 },
  { month: "MAY", public: 65, link: 70, org: 40 },
  { month: "JUN", public: 75, link: 80, org: 55 },
  { month: "JUL", public: 58, link: 63, org: 45 },
  { month: "AUG", public: 42, link: 48, org: 30 },
  { month: "SEP", public: 38, link: 45, org: 25 },
  { month: "OCT", public: 43, link: 48, org: 32 },
  { month: "NOV", public: 62, link: 68, org: 50 },
  { month: "DEC", public: 45, link: 52, org: 40 },
];

const CustomTooltip = ({ active, payload, label } : { active?: boolean, payload?: any[], label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative mb-2">
        <div className="bg-[#9A9FA5] text-white p-3 rounded-xl shadow-lg border-none text-[11px]">
          <p className="uppercase opacity-70 mb-1">{label}</p>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#2D5BFF] rounded-sm" />
            <p className="font-bold">Public: {payload[0].value}</p>
          </div>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#9A9FA5] rotate-45" />
      </div>
    );
  }
  return null;
};

export const FileSharing = () => (
  <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm font-sans">
    <div className="flex justify-between items-start mb-10">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
            <FileText size={20} className="text-gray-800" />
          </div>
          <h3 className="font-bold text-[18px] text-[#1A1D1F]">File Sharing</h3>
        </div>
        <p className="text-[13px] text-[#9A9FA5] ml-11">Keep track of files and how they're shared</p>
      </div>
      
      <div className="flex gap-3">
        <div className="flex bg-[#F4F4F4] p-1 rounded-xl">
          <button className="bg-white p-2 rounded-lg shadow-sm text-[#2D5BFF]">
            <BarChart2 size={18} />
          </button>
          <button className="p-2 text-[#9A9FA5] hover:text-gray-600">
            <LineChart size={18} />
          </button>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-[13px] font-semibold text-[#1A1D1F] hover:bg-gray-50">
          Month <ChevronDown size={16} className="text-[#9A9FA5]" />
        </button>
      </div>
    </div>

    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={-16} 
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#EFEFEF"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9A9FA5", fontWeight: 500 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9A9FA5", fontWeight: 500 }}
            domain={[0, 100]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: 'transparent' }} 
            offset={-40}
          />
          
          <Bar
            dataKey="link"
            fill="#2D5BFF"
            radius={[8, 8, 8, 8]}
            barSize={24}
          />
          <Bar
            dataKey="public"
            fill="#4D7CFF"
            radius={[8, 8, 8, 8]}
            barSize={20}
          />
          <Bar
            dataKey="org"
            fill="#7A9CFF"
            radius={[8, 8, 8, 8]}
            barSize={16}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="flex justify-center gap-10 mt-8">
      <LegendItem color="bg-[#4D7CFF]" label="Public" />
      <LegendItem color="bg-[#2D5BFF]" label="Anyone with link" />
      <LegendItem color="bg-[#7A9CFF]" label="Within Organisation" />
    </div>
  </div>
);

const LegendItem = ({ color, label } : {color:string, label:string}) => (
  <div className="flex items-center gap-3">
    <div className={`w-4 h-4 rounded-[4px] ${color}`} />
    <span className="text-[14px] font-semibold text-[#1A1D1F]">{label}</span>
  </div>
);