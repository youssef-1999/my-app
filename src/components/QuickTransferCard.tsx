import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

export default function QuickTransferCard() {
  const users = [
    {
      name: "Livia Bator",
      role: "CEO",
      img: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Randy Press",
      role: "Director",
      img: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Workman",
      role: "Designer",
      img: "https://i.pravatar.cc/100?img=33",
    },
  ];

  return (
    <Card className="p-6 rounded-3xl shadow-sm bg-white">
      <CardContent className="space-y-28 p-0">

        {/* Avatars Section */}
        <div className="flex items-center justify-between">

          <div className="flex gap-6">
            {users.map((user, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="text-sm font-semibold mt-2 text-slate-900">
                  {user.name}
                </p>
                <p className="text-xs text-blue-500 font-medium">
                  {user.role}
                </p>
              </div>
            ))}
          </div>

          {/* Arrow Button */}
          <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-slate-100 transition">
            <ArrowRight className="text-slate-600 w-5 h-5" />
          </button>

        </div>

        {/* Input + Send */}
      <div className="flex items-center gap-4 w-full ">

  {/* Write amount text */}
  <p className="text-sm text-blue-400 font-medium whitespace-nowrap ">
    Write Amount
  </p>

  {/* Input Background */}
  <div className="flex items-center bg-slate-100 rounded-full px-5 py-2 flex-1 relative">
    <span className="text-sm font-medium text-slate-700">
      525.50
    </span>
  <Button
    className="
      bg-blue-600 
      hover:bg-blue-700 
      text-white 
      rounded-full 
      px-5 py-2 
      flex items-center gap-1 
      font-medium
      absolute 
      right-2
    "
  >
    Send <span className="ml-1">$525.50</span>
    <Send className="w-4 h-4" />
  </Button>
  </div>


</div>


      </CardContent>
    </Card>
  );
}
