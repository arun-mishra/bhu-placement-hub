'use client';

import { Card } from "@/components/ui/card";
import { BookOpen, Users, FileText, Presentation, MessageSquare, Award } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Career Counseling",
            icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
            description: "One-on-one sessions with career experts to guide your professional journey",
            features: [
              "Personalized career planning",
              "Industry insights",
              "Goal setting assistance"
            ]
          },
          {
            title: "Resume Review",
            icon: <FileText className="h-8 w-8 text-green-600" />,
            description: "Professional review and optimization of your resume",
            features: [
              "ATS optimization",
              "Content improvement",
              "Format enhancement"
            ]
          },
          {
            title: "Mock Interviews",
            icon: <Users className="h-8 w-8 text-purple-600" />,
            description: "Practice interviews with industry professionals",
            features: [
              "Technical interviews",
              "Behavioral interviews",
              "Feedback sessions"
            ]
          },
          {
            title: "Skill Development",
            icon: <BookOpen className="h-8 w-8 text-orange-600" />,
            description: "Workshops and training sessions to enhance your skills",
            features: [
              "Technical workshops",
              "Soft skills training",
              "Industry certifications"
            ]
          },
          {
            title: "Presentation Skills",
            icon: <Presentation className="h-8 w-8 text-red-600" />,
            description: "Learn to present yourself effectively in professional settings",
            features: [
              "Public speaking",
              "Slide deck creation",
              "Body language training"
            ]
          },
          {
            title: "Certification Programs",
            icon: <Award className="h-8 w-8 text-yellow-600" />,
            description: "Industry-recognized certification courses",
            features: [
              "Technical certifications",
              "Professional certificates",
              "Course materials"
            ]
          }
        ].map((service, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
            </div>
            
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </Card>
        ))}
      </div>
    </main>
  );
}