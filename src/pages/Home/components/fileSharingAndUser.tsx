import { ActiveUsers } from "./activeUsers";
import { FileSharing } from "./fileSharingChart";

const FileSharingAndUser = () => {
  return (
    <div className="grid grid-cols-12 gap-2 mt-2">
      <div className="col-span-12 xl:col-span-6">
        <FileSharing />
      </div>

      <div className="col-span-12 xl:col-span-6">
        <ActiveUsers />
      </div>
    </div>
  );
};

export default FileSharingAndUser;
