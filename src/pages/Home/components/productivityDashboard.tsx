import React from "react";
import { Clock, Calendar, Users, Globe } from "lucide-react";
import { ProductivityStatCard } from "../../../components/shared/ProductivityStatCard";

export const ProductivityDashboard = () => {
  const stats = [
    {
      title: "Hours Productivity",
      value: "576",
      unit: "Hrs",
      trend: "15%",
      isUp: false,
      Icon: Clock,
    },
    {
      title: "Days Activity",
      value: "267",
      unit: "Days",
      trend: "15%",
      isUp: true,
      Icon: Calendar,
    },
    {
      title: "Users",
      value: "3,836",
      unit: "",
      trend: "15%",
      isUp: false,
      Icon: Users,
    },
    {
      title: "Web Activity",
      value: "178",
      unit: "Activities",
      trend: "15%",
      isUp: true,
      Icon: Globe,
    },
  ];

  return (
    <div className="w-full bg-[#F8F9FB] mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {stats.map((stat, index) => (
          <ProductivityStatCard
            key={index}
            title={stat.title}
            value={stat.value}
            unit={stat.unit}
            trend={stat.trend}
            isUp={stat.isUp}
            Icon={stat.Icon}    
          />
        ))}
      </div>
    </div>
  );
};