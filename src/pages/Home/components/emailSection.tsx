import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, 
  type TooltipProps
} from 'recharts';
import { Mail, BarChart2, LineChart, ChevronDown } from 'lucide-react';

const PIE_DATA = [
  { name: 'Sent', value: 40, color: '#FFAB00' },
  { name: 'Received', value: 35, color: '#5356FF' },
  { name: 'Unsent', value: 25, color: '#E2E8F0' },
];

const LINE_DATA = [
  { name: 'JAN', total: 600 }, { name: 'FEB', total: 1400 },
  { name: 'MARCH', total: 200 }, { name: 'APR', total: 1800 },
  { name: 'MAY', total: 400 }, { name: 'JUN', total: 1200 },
  { name: 'JUL', total: 5800 }, { name: 'AUG', total: 300 },
  { name: 'SEP', total: 7400 }, { name: 'OCT', total: 6500 },
  { name: 'NOV', total: 400 }, { name: 'DEC', total: 6500 },
];

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: any[];
}
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-50 overflow-hidden min-w-[140px]">
        <div className="p-4 space-y-2">
          <div className="flex justify-between text-xs font-semibold text-gray-400">
            <span>Sent</span> 
            <span className="text-gray-900 font-bold">583</span>
          </div>
          <div className="flex justify-between text-xs font-semibold text-gray-400">
            <span>Received</span> 
            <span className="text-gray-900 font-bold">932</span>
          </div>
          <div className="flex justify-between text-xs font-semibold text-gray-400">
            <span>Unsent</span> 
            <span className="text-gray-900 font-bold">32</span>
          </div>
        </div>
        
        <div className="bg-[#5356FF] px-4 py-3 flex justify-between items-center text-white">
          <span className="text-[10px] font-bold uppercase tracking-wider">Total</span>
          <span className="text-base font-black tracking-tight italic">1,747</span>
        </div>
      </div>
    );
  }

  return null;
};


export const EmailSection = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-2   bg-[#F9FAFB]  font-sans items-stretch">
      
      <div className="w-full xl:w-[400px] bg-white rounded-[0.5rem] pb-6 shadow-sm border border-gray-100 flex flex-col items-center">
        <div className="flex items-center gap-4 justify-start w-full  py-3 px-4">
          <div className="p-3 bg-gray-50 rounded-2xl"><Mail size={24} className="text-gray-800" /></div>
          <span className="font-extrabold text-base text-gray-900">Email Chart</span>
        </div>

        <div className="relative w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[{ value: 100 }]}
                innerRadius={85}
                outerRadius={115}
                fill="#F1F5F9"
                dataKey="value"
                stroke="none"
                isAnimationActive={false}
              />
              <Pie
                data={PIE_DATA}
                innerRadius={85}
                outerRadius={115}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
                stroke="none"
              >
                {PIE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-[6px] border-dashed border-[#5356FF] rounded-full flex flex-col items-center justify-center bg-white shadow-inner">
               <span className="text-sm font-black text-gray-800 leading-tight text-center uppercase tracking-tighter">
                 Emails<br/>Chart
               </span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-3">
          {PIE_DATA.map((item) => (
            <div key={item.name} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-md" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-gray-400 font-bold">{item.name}</span>
            </div>
          ))}
        </div>

        <div className=" text-center !mt-2">
          <p className="text-[16px] font-bold text-gray-900  uppercase">Total Emails Sent</p>
          <p className="text-[16px] font-black text-gray-900">5,421</p>
        </div>
      </div>

       <div className="flex-1 bg-white rounded-[0.5rem] p-3 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-16 ">
          <div className="flex items-center gap-4 text-gray-900">
            <div className="p-3 bg-gray-50 rounded-2xl"><Mail size={24} /></div>
            <span className="font-extrabold text-base">Total Email</span>
          </div>
          
          <div className="flex items-center gap-4">
<div className="flex items-center gap-3">
      <button className="flex items-center justify-center p-2.5 px-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:bg-gray-50 transition-all">
        <BarChart2 size={22} strokeWidth={2} />
      </button>

      <button className="flex items-center justify-center p-2.5 px-3 bg-[#F0F3FF] border border-[#E0E7FF] rounded-xl text-[#5356FF] shadow-sm">
        <LineChart size={22} strokeWidth={2.5} />
      </button>
    </div>
            <button className="flex items-center gap-10 px-6 py-3 border border-gray-100 rounded-2xl text-sm font-bold text-gray-400">
              Month <ChevronDown size={20} />
            </button>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={LINE_DATA} 
              margin={{ top: 10, right: 10, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5356FF" stopOpacity={0.08}/>
                  <stop offset="95%" stopColor="#5356FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              <CartesianGrid vertical={false} stroke="#F1F5F9" />
              
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94A3B8', fontSize: 13, fontWeight: 700 }}
                dy={20}
              />
              
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94A3B8', fontSize: 13, fontWeight: 700 }}
                domain={[0, 7000]}
                ticks={[0, 1000, 3000, 5000, 7000]}
                dx={-10} 
              />

              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ stroke: '#5356FF', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              
              <Area 
                type="basis" 
                dataKey="total" 
                stroke="#5356FF" 
                strokeWidth={3} 
                fill="url(#areaGradient)" 
                activeDot={{ r: 5, fill: '#5356FF', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};