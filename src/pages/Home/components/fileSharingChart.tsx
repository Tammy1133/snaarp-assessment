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

export const FileSharing = () => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-2">
        <FileText size={20} className="text-[#1A1D1F]" />
        <h3 className="font-bold text-[16px] text-[#1A1D1F]">File Sharing</h3>
      </div>
      <div className="flex gap-2">
        <div className="flex bg-[#F8F9FB] p-1 rounded-lg">
          <button className="bg-white p-1 rounded shadow-sm text-blue-600">
            <BarChart2 size={16} />
          </button>
          <button className="p-1 text-gray-400">
            <LineChart size={16} />
          </button>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500">
          Month <ChevronDown size={14} />
        </button>
      </div>
    </div>

    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#F5F5F5"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9A9FA5" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9A9FA5" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            }}
          />
          <Bar
            dataKey="public"
            fill="#2D5BFF"
            radius={[4, 4, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="link"
            fill="#4D7CFF"
            radius={[4, 4, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="org"
            fill="#7A9CFF"
            radius={[4, 4, 0, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="flex justify-center gap-6 mt-6">
      <LegendItem color="bg-[#2D5BFF]" label="Public" />
      <LegendItem color="bg-[#4D7CFF]" label="Anyone with link" />
      <LegendItem color="bg-[#7A9CFF]" label="Within Organisation" />
    </div>
  </div>
);

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-md ${color}`} />
    <span className="text-[11px] font-medium text-[#6F767E]">{label}</span>
  </div>
);
