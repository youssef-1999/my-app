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

const yearlyData = [
  { year: 2016, value: 5000 },
  { year: 2017, value: 22000 },
  { year: 2018, value: 15000 },
  { year: 2019, value: 35000 },
  { year: 2020, value: 20000 },
  { year: 2021, value: 28000 },
];

export function YearlyTotalInvestment() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Title */}
      <h2 className="text-xl font-semibold text-slate-800">
        Yearly Total Investment
      </h2>

      {/* Card */}
      <Card className="rounded-3xl p-4 sm:p-6 bg-white shadow-sm w-full">

        <CardContent className="p-0">
          <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={yearlyData}
margin={{ top: 10, right: 20, left: 40, bottom: 0 }}
              >
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
                  stroke="#f59e0b"
                  strokeWidth={4}
                  dot={{ r: 5, fill: "#f59e0b" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
