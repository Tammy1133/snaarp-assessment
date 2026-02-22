import React from 'react';
import DataTable, { type TableColumn, type TableStyles } from 'react-data-table-component';
import { User, ChevronDown, ArrowUpDown } from 'lucide-react';
import type { OnlineUser } from '../../../types/usertype';

export const MOCK_ONLINE_USERS: OnlineUser[] = [
  {
    id: 1,
    status: 'online',
    name: 'Annette Black',
    avatar: 'https://i.pravatar.cc/150?u=annette',
    location: 'Ottawa, Canada',
    organization: 'MSBM, Ottawa',
    device: 'Windows',
    deviceIcon: 'https://cdn.simpleicons.org/apple/000000',
    activity: 'Google Chrome',
    activityIcon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    timeUsage: '3 hours 12 minutes',
  },
  {
    id: 2,
    status: 'online',
    name: 'Floyd Miles',
    avatar: 'https://i.pravatar.cc/150?u=floyd',
    location: 'Lagos, Nigeria',
    organization: 'MSBM, Lagos',
    device: 'Windows',
    deviceIcon: 'https://cdn.simpleicons.org/apple/000000',
    activity: 'Instagram',
    activityIcon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    timeUsage: '2 hours 8 minutes',
  },
  {
    id: 3,
    status: 'offline',
    name: 'Ronald Richards',
    avatar: 'https://i.pravatar.cc/150?u=ronald',
    location: 'Dubai, UAE',
    organization: 'MSBM, Dubai',
    device: 'Mac',
    deviceIcon: 'https://cdn.simpleicons.org/apple/000000',
    activity: 'Microsoft Teams',
    activityIcon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    timeUsage: '6 hours 45 minutes',
  },
  {
    id: 4,
    status: 'offline',
    name: 'Ronald Richards',
    avatar: 'https://i.pravatar.cc/150?u=ronald',
    location: 'Dubai, UAE',
    organization: 'MSBM, Dubai',
    device: 'Mac',
    deviceIcon: 'https://cdn.simpleicons.org/apple/000000',
    activity: 'Microsoft Teams',
    activityIcon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    timeUsage: '6 hours 45 minutes',
  },
  {
    id: 5,
    status: 'offline',
    name: 'Ronald Richards',
    avatar: 'https://i.pravatar.cc/150?u=ronald',
    location: 'Dubai, UAE',
    organization: 'MSBM, Dubai',
    device: 'Mac',
    deviceIcon: 'https://cdn.simpleicons.org/apple/000000',
    activity: 'Microsoft Teams',
    activityIcon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    timeUsage: '6 hours 45 minutes',
  },
];

const columns: TableColumn<OnlineUser>[] = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
    cell: row => (
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${row.status === 'online' ? 'bg-[#22C55E]' : 'bg-[#CBD5E1]'}`} />
        <img src={row.avatar} className="w-9 h-9 rounded-lg object-cover" alt="" />
        <span className="font-bold text-gray-800">{row.name}</span>
      </div>
    ),
  },
  {
    name: 'Location',
    selector: row => row.location,
    sortable: true,
  },
  {
    name: 'Organization',
    selector: row => row.organization,
    sortable: true,
  },
  {
    name: 'Device',
    sortable: true,
    cell: row => (
      <div className="flex items-center gap-3">
        <img src={row.deviceIcon} className="w-5 h-5 opacity-80" alt="" />
        <span className="font-medium text-gray-500">{row.device}</span>
      </div>
    ),
  },
  {
    name: 'Current Activity',
    sortable: true,
    cell: row => (
      <div className="flex items-center gap-3">
        <img src={row.activityIcon} className="w-5 h-5 object-contain" alt="" />
        <span className="font-medium text-gray-500">{row.activity}</span>
      </div>
    ),
  },
  {
    name: 'Time Usage',
    selector: row => row.timeUsage,
    sortable: true,
  },
];

const customStyles: TableStyles = {
  header: { style: { display: 'none' } },
  headRow: {
    style: {
      backgroundColor: 'gainsboro',
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      borderBottomWidth: '0px',
      marginBottom: '8px',
    },
  },
  headCells: {
    style: {
      fontSize: '13px',
      fontWeight: '800',
      color: '#4B5563',
      paddingLeft: '16px',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#6B7280',
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingLeft: '16px',
    },
  },
  rows: {
    style: { borderBottomColor: '#F9FAFB' },
    stripedStyle: { backgroundColor: '#F9FAFB' }, 
  },
};

interface Props {
  data?: OnlineUser[]; 
}

export const OnlineUsers: React.FC<Props> = ({ data = MOCK_ONLINE_USERS }) => {
  return (
    <div className="w-full bg-white rounded-[1.5rem] p-4 shadow-sm border border-gray-100 font-sans">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3 text-gray-900 mb-1">
            <div className="p-2 bg-gray-50 rounded-xl border border-gray-100">
              <User size={22} strokeWidth={2.5} />
            </div>
            <h2 className="text-xl font-black tracking-tight">Online Users</h2>
          </div>
          <p className="text-sm text-gray-400 font-medium">View your comprehensive online users</p>
        </div>

        <button className="flex items-center gap-6 px-5 py-2.5 border border-gray-100 rounded-2xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all">
          All Organization <ChevronDown size={18} />
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        sortIcon={<ArrowUpDown size={14} className="ml-2 text-gray-400" />}
        striped
        noHeader
        persistTableHead
        responsive
      />
    </div>
  );
};