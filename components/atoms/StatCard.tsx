'use client';

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
  trend?: string;
}

export function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {trend && (
              <span className={cn(
                "text-sm font-medium",
                trend.startsWith('+') ? "text-green-600" : "text-red-600"
              )}>
                {trend}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        {icon && (
          <div className="rounded-full bg-gray-50 p-3">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export default StatCard