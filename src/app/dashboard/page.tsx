import BalanceHistory from "@/components/BalanceHistory";
import ExpenseStatistics from "@/components/ExpenseStatistics";
import QuickTransferCard from "@/components/QuickTransferCard";
import { TopBar } from "@/components/TopBar";
import TransactionList from "@/components/TransactionList";
import { VisaCard } from "@/components/VisaCard";
import WeeklyActivity from "@/components/WeeklyActivity";
import { Cpu } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full">
<TopBar/>
    <div className="flex flex-col bg-gray-100 w-full min-h-screen p-4 sm:p-6 space-y-6">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT AREA */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* My Cards Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">My Cards</h1>
              <p className="text-sm font-medium text-blue-600 cursor-pointer">
                See all
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              <VisaCard
                cardHolder="John Doe"
                cardNumber="1234 5678 9012 3456"
                expiry="12/24"
                balance="$1,000.00"
                background="bg-gradient-to-r from-blue-600 to-blue-400"
                logo={<Cpu />}
                color="white"
              />

              <VisaCard
                cardHolder="John Doe"
                cardNumber="1234 5678 9012 3456"
                expiry="12/24"
                balance="$1,000.00"
                background="bg-gradient-to-r from-gray-200 to-gray-300"
                logo={<Cpu />}
                color="black"
              />
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold ">Weekly Activity</h1>
          </div>
          <WeeklyActivity />

        </div>

        {/* RIGHT AREA */}
        <div className="flex flex-col gap-6">

          {/* Transactions */}
          <div>
            <h1 className="text-xl font-bold mb-3">Recent Transactions</h1>
            <TransactionList />
          </div>

          {/* Expense Stats */}
          <div>
            <h1 className="text-xl font-bold mb-3">Expense Statistics</h1>
            <ExpenseStatistics />
          </div>

        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Quick Transfer */}
        <div>
          <h1 className="text-xl font-bold mb-3">Quick Transfer</h1>
          <QuickTransferCard />
        </div>

        {/* Balance History */}
        <div>
          <h1 className="text-xl font-bold mb-3">Balance History</h1>
          <BalanceHistory />
        </div>

      </div>

    </div>
    </div>
  );
}
