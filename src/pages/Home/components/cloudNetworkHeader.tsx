import { Globe, ChevronDown } from "lucide-react";

const CloudNetworkHeader = () => {
  return (
    <div className="w-full bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
          <Globe size={20} />
        </div>
        <h2 className="text-lg font-bold text-[#1A1D1F]">Cloud Network</h2>
      </div>

      <button className="text-gray-400 hover:text-gray-600 transition-colors">
        <ChevronDown size={20} />
      </button>
    </div>
  );
};

export default CloudNetworkHeader;
