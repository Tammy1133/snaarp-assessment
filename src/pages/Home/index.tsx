import Layout from "../../components/layout/dashboard";
import { ActivityReports } from "./components/appAndWebActivity";
import CloudNetworkHeader from "./components/cloudNetworkHeader";
import { DeviceManagementGrid } from "./components/deviceManagementGrid";
import DeviceManagementHeader from "./components/deviceManagementHeader";
import { EmailSection } from "./components/emailSection";
import FileSharingAndUser from "./components/fileSharingAndUser";
import { OnlineUsers } from "./components/onlineUsers";
import { ProductivityDashboard } from "./components/productivityDashboard";
import { ProductivityReportHeader } from "./components/productivityReportHeader";
import StorageCards from "./components/storageCards";

const Home = () => {
  return (
    <Layout>
      <CloudNetworkHeader></CloudNetworkHeader>
      <StorageCards></StorageCards>
      <FileSharingAndUser></FileSharingAndUser>
      <DeviceManagementHeader></DeviceManagementHeader>
      <DeviceManagementGrid></DeviceManagementGrid>
      <ProductivityReportHeader></ProductivityReportHeader>
      <ProductivityDashboard></ProductivityDashboard>
      <EmailSection></EmailSection>
      <OnlineUsers></OnlineUsers>
      <ActivityReports></ActivityReports>
    </Layout>
  );
};

export default Home;
