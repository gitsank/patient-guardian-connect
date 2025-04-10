
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";

const heartRateData = [
  { time: '00:00', value: 72 },
  { time: '02:00', value: 68 },
  { time: '04:00', value: 65 },
  { time: '06:00', value: 70 },
  { time: '08:00', value: 75 },
  { time: '10:00', value: 78 },
  { time: '12:00', value: 82 },
  { time: '14:00', value: 79 },
  { time: '16:00', value: 76 },
  { time: '18:00', value: 85 },
  { time: '20:00', value: 79 },
  { time: '22:00', value: 74 },
];

const bloodPressureData = [
  { time: '00:00', systolic: 120, diastolic: 80 },
  { time: '02:00', systolic: 118, diastolic: 78 },
  { time: '04:00', systolic: 115, diastolic: 75 },
  { time: '06:00', systolic: 120, diastolic: 78 },
  { time: '08:00', systolic: 125, diastolic: 82 },
  { time: '10:00', systolic: 128, diastolic: 85 },
  { time: '12:00', systolic: 132, diastolic: 88 },
  { time: '14:00', systolic: 129, diastolic: 86 },
  { time: '16:00', systolic: 126, diastolic: 84 },
  { time: '18:00', systolic: 135, diastolic: 90 },
  { time: '20:00', systolic: 129, diastolic: 87 },
  { time: '22:00', systolic: 124, diastolic: 83 },
];

const temperatureData = [
  { time: '00:00', value: 37.0 },
  { time: '02:00', value: 36.9 },
  { time: '04:00', value: 36.8 },
  { time: '06:00', value: 36.9 },
  { time: '08:00', value: 37.1 },
  { time: '10:00', value: 37.3 },
  { time: '12:00', value: 37.4 },
  { time: '14:00', value: 37.3 },
  { time: '16:00', value: 37.2 },
  { time: '18:00', value: 37.5 },
  { time: '20:00', value: 37.3 },
  { time: '22:00', value: 37.1 },
];

const oxygenData = [
  { time: '00:00', value: 98 },
  { time: '02:00', value: 97 },
  { time: '04:00', value: 97 },
  { time: '06:00', value: 96 },
  { time: '08:00', value: 97 },
  { time: '10:00', value: 98 },
  { time: '12:00', value: 99 },
  { time: '14:00', value: 98 },
  { time: '16:00', value: 97 },
  { time: '18:00', value: 96 },
  { time: '20:00', value: 97 },
  { time: '22:00', value: 98 },
];

const timeRanges = ['24h', '12h', '6h', '1h'];

export function VitalsChart() {
  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Vital Signs</CardTitle>
          <CardDescription>Continuous monitoring data</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          {timeRanges.map((range) => (
            <Button 
              key={range}
              variant={range === '24h' ? 'default' : 'outline'} 
              size="sm"
              className="h-8 px-3"
            >
              {range}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="heart-rate" className="space-y-4">
          <TabsList>
            <TabsTrigger value="heart-rate">Heart Rate</TabsTrigger>
            <TabsTrigger value="blood-pressure">Blood Pressure</TabsTrigger>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="oxygen">Oxygen Level</TabsTrigger>
          </TabsList>
          
          <TabsContent value="heart-rate">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={heartRateData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Min: 65 bpm</span>
                <span>Avg: 75 bpm</span>
                <span>Max: 85 bpm</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="blood-pressure">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bloodPressureData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis domain={[70, 140]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="systolic" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="diastolic" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Systolic: 115-135 mmHg</span>
                <span>Diastolic: 75-90 mmHg</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="temperature">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis domain={[36.5, 37.8]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Min: 36.8°C</span>
                <span>Avg: 37.2°C</span>
                <span>Max: 37.5°C</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="oxygen">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={oxygenData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis domain={[94, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Min: 96%</span>
                <span>Avg: 97.3%</span>
                <span>Max: 99%</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
