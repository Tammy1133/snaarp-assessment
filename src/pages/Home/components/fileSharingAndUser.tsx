import { ActiveUsers } from "./activeUsers";
import { FileSharing } from "./fileSharingChart";

const FileSharingAndUser = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-6">
      <div className="col-span-12 lg:col-span-7">
        <FileSharing />
      </div>

      <div className="col-span-12 lg:col-span-5">
        <ActiveUsers />
      </div>
    </div>
  );
};

export default FileSharingAndUser;
