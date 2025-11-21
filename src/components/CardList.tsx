"use client";

import { Card } from "@/components/ui/card";
import { Banknote } from "lucide-react";
import { useEffect, useState } from "react";

interface CardItem {
  id: number;
  cardType: string;
  bank: string;
  number: string;
  name: string;
  iconBg: string;
  iconColor: string;
  detailsColor: string;
}

export function CardList() {
const [cards, setCards] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/cardList")
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading cards:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading cards...</p>;
  }


  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-semibold text-slate-800">Card List</h2>

      <div className="flex flex-col  space-y-4 gap-4">
        {cards.map((item, i) => (
          <Card
            key={i}
            className="
              w-full p-5 rounded-3xl shadow-sm
              flex items-center justify-between
            "
          >
            {/* Left Section */}
            <div className="flex items-center gap-4">
              
              {/* Icon */}
              <div className={`p-3 rounded-full ${item.iconBg}`}>
                <Banknote className={`${item.iconColor}`} />
              </div>

              {/* Card Type */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Card Type</p>
                <p className="font-semibold">{item.cardType}</p>
              </div>

              {/* Bank */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Bank</p>
                <p className="font-semibold text-[10px]">{item.bank}</p>
              </div>

              {/* Number */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Card Number</p>
                <p className="font-semibold">**** {item.number}</p>
              </div>

              {/* Name */}
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Namian Card</p>
                <p className="font-semibold">{item.name}</p>
              </div>
            <button className={`text-sm font-medium ${item.detailsColor}`}>
              View Details
            </button>
            </div>

            {/* Details */}
          </Card>
        ))}
      </div>
    </div>
  );
}
