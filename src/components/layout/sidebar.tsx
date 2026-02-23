import {
  LayoutDashboard,
  Building2,
  ClipboardList,
  Wallet,
  UserCircle,
  HardDrive,
  Settings,
  Smartphone,
  Presentation,
  Users,
  LifeBuoy,
} from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Building2, label: "Organization & Reg." },
  { icon: ClipboardList, label: "Reporting" },
  { icon: Wallet, label: "Billing" },
  { icon: UserCircle, label: "Account" },
  { icon: HardDrive, label: "Storage" },
  { icon: Settings, label: "Settings" },
  { icon: Smartphone, label: "Device Management" },
  { icon: Presentation, label: "Productivity Report" },
];

const Sidebar = () => {
  const { user } = useAppContext();
  const { firstname, lastname, email } = user || {};

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-3xl text-center font-bold text-[#1A1D1F]">Snaarp</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
              item.active
                ? "bg-[#EEF2FF] text-[#4F46E5]"
                : "text-[#6F767E] hover:bg-gray-50"
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}

        <div className="pt-10 pb-4">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-[#6F767E] hover:bg-gray-50 rounded-xl">
            <Users size={20} />
            <span className="font-medium text-sm">User Panel</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-[#6F767E] hover:bg-gray-50 rounded-xl">
            <LifeBuoy size={20} />
            <span className="font-medium text-sm">Support</span>
          </button>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-100 flex items-center space-x-3">
        <img
          src="https://picsum.photos/200/300"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="overflow-hidden">
          <p className="text-sm font-semibold truncate">
            {firstname} {lastname}
          </p>
          <p className="text-xs text-gray-500 truncate">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
