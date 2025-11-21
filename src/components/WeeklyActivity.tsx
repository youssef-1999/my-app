"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent,  } from "@/components/ui/card";


export default function WeeklyActivity() {
  const data= [
    { day: "Sat", deposit: 500, withdraw: 230 },
    { day: "Sun", deposit: 350, withdraw: 120 },
    { day: "Mon", deposit: 330, withdraw: 250 },
    { day: "Tue", deposit: 480, withdraw: 360 },
    { day: "Wed", deposit: 140, withdraw: 190 },
    { day: "Thu", deposit: 390, withdraw: 230 },
    { day: "Fri", deposit: 410, withdraw: 330 }
  ]

  return (
    <Card className="w-full rounded-2xl  p-4 shadow-sm">
    

      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="20%">
              <CartesianGrid stroke="#F2F4F7" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "#7E8B9A", fontSize: 12 }} />
              <YAxis tick={{ fill: "#7E8B9A", fontSize: 12 }} />

              <Tooltip
                cursor={{ fill: "#F5F5F5" }}
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />

              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                wrapperStyle={{ marginBottom: 20 }}
                formatter={(value) => (
                  <span style={{ color: "#7E8B9A" }}>{value}</span>
                )}
              />

              {/* Deposit = teal */}
              <Bar dataKey="deposit" fill="#12D8C8" radius={[6, 6, 0, 0]} />

              {/* Withdraw = dark blue (in image) OR pink if you prefer legend */}
              <Bar dataKey="withdraw" fill="#0011FF" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
