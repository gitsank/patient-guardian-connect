
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Heart, Thermometer, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const alerts = [
  {
    id: 1,
    type: 'heart-rate',
    message: 'Heart rate exceeded 110 BPM',
    time: '18:32',
    icon: Heart,
    severity: 'high',
    acknowledged: false,
  },
  {
    id: 2,
    type: 'temperature',
    message: 'Temperature elevated to 38.2°C',
    time: '16:15',
    icon: Thermometer,
    severity: 'medium',
    acknowledged: false,
  },
  {
    id: 3,
    type: 'activity',
    message: 'Unusual activity detected',
    time: '13:47',
    icon: Activity,
    severity: 'low',
    acknowledged: true,
  },
  {
    id: 4,
    type: 'heart-rate',
    message: 'Heart rate below 55 BPM',
    time: '09:20',
    icon: Heart,
    severity: 'medium',
    acknowledged: true,
  },
];

export function AlertsLog() {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-medical-alert" />
              Recent Alerts
            </CardTitle>
            <CardDescription>
              Patient notifications from device
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id}
              className={cn(
                "flex items-start gap-4 rounded-lg border p-3",
                !alert.acknowledged && "border-l-4",
                alert.severity === 'high' && !alert.acknowledged && "border-l-medical-alert",
                alert.severity === 'medium' && !alert.acknowledged && "border-l-medical-warning",
                alert.severity === 'low' && !alert.acknowledged && "border-l-medical-success"
              )}
            >
              <div className={cn(
                "mt-0.5 rounded-full p-1.5",
                alert.severity === 'high' && "bg-red-100 text-medical-alert",
                alert.severity === 'medium' && "bg-amber-100 text-medical-warning",
                alert.severity === 'low' && "bg-green-100 text-medical-success"
              )}>
                <alert.icon className="h-4 w-4" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{alert.message}</p>
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {alert.acknowledged ? "Acknowledged" : "Not acknowledged"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
