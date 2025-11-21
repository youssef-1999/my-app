"use client";

import { CreditCard, BadgeDollarSign , DollarSign } from "lucide-react";

interface TransactionItemProps {
  icon: React.ReactNode;
  bg: string;
  title: string;
  date: string;
  amount: string;
  amountColor: string;
}

function TransactionItem({ icon, bg, title, date, amount, amountColor }: TransactionItemProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bg}`}>
        {icon}
      </div>

      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>

      <div className="ml-auto font-semibold" style={{ color: amountColor }}>
        {amount}
      </div>
    </div>
  );
}

export default function TransactionList() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm space-y-2 max-w-sm">
      <TransactionItem
        icon={<CreditCard className="text-yellow-600" />}
        bg="bg-yellow-100"
        title="Deposit from my Card"
        date="28 January 2021"
        amount="-850"
        amountColor="#FF4D4D"
      />

      <TransactionItem
        icon={<BadgeDollarSign  className="text-blue-600" />}
        bg="bg-blue-100"
        title="Deposit Paypal"
        date="25 January 2021"
        amount="+2,500"
        amountColor="#22C55E"
      />

      <TransactionItem
        icon={<DollarSign className="text-green-600" />}
        bg="bg-green-100"
        title="Jemi Wilson"
        date="21 January 2021"
        amount="+5,400"
        amountColor="#22C55E"
      />
    </div>
  );
}
