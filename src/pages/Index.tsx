
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PatientVitalCard } from '@/components/dashboard/PatientVitalCard';
import { PatientOverview } from '@/components/dashboard/PatientOverview';
import { VitalsChart } from '@/components/dashboard/VitalsChart';
import { AlertsLog } from '@/components/dashboard/AlertsLog';
import { MedicationSchedule } from '@/components/dashboard/MedicationSchedule';
import { Heart, Activity, Thermometer, Droplets } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Patient Dashboard</h1>
          <div className="flex items-center gap-x-2">
            <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-medical-success">
              <span className="h-1.5 w-1.5 rounded-full bg-medical-success animate-pulse" />
            </span>
            <span className="text-sm font-medium text-gray-500">Device Connected</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PatientVitalCard 
            title="Heart Rate" 
            value={85} 
            unit="bpm" 
            status="warning" 
            icon={<Heart className="h-5 w-5" />} 
          />
          <PatientVitalCard 
            title="Temperature" 
            value={37.5} 
            unit="°C" 
            status="normal" 
            icon={<Thermometer className="h-5 w-5" />} 
          />
          <PatientVitalCard 
            title="Blood Pressure" 
            value="135/90" 
            unit="mmHg" 
            status="critical" 
            icon={<Activity className="h-5 w-5" />} 
          />
          <PatientVitalCard 
            title="Oxygen Level" 
            value={97} 
            unit="%" 
            status="normal" 
            icon={<Droplets className="h-5 w-5" />} 
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <VitalsChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PatientOverview />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AlertsLog />
          <MedicationSchedule />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
