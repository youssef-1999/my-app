"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const monthlyData = [
  { year: 2016, value: 12000 },
  { year: 2017, value: 18000 },
  { year: 2018, value: 27000 },
  { year: 2019, value: 24000 },
  { year: 2020, value: 20000 },
  { year: 2021, value: 34000 },
];

export function MonthlyRevenue() {
  return (
    <>
        <h2 className="text-xl font-semibold text-slate-800">Monthly Revenue</h2>
    <Card className="rounded-3xl p-6 bg-white shadow-sm w-full">
     

      <CardContent className="p-0 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData} margin={{ top: 10, right: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v.toLocaleString()}`}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={4}
              dot={{ r: 5, fill: "#06b6d4" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    </>
  );
}
