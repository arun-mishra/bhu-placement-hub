'use client';

import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function JobsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Available Jobs</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {[
          {
            title: "Senior Software Engineer",
            company: "Google",
            location: "Mountain View, CA",
            type: "Full-time",
            salary: "$150k - $200k",
            skills: ["React", "Node.js", "Python", "AWS"],
            posted: "2 days ago"
          },
          {
            title: "Product Manager",
            company: "Microsoft",
            location: "Redmond, WA",
            type: "Full-time",
            salary: "$130k - $180k",
            skills: ["Product Strategy", "Agile", "Data Analysis"],
            posted: "1 week ago"
          },
          {
            title: "Data Scientist",
            company: "Amazon",
            location: "Seattle, WA",
            type: "Full-time",
            salary: "$140k - $190k",
            skills: ["Python", "Machine Learning", "SQL", "Statistics"],
            posted: "3 days ago"
          }
        ].map((job, index) => (
          <Card key={index} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <p className="text-gray-600 mt-1">{job.company} • {job.location}</p>
              </div>
              <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                {job.type}
              </span>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-600">Salary: {job.salary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Posted {job.posted}</span>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}