import AddNewCard from '@/components/AddNewCard'
import { CardExpenseStatistics } from '@/components/CardExpenseStatistics'
import { CardList } from '@/components/CardList'
import CardSetting from '@/components/CardSetting'
import { TopBar } from '@/components/TopBar'
import { VisaCard } from '@/components/VisaCard'
import { Cpu } from 'lucide-react'
import React from 'react'

function CreditCards() {
  return (
    <div className="flex flex-col w-full">
<TopBar/>
    <section className="bg-gray-100 p-4 sm:p-6 flex flex-col gap-8 w-full">

      {/* ========== My Cards Section ========== */}
      <div className="flex flex-col gap-4">

        <h1 className="text-xl font-bold">My Cards</h1>

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
            background="bg-gradient-to-r from-blue-600 to-blue-400"
            logo={<Cpu />}
            color="white"
          />

          <VisaCard
            cardHolder="John Doe"
            cardNumber="1234 5678 9012 3456"
            expiry="12/24"
            balance="$1,000.00"
            background="bg-gradient-to-r from-gray-200 to-gray-400"
            logo={<Cpu />}
            color="black"
          />
        </div>
      </div>

      {/* ========== Statistics + Card List ========== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <CardExpenseStatistics />
        <CardList />
      </div>

      {/* ========== Add New Card + Card Setting ========== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

        {/* Add Card takes 2 columns on desktop */}
        <div className="lg:col-span-2 w-full">
          <AddNewCard />
        </div>

        {/* Card Setting takes 1 column */}
        <div className="lg:col-span-1 w-full">
          <CardSetting />
        </div>

      </div>

    </section>
    </div>
  )
}

export default CreditCards
