
export interface UserDetails {
  firstname: string;
  lastname: string;
  email: string;
  code: string;
}

export interface OnlineUser {
  id: number;
  status: 'online' | 'offline';
  name: string;
  avatar: string;
  location: string;
  organization: string;
  device: string;
  deviceIcon: string;
  activity: string;
  activityIcon: string;
  timeUsage: string;
}