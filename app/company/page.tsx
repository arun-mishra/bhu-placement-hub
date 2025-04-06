'use client';

import { Card } from "@/components/ui/card";
import StatCard from "@/components/atoms/StatCard";
import { Users, Briefcase, Target, LineChart } from "lucide-react";

export default function CompanyDashboard() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Company Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Active Jobs"
          value="15"
          description="Open positions"
          icon={<Briefcase className="h-6 w-6 text-blue-600" />}
          trend="+3"
        />
        
        <StatCard 
          title="Applications"
          value="234"
          description="Total applications received"
          icon={<Users className="h-6 w-6 text-green-600" />}
          trend="+28"
        />
        
        <StatCard 
          title="Interviews"
          value="45"
          description="Scheduled interviews"
          icon={<Target className="h-6 w-6 text-purple-600" />}
          trend="+12"
        />
        
        <StatCard 
          title="Hiring Rate"
          value="68%"
          description="Offer acceptance rate"
          icon={<LineChart className="h-6 w-6 text-orange-600" />}
          trend="+5%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {[
              { position: "Software Engineer", applicants: 45, status: "Active" },
              { position: "Product Manager", applicants: 32, status: "Active" },
              { position: "Data Analyst", applicants: 28, status: "Closing Soon" },
            ].map((job, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{job.position}</h3>
                  <p className="text-sm text-gray-500">{job.applicants} applicants</p>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  job.status === 'Active' 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-orange-600 bg-orange-100'
                }`}>
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
          <div className="space-y-4">
            {[
              { candidate: "John Doe", position: "Software Engineer", time: "Today, 3:00 PM" },
              { candidate: "Jane Smith", position: "Product Manager", time: "Tomorrow, 10:00 AM" },
              { candidate: "Mike Johnson", position: "Data Analyst", time: "Mar 25, 2:00 PM" },
            ].map((interview, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{interview.candidate}</h3>
                  <p className="text-sm text-gray-500">{interview.position}</p>
                </div>
                <span className="text-sm text-gray-600">{interview.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}