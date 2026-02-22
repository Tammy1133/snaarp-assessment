import { User, ChevronDown } from "lucide-react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import countryBg from "../../../images/testmap.png";

const countries = [
  { name: "United Kingdom", code: "gb", value: 78 },
  { name: "Nigeria", code: "ng", value: 61 },
  { name: "UAE", code: "ae", value: 45 },
  { name: "Canada", code: "ca", value: 59 },
  { name: "United States of America", code: "us", value: 78 },
];

export const ActiveUsers = () => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <div className="p-1.5 bg-gray-50 rounded-lg">
          <User size={18} className="text-[#1A1D1F]" strokeWidth={2} />
        </div>
        <h3 className="font-bold text-[16px] text-[#1A1D1F]">Active Users</h3>
      </div>
      <button className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#6F767E] hover:bg-gray-50 transition-all">
        Month <ChevronDown size={14} />
      </button>
    </div>

    <div className="flex flex-col xl:flex-row gap-8 flex-1">
      <div className="flex-1 bg-[#F8F9FB] rounded-2xl relative overflow-hidden min-h-[280px] border border-gray-50">
        <div
          className="absolute inset-0 opacity-30 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${countryBg}')` }}
        />

        <MapMarker top="32%" left="44%" color="bg-[#2D5BFF]" label="Stanley" />
        <MapMarker top="62%" left="52%" color="bg-[#30D158]" label="Chisom" />
        <MapMarker top="68%" left="15%" color="bg-[#FF453A]" label="Samuel" />
      </div>

    <div className="flex-1 flex flex-col gap-4 py-2">
      {countries.map((c) => (
        <div 
          key={c.name} 
          className="group flex items-center gap-4 py-2 px-3 border border-[#EFEFEF] rounded-2xl shadow-sm"
        >
          <span
            className={`fi fi-${c.code} rounded-sm shadow-sm w-6 h-6 flex-shrink-0`}
          />

          <div className="flex-1 flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-semibold text-[#6F767E]">
                {c.name}
              </span>
              <span className="text-[9px] text-[#9A9FA5] font-medium">
                {c.value}%
              </span>
            </div>

            <div className="w-full bg-[#F4F4F4] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#69C128] h-full rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${c.value}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    );

const MapMarker = ({ top, left, color, label }: any) => (
  <div
    className="absolute flex flex-col items-center z-10 transition-transform hover:scale-110"
    style={{ top, left }}
  >
    <div
      className={`${color} px-2.5 py-1 rounded-md shadow-lg mb-1 border border-white/20`}
    >
      <span className="text-[10px] text-white font-bold leading-none whitespace-nowrap">
        {label}
      </span>
    </div>
    <div
      className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow-md ${color}`}
    />
  </div>
);
