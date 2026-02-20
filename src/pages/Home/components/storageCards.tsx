import { Network, Upload, UserPlus, Users } from "lucide-react";
import { StatCard } from "../../../components/shared/StatCard";
import { StorageCard } from "../../../components/shared/StorageCard";

const StorageCards = () => {
  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-3 mt-3">
      <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
        <StatCard
          title="Users"
          value="3,836"
          trend="15%"
          isUp={false}
          Icon={Users}
        />
        <StatCard
          title="Groups"
          value="316"
          trend="23%"
          isUp={true}
          Icon={UserPlus}
        />
        <StatCard
          title="Uploads"
          value="316"
          trend="23%"
          isUp={true}
          Icon={Upload}
        />
        <StatCard
          title="Departments"
          value="316"
          trend="23%"
          isUp={false}
          Icon={Network}
        />
      </div>

      <div className="col-span-12 lg:col-span-5">
        <StorageCard />
      </div>
    </div>
  );
};

export default StorageCards;
