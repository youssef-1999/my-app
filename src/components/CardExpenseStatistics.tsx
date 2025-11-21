"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "DBL Bank", value: 400, color: "#4F46E5" },     // Blue
  { name: "ABM Bank", value: 300, color: "#14B8A6" },     // Teal
  { name: "BRC Bank", value: 300, color: "#F472B6" },     // Pink
  { name: "MCP Bank", value: 200, color: "#FACC15" },     // Yellow
];

export function CardExpenseStatistics() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-slate-800">
        Card Expense Statistics
      </h2>

      <Card className="rounded-3xl p-6 bg-white shadow-sm w-full">
        <CardContent className="p-0 flex flex-col items-center justify-center">
          
          {/* Donut Chart */}
          <div className="w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {data.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <p className="text-sm text-slate-600">{item.name}</p>
              </div>
            ))}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
