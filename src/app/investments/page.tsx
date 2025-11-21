import InvestmentStats from '@/components/InvestmentStats'
import { MonthlyRevenue } from '@/components/MonthlyRevenue';
import { MyInvestment } from '@/components/MyInvestment';
import { TopBar } from '@/components/TopBar';
import { TrendingStock } from '@/components/TrendingStock';
import { YearlyTotalInvestment } from '@/components/YearlyTotalInvestment';

export default function Investments() {
  return (
    <div className="flex flex-col w-full">
<TopBar/>
    <div className="flex flex-col gap-10 bg-gray-100 p-6 w-full">

      {/* TOP STATS ROW */}
      <div className="w-full">
        <InvestmentStats />
      </div>

      {/* CHARTS ROW */}
      <div className="w-full flex flex-col lg:flex-row gap-6">

        {/* LEFT CHART */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <YearlyTotalInvestment />
        </div>

        {/* RIGHT CHART */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <MonthlyRevenue />
        </div>

      </div>

      {/* INVESTMENT & TRENDING STOCK ROW */}
      <div className="w-full flex flex-col lg:flex-row gap-6">

        {/* LEFT SIDE - My Investment */}
        <div className="w-full lg:w-3/5">
          <MyInvestment />
        </div>

        {/* RIGHT SIDE - Trending Stock */}
        <div className="w-full lg:w-2/5">
          <TrendingStock />
        </div>

      </div>

    </div>
    </div>
  );
}
