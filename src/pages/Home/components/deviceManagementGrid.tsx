import { 
  Monitor, Users, Mail, AppWindow, Download, 
 Power, MoveUpRight, MoveDownLeft,
  Building2, Users2, UserSquare2, MailOpen,
  LucideZap,
  PlugZap2
} from "lucide-react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { DeviceManagementStatsCard } from "../../../components/shared/DeviceManagementStatsCard";
import DeviceManagementHeader from "./deviceManagementHeader";

export const DeviceManagementGrid = () => {
  return (
  <>
    <DeviceManagementHeader></DeviceManagementHeader>
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 bg-[#F9F9F9]">
      <DeviceManagementStatsCard 
        title="Number Of Devices" value="3,836" trend="15%" isUp={true} Icon={Monitor}
        subStats={[
          { label: "Plugged", value: "1,923", Icon: LucideZap, iconBg: "bg-gray-50" },
          { label: "Unplugged", value: "1,913", Icon: PlugZap2, iconBg: "bg-gray-50" }
        ]}
        details={[
          { label: "Windows", value: "1,403 devices", Icon: FaWindows, color: "text-[#00A4EF]" },
          { label: "Mac", value: "632 devices", Icon: FaApple, color: "text-[#1A1D1F]" },
          { label: "Linux", value: "1,801 devices", Icon: FaLinux, color: "text-[#1A1D1F]" }
        ]}
      />

      <DeviceManagementStatsCard 
        title="Users" value="3,836" trend="15%" isUp={false} Icon={Users}
        subStats={[
          { label: "Active", value: "592", Icon: Power, iconBg: "bg-green-50 text-green-600" },
          { label: "Offline", value: "3,836", Icon: Power, iconBg: "bg-red-50 text-red-600" }
        ]}
        details={[
          { label: "Organizations", value: "1,403 users", Icon: Building2 },
          { label: "Departments", value: "632 users", Icon: Users2 },
          { label: "Groups", value: "1,801 users", Icon: UserSquare2 }
        ]}
      />

      <DeviceManagementStatsCard 
        title="Emails" value="316" trend="23%" isUp={false} Icon={Mail}
        subStats={[
          { label: "Sent", value: "592", Icon: MoveUpRight, iconBg: "bg-gray-50" },
          { label: "Received", value: "3,836", Icon: MoveDownLeft, iconBg: "bg-gray-50" }
        ]}
        details={[
          { label: "Read", value: "1,403 emails", Icon: MailOpen },
          { label: "Unread", value: "632 emails", Icon: Mail }
        ]}
      />

      <div className="flex flex-col gap-2">
        <DeviceManagementStatsCard 
          title="Number of Apps" value="316" trend="23%" isUp={false} Icon={AppWindow} 
        />
        <DeviceManagementStatsCard 
          title="Number of Downloads" value="316" trend="23%" isUp={true} Icon={Download} 
        />
      </div>
    </div>
    </>
  );
};