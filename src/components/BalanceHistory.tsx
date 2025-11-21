"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const data = [
  { name: "Jul", value: 120 },
  { name: "Aug", value: 320 },
  { name: "Sep", value: 450 },
  { name: "Oct", value: 780 },
  { name: "Nov", value: 260 },
  { name: "Dec", value: 540 },
  { name: "Jan", value: 680 },
];

export default function BalanceHistory() {
  return (
    <Card className="p-6 rounded-3xl shadow-md bg-white/70 backdrop-blur-md">
     

      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="20%" stopColor="#1E40FF" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#1E40FF" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />

              <Tooltip cursor={false} />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#1E40FF"
                strokeWidth={4}
                fill="url(#colorBlue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
