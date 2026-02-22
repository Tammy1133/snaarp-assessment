import DataTable, { type TableStyles } from 'react-data-table-component';
import { ChevronDown, Globe, Chrome } from 'lucide-react';

interface AppActivity {
  id: number;
  application: string;
  icon: string;
  totalUsers: number;
  totalHours: string;
  date: string;
}

interface WebProgress {
  name: string;
  icon: string;
  percentage: number;
  time: string;
}

const APP_DATA: AppActivity[] = [
  { id: 1, application: 'Google Chrome', icon: 'https://cdn.simpleicons.org/googlechrome/4285F4', totalUsers: 34, totalHours: '3 hours 12 minutes', date: '2024-06-26 15:33:49' },
  { id: 2, application: 'YouTube', icon: 'https://cdn.simpleicons.org/youtube/FF0000', totalUsers: 12, totalHours: '2 hours 8 minutes', date: '2024-05-26 12:45:41' },
  { id: 3, application: 'Youtube', icon: 'https://cdn.simpleicons.org/youtube/FF0000', totalUsers: 16, totalHours: '6 hours 45 minutes', date: '2024-05-21 16:28:21' },
  { id: 4, application: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/25D366', totalUsers: 49, totalHours: '1 hour 30 minutes', date: '2024-06-26 15:33:49' },
  { id: 4, application: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/25D366', totalUsers: 49, totalHours: '1 hour 30 minutes', date: '2024-06-26 15:33:49' },
  { id: 4, application: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/25D366', totalUsers: 49, totalHours: '1 hour 30 minutes', date: '2024-06-26 15:33:49' },
  { id: 4, application: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/25D366', totalUsers: 49, totalHours: '1 hour 30 minutes', date: '2024-06-26 15:33:49' },
];

const WEB_DATA: WebProgress[] = [
  { name: 'Chrome', icon: 'https://cdn.simpleicons.org/googlechrome/4285F4', percentage: 78, time: '5 hours 12 minutes' },
  { name: 'Gmail', icon: 'https://cdn.simpleicons.org/gmail/EA4335', percentage: 61, time: '2 hours 24 minutes' },
  { name: 'Firefox', icon: 'https://cdn.simpleicons.org/firefoxbrowser/FF7139', percentage: 45, time: '40 minutes' },
  { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/E4405F', percentage: 78, time: '5 hours 6 minutes' },
  { name: 'X.com', icon: 'https://cdn.simpleicons.org/x/000000', percentage: 59, time: '1 hours 8 minutes' },
  { name: 'X.com', icon: 'https://cdn.simpleicons.org/x/000000', percentage: 59, time: '1 hours 8 minutes' },
  { name: 'X.com', icon: 'https://cdn.simpleicons.org/x/000000', percentage: 59, time: '1 hours 8 minutes' },
];

const reportStyles: TableStyles = {
  headRow: {
    style: {
      backgroundColor: 'gainsboro',
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      borderBottomWidth: '0px',
      marginBottom: '8px',
    },
  },
  headCells: { style: { fontWeight: '800', color: '#4B5563' } },
  cells: { style: {  color: '#6B7280', fontWeight: '500' } },
  rows: { stripedStyle: { backgroundColor: '#F9FAFB' } },
};

export const ActivityReports = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 py-2 bg-[#F9FAFB] font-sans">
      
      <div className="flex-[1.5] bg-white rounded-[0.4rem] p-5 shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-gray-50 rounded-lg border border-gray-100"><Chrome size={20}/></div>
              <h2 className="text-lg font-black text-gray-900">App Activity Report</h2>
            </div>
            <p className="text-xs text-gray-400 font-medium">View your comprehensive organizational app report</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-4 px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500">All Organization <ChevronDown size={14}/></button>
            <button className="flex items-center gap-4 px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500">Month <ChevronDown size={14}/></button>
          </div>
        </div>

        <DataTable
          columns={[
            { name: 'Application', selector: r => r.application, cell: r => (
              <div className="flex items-center gap-3">
                <img src={r.icon} className="w-5 h-5" alt="" />
                <span className="font-bold text-gray-700">{r.application}</span>
              </div>
            )},
            { name: 'Total Users', selector: r => r.totalUsers, sortable: true },
            { name: 'Total Number of Hours', selector: r => r.totalHours },
            { name: 'Date', selector: r => r.date },
          ]}
          data={APP_DATA}
          customStyles={reportStyles}
          striped
        />
      </div>

      <div className="flex-1 bg-white rounded-[0.4rem] p-5 shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-gray-50 rounded-lg border border-gray-100"><Globe size={20}/></div>
              <h2 className="text-lg font-black text-gray-900">Web Activity</h2>
            </div>
            <p className="text-xs text-gray-400 font-medium">View your comprehensive organizational web report</p>
          </div>
          <button className="flex items-center gap-4 px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500">Month <ChevronDown size={14}/></button>
        </div>

        <div className="space-y-6">
          {WEB_DATA.map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <img src={item.icon} className="w-6 h-6 object-contain" alt="" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-bold text-gray-700">{item.name}</span>
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <span className="text-gray-300">{item.percentage}%</span>
                    <span className="text-gray-500">{item.time}</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#5356FF] rounded-full" 
                    style={{ width: `${item.percentage}%`, backgroundColor: '#22C55E' }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};