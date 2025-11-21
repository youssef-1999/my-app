import { Card } from "@/components/ui/card";
import { CreditCard, Lock, Apple } from "lucide-react";

export default function CardSetting() {
  const settings = [
    {
      title: "Block Card",
      description: "Instantly block your card",
      icon: <CreditCard className="text-orange-500 w-6 h-6" />,
      iconBg: "bg-orange-100",
    },
    {
      title: "Change Pin Code",
      description: "Choose another pin code",
      icon: <Lock className="text-blue-500 w-6 h-6" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Add to Google Pay",
      description: "Withdraw without any card",
      icon: <span className="text-pink-500 text-2xl font-bold">G</span>,
      iconBg: "bg-pink-100",
    },
    {
      title: "Add to Apple Pay",
      description: "Withdraw without any card",
      icon: <Apple className="text-teal-500 w-6 h-6" />,
      iconBg: "bg-teal-100",
    },
    {
      title: "Add to Apple Store",
      description: "Withdraw without any card",
      icon: <Apple className="text-teal-500 w-6 h-6" />,
      iconBg: "bg-teal-100",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Title */}
      <h2 className="text-xl font-semibold text-indigo-950">
        Card Setting
      </h2>

      {/* Main Card */}
      <Card className="p-1 rounded-3xl shadow-sm bg-white">

        {settings.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer  hover:bg-slate-50 p-3 rounded-xl transition"
          >

            <div
              className={`w-14 h-14  gap-2 rounded-2xl flex items-center justify-center ${item.iconBg}`}
            >
              {item.icon}
            </div>

            <div className="flex flex-col ">
              <p className="text-base font-semibold text-slate-800">
                {item.title}
              </p>
              <p className="text-sm text-indigo-400">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </Card>
    </div>
  );
}
