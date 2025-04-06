"use client";

import { Card } from "@/components/ui/card";
import StatCard from "@/components/atoms/StatCard";
import { BarChart3, Users, Clock, TrendingUp } from "lucide-react";

export default function StatisticsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Statistics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users"
          value="12,345"
          description="Active users this month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
          trend="+12%"
        />
        
        <StatCard 
          title="Average Time"
          value="24m"
          description="Time spent per session"
          icon={<Clock className="h-6 w-6 text-green-600" />}
          trend="+5%"
        />
        
        <StatCard 
          title="Engagement"
          value="87%"
          description="User interaction rate"
          icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
          trend="+8%"
        />
        
        <StatCard 
          title="Analytics"
          value="2.4k"
          description="Daily active users"
          icon={<BarChart3 className="h-6 w-6 text-orange-600" />}
          trend="+15%"
        />
      </div>

      <div className="mt-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Detailed Statistics</h2>
          <p className="text-gray-600">
            More detailed statistics and analytics will be displayed here. This is a placeholder for future content.
          </p>
        </Card>
      </div>
    </main>
  );
}