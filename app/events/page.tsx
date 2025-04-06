'use client';

import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Upcoming Events</h1>

      <div className="grid grid-cols-1 gap-6">
        {[
          {
            title: "Tech Career Fair 2024",
            date: "March 25, 2024",
            time: "9:00 AM - 5:00 PM",
            location: "University Convention Center",
            type: "Career Fair",
            attendees: 500,
            description: "Connect with leading tech companies and explore career opportunities in software development, data science, and more."
          },
          {
            title: "Resume Building Workshop",
            date: "March 28, 2024",
            time: "2:00 PM - 4:00 PM",
            location: "Virtual Event",
            type: "Workshop",
            attendees: 100,
            description: "Learn how to create an impactful resume that highlights your skills and experiences effectively."
          },
          {
            title: "Industry Expert Talk: AI in Finance",
            date: "April 1, 2024",
            time: "3:00 PM - 5:00 PM",
            location: "Auditorium A",
            type: "Seminar",
            attendees: 200,
            description: "Join industry experts as they discuss the latest trends and applications of AI in the financial sector."
          }
        ].map((event, index) => (
          <Card key={index} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                <p className="text-gray-600 mt-1">{event.type}</p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Register
              </button>
            </div>

            <p className="mt-4 text-gray-600">{event.description}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>{event.attendees} Expected Attendees</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}