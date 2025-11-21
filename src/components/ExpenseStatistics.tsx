"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ExpenseData {
  id: number;
  name: string;
  value: number;
  color: string;
}

export default function ExpenseStatistics() {
  const data: ExpenseData[] = [
    { id: 1, name: "Entertainment", value: 30, color: "#273259" },
    { id: 2, name: "Bill Expense", value: 15, color: "#FF8A00" },
    { id: 3, name: "Others", value: 35, color: "#0023F5" },
    { id: 4, name: "Investment", value: 20, color: "#FF00F5" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-md">
      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${Math.round((percent ?? 0) * 100)}% ${name}`
              }
              labelLine={false}
            >
              {data.map((entry) => (
                <Cell key={entry.id} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
