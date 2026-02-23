import { Network, Upload, UserPlus, Users } from "lucide-react";
import { StatCard } from "../../../components/shared/StatCard";
import { StorageCard } from "../../../components/shared/StorageCard";
import CloudNetworkHeader from "./cloudNetworkHeader";

const StorageCards = () => {
  return (
    <>
        <CloudNetworkHeader />
    <div className="grid grid-cols-12 gap-x-2 gap-y-3  ">
      <div className="col-span-12 xl:col-span-7 grid grid-cols-2 gap-2 h-full">
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

      <div className="col-span-12 xl:col-span-5 h-full">
        <StorageCard />
      </div>
    </div>
    </>

  );
};

export default StorageCards;
