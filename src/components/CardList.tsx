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
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading cards:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading cards...</p>;
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-lg md:text-xl font-semibold text-slate-800">
        Card List
      </h2>

      <div className="flex flex-col gap-4">
        {cards.map((item) => (
          <Card
            key={item.id}
            className="w-full rounded-2xl p-4 sm:p-5 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              {/* LEFT PART */}
              <div className="flex items-start sm:items-center gap-4 flex-wrap">

                {/* Icon */}
                <div className={`p-3 rounded-full ${item.iconBg}`}>
                  <Banknote className={`w-5 h-5 ${item.iconColor}`} />
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-sm">

                  <div>
                    <p className="text-gray-500 text-xs">Card Type</p>
                    <p className="font-semibold">{item.cardType}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">Bank</p>
                    <p className="font-semibold text-[13px]">{item.bank}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">Card Number</p>
                    <p className="font-semibold">**** {item.number}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs">Name</p>
                    <p className="font-semibold">{item.name}</p>
                  </div>

                </div>
              </div>

              {/* RIGHT BUTTON */}
              <div className="flex justify-end md:justify-center">
                <button
                  className={`text-sm font-medium ${item.detailsColor} hover:underline`}
                >
                  View Details
                </button>
              </div>

            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
