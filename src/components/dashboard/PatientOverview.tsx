
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { HeartPulse, MessageCircle, ClipboardList, Clock } from 'lucide-react';

export function PatientOverview() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Patient Overview</CardTitle>
          <CardDescription>
            John Smith, 45 - Room 302
          </CardDescription>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            Message
          </Button>
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <ClipboardList className="h-4 w-4" />
            Medical Records
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="about" className="space-y-4">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="history">Medical History</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col space-y-3 rounded-md border p-4">
                <div className="flex items-center space-x-2">
                  <HeartPulse className="h-5 w-5 text-medical-primary" />
                  <h3 className="text-sm font-medium">Diagnosis</h3>
                </div>
                <p className="text-sm text-gray-500">Coronary Artery Disease</p>
              </div>

              <div className="flex flex-col space-y-3 rounded-md border p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-medical-primary" />
                  <h3 className="text-sm font-medium">Admission Date</h3>
                </div>
                <p className="text-sm text-gray-500">April 5, 2025</p>
              </div>

              <div className="flex flex-col space-y-3 rounded-md border p-4">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medical-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-sm font-medium">Allergies</h3>
                </div>
                <p className="text-sm text-gray-500">Penicillin, Peanuts</p>
              </div>

              <div className="flex flex-col space-y-3 rounded-md border p-4">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medical-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-sm font-medium">Doctor</h3>
                </div>
                <p className="text-sm text-gray-500">Dr. Sarah Johnson</p>
              </div>
            </div>
            
            <div className="rounded-md border p-4">
              <h3 className="mb-2 font-medium">Patient Information</h3>
              <div className="grid gap-1 text-sm">
                <div className="grid grid-cols-2 gap-1">
                  <p className="text-gray-500">Blood Type:</p>
                  <p>A+</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <p className="text-gray-500">Height:</p>
                  <p>180 cm</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <p className="text-gray-500">Weight:</p>
                  <p>75 kg</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <p className="text-gray-500">Emergency Contact:</p>
                  <p>Mary Smith (Wife) - 555-123-4567</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="mb-2 font-medium">Previous Conditions</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Hypertension (Diagnosed 2020)</li>
                  <li>Type 2 Diabetes (Diagnosed 2018)</li>
                  <li>Appendectomy (2015)</li>
                </ul>
              </div>
              
              <div className="rounded-md border p-4">
                <h3 className="mb-2 font-medium">Previous Hospitalizations</h3>
                <div className="space-y-3">
                  <div className="border-b pb-2">
                    <p className="font-medium">General Hospital</p>
                    <p className="text-sm text-gray-500">March 2023 - Pneumonia</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="font-medium">St. Mary's Hospital</p>
                    <p className="text-sm text-gray-500">January 2020 - Appendectomy</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="medications">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="mb-2 font-medium">Current Medications</h3>
                <div className="space-y-3">
                  <div className="border-b pb-2">
                    <div className="flex justify-between">
                      <p className="font-medium">Atorvastatin</p>
                      <p className="text-sm text-gray-500">20mg</p>
                    </div>
                    <p className="text-sm text-gray-500">Once daily, evening</p>
                  </div>
                  <div className="border-b pb-2">
                    <div className="flex justify-between">
                      <p className="font-medium">Metoprolol</p>
                      <p className="text-sm text-gray-500">50mg</p>
                    </div>
                    <p className="text-sm text-gray-500">Twice daily</p>
                  </div>
                  <div className="pb-2">
                    <div className="flex justify-between">
                      <p className="font-medium">Aspirin</p>
                      <p className="text-sm text-gray-500">81mg</p>
                    </div>
                    <p className="text-sm text-gray-500">Once daily</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notes">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="mb-2 font-medium">Medical Notes</h3>
                <div className="space-y-3">
                  <div className="border-b pb-2">
                    <div className="flex justify-between">
                      <p className="font-medium">Dr. Sarah Johnson</p>
                      <p className="text-sm text-gray-500">April 8, 2025</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Patient showing signs of improvement. Blood pressure stabilizing. Continue current medication regimen and monitor closely.
                    </p>
                  </div>
                  <div className="pb-2">
                    <div className="flex justify-between">
                      <p className="font-medium">Dr. Michael Chen</p>
                      <p className="text-sm text-gray-500">April 6, 2025</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Initial examination shows moderate coronary artery blockage. Scheduled for additional tests. Starting patient on standard medication protocol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
