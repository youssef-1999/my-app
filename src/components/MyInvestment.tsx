import { Card } from "@/components/ui/card";
import { Apple, Chrome, Car } from "lucide-react";

export function MyInvestment() {
  const investments = [
    {
      name: "Apple Store",
      category: "E-commerce, Marketplace",
      icon: <Apple className="text-pink-600 w-6 h-6" />,
      iconBg: "bg-pink-100",
      amount: "$54,000",
      return: "+16%",
      returnColor: "text-green-500",
    },
    {
      name: "Samsung Mobile",
      category: "E-commerce, Marketplace",
      icon: <Chrome className="text-blue-600 w-6 h-6" />,
      iconBg: "bg-blue-100",
      amount: "$25,300",
      return: "-4%",
      returnColor: "text-red-500",
    },
    {
      name: "Tesla Motors",
      category: "Electric Vehicles",
      icon: <Car className="text-yellow-600 w-6 h-6" />,
      iconBg: "bg-yellow-100",
      amount: "$8,200",
      return: "+25%",
      returnColor: "text-green-500",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-semibold text-slate-800">My Investment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {investments.map((item, i) => (
          <Card
            key={i}
            className="
              w-full
              p-4 
              rounded-3xl 
              shadow-sm 
              bg-white 

              /* Desktop: 3 columns inside card */
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              items-center gap-4
            "
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconBg}`}
              >
                {item.icon}
              </div>

              <div className="flex flex-col">
                <p className="text-lg font-semibold text-slate-800">{item.name}</p>
                <p className="text-[11px] text-slate-400">{item.category}</p>
              </div>
            </div>

            {/* MIDDLE SECTION */}
            <div className="flex flex-col text-center">
              <p className="text-lg font-semibold text-slate-800">{item.amount}</p>
              <p className="text-sm text-slate-400">Envestment Value</p>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col items-end justify-center">
              <p className={`text-lg font-semibold ${item.returnColor}`}>
                {item.return}
              </p>
              <p className="text-sm text-slate-400">Return Value</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
