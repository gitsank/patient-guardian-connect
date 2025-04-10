
import React from 'react';
import { 
  Home, 
  Users, 
  Bell, 
  MessageSquare, 
  CalendarClock, 
  Settings, 
  BarChart, 
  ClipboardList, 
  LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home, current: true },
  { name: 'Patients', href: '/patients', icon: Users, current: false },
  { name: 'Alerts', href: '/alerts', icon: Bell, current: false },
  { name: 'Messages', href: '/messages', icon: MessageSquare, current: false },
  { name: 'Schedule', href: '/schedule', icon: CalendarClock, current: false },
  { name: 'Reports', href: '/reports', icon: BarChart, current: false },
  { name: 'Medical Records', href: '/records', icon: ClipboardList, current: false },
];

const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Logout', href: '/logout', icon: LogOut },
];

export function Sidebar() {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <h1 className="text-xl font-bold text-medical-primary">PatientGuardian</h1>
          </div>
          <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  item.current
                    ? 'bg-medical-light-gray text-medical-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-medical-primary',
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                )}
              >
                <item.icon
                  className={cn(
                    item.current ? 'text-medical-primary' : 'text-gray-400 group-hover:text-medical-primary',
                    'mr-3 h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
          <div className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Cardiologist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
