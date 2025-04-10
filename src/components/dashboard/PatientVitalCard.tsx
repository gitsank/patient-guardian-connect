
import React from 'react';
import { cn } from '@/lib/utils';

interface PatientVitalCardProps {
  title: string;
  value: string | number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  icon: React.ReactNode;
}

export function PatientVitalCard({ title, value, unit, status, icon }: PatientVitalCardProps) {
  return (
    <div className="vital-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={cn(
            "p-2 rounded-full",
            status === 'normal' && 'bg-green-100 text-medical-success',
            status === 'warning' && 'bg-amber-100 text-medical-warning',
            status === 'critical' && 'bg-red-100 text-medical-alert'
          )}>
            {icon}
          </div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        </div>
        <div className={cn(
          "h-2.5 w-2.5 rounded-full",
          status === 'normal' && 'bg-medical-success',
          status === 'warning' && 'bg-medical-warning',
          status === 'critical' && 'bg-medical-alert pulse-animation'
        )} />
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className="ml-1 text-sm font-medium text-gray-500">{unit}</p>
        </div>
      </div>
    </div>
  );
}
