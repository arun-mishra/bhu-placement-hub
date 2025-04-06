'use client';

import { Card } from "@/components/ui/card";
import StatCard from "@/components/atoms/StatCard";
import { GraduationCap, BookOpen, Calendar, Trophy } from "lucide-react";

export default function StudentDashboard() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Applications"
          value="24"
          description="Active job applications"
          icon={<GraduationCap className="h-6 w-6 text-blue-600" />}
          trend="+3"
        />
        
        <StatCard 
          title="Interviews"
          value="5"
          description="Upcoming interviews"
          icon={<Calendar className="h-6 w-6 text-green-600" />}
          trend="+2"
        />
        
        <StatCard 
          title="Courses"
          value="8"
          description="Enrolled courses"
          icon={<BookOpen className="h-6 w-6 text-purple-600" />}
          trend="+1"
        />
        
        <StatCard 
          title="Achievements"
          value="12"
          description="Certifications earned"
          icon={<Trophy className="h-6 w-6 text-orange-600" />}
          trend="+4"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {[
              { company: "Google", role: "Software Engineer", status: "In Review" },
              { company: "Microsoft", role: "Product Manager", status: "Interview Scheduled" },
              { company: "Amazon", role: "Data Scientist", status: "Applied" },
            ].map((application, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{application.company}</h3>
                  <p className="text-sm text-gray-500">{application.role}</p>
                </div>
                <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                  {application.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {[
              { title: "Technical Interview", date: "Tomorrow, 2:00 PM", type: "Interview" },
              { title: "Resume Workshop", date: "Mar 25, 10:00 AM", type: "Workshop" },
              { title: "Career Fair", date: "Apr 1, 9:00 AM", type: "Event" },
            ].map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}