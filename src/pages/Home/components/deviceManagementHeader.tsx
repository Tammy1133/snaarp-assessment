import {  ChevronDown, MonitorSmartphone, Zap } from 'lucide-react'

const DeviceManagementHeader = () => {
  return (
   <div className="flex items-center justify-between w-full px-4 py-2 bg-white border border-[#F4F4F4] rounded-xl shadow-sm my-2">
      
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-[#F4F4F4] rounded-lg">
          <MonitorSmartphone className="w-5 h-5 text-[#1A1D1F]" />
        </div>
        <h1 className="text-[18px] font-bold text-[#1A1D1F] tracking-tight">
          Device Management Dashboard
        </h1>
      </div>

      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#546FFF] hover:bg-[#4359D9] transition-colors rounded-xl text-white text-[14px] font-semibold">
          <Zap className="w-4 h-4 fill-current" />
          Upgrade Plan
        </button>
        
        <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
          <ChevronDown className="w-5 h-5 text-[#6F767E]" />
        </button>
      </div>
    </div>
  )
}

export default DeviceManagementHeader
