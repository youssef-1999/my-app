import { Card } from "@/components/ui/card";
import { DollarSign, BarChart3, RefreshCcw } from "lucide-react";

export default function InvestmentStats() {
  const stats = [
    {
      title: "Total Invested Amount",
      value: "$150,000",
      icon: <DollarSign className="text-white w-6 h-6" />,
      bg: "bg-teal-100",
      iconBg: "bg-teal-400",
    },
    {
      title: "Number of Investments",
      value: "1,250",
      icon: <BarChart3 className="text-white w-6 h-6" />,
      bg: "bg-pink-100",
      iconBg: "bg-pink-400",
    },
    {
      title: "Rate of Return",
      value: "+5.80%",
      icon: <RefreshCcw className="text-white w-6 h-6" />,
      bg: "bg-indigo-100",
      iconBg: "bg-indigo-400",
    },
  ];

  return (
    <div
      className="
        grid 
        gap-6 
        w-full 
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {stats.map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl px-6 py-4 bg-white shadow-sm w-full"
        >
          <div className="flex items-center gap-4">
            {/* Icon wrapper */}
            <div
              className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center`}
            >
              <div
                className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center`}
              >
                {item.icon}
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-lg font-semibold text-gray-800">
                {item.value}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
