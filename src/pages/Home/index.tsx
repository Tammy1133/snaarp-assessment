import Layout from "../../components/layout/dashboard";
import CloudNetworkHeader from "./components/cloudNetworkHeader";
import FileSharingAndUser from "./components/fileSharingAndUser";
import StorageCards from "./components/storageCards";

const Home = () => {
  return (
    <Layout>
      <CloudNetworkHeader></CloudNetworkHeader>
      <StorageCards></StorageCards>
      <FileSharingAndUser></FileSharingAndUser>
    </Layout>
  );
};

export default Home;
