
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const medications = [
  {
    id: 1,
    name: 'Atorvastatin',
    dose: '20mg',
    time: '08:00',
    status: 'completed',
  },
  {
    id: 2,
    name: 'Metoprolol',
    dose: '50mg',
    time: '12:00',
    status: 'upcoming',
  },
  {
    id: 3,
    name: 'Aspirin',
    dose: '81mg',
    time: '20:00',
    status: 'missed',
  },
  {
    id: 4,
    name: 'Metoprolol',
    dose: '50mg',
    time: '20:00',
    status: 'upcoming',
  },
];

export function MedicationSchedule() {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medical-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Medication Schedule
            </CardTitle>
            <CardDescription>
              Today's medication reminders
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {medications.map((medication) => (
            <div 
              key={medication.id}
              className={cn(
                "flex items-center justify-between gap-4 rounded-lg border p-3",
                medication.status === 'missed' && "border-l-4 border-l-medical-alert"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "rounded-full p-1.5",
                  medication.status === 'completed' && "bg-green-100 text-medical-success",
                  medication.status === 'upcoming' && "bg-blue-100 text-medical-primary",
                  medication.status === 'missed' && "bg-red-100 text-medical-alert"
                )}>
                  {medication.status === 'completed' ? (
                    <Check className="h-4 w-4" />
                  ) : medication.status === 'upcoming' ? (
                    <Clock className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{medication.name}</p>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      {medication.dose}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Clock className="mr-1 h-3 w-3 text-gray-500" />
                    <p className="text-xs text-gray-500">{medication.time}</p>
                  </div>
                </div>
              </div>
              
              {medication.status === 'upcoming' && (
                <Button size="sm" variant="outline">Remind</Button>
              )}
              {medication.status === 'missed' && (
                <Button size="sm" variant="outline" className="text-medical-alert">Reschedule</Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
