import { Card } from "@/components/ui/card";

export function TrendingStock() {
  const stocks = [
    { no: "01.", name: "Trivago", price: "$520", return: "+5%", color: "text-green-500" },
    { no: "02.", name: "Canon", price: "$480", return: "+10%", color: "text-green-500" },
    { no: "03.", name: "Uber Food", price: "$350", return: "-3%", color: "text-red-500" },
    { no: "04.", name: "Nokia", price: "$940", return: "+2%", color: "text-green-500" },
    { no: "05.", name: "Tiktok", price: "$670", return: "-12%", color: "text-red-500" },
  ];

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Trending Stock</h2>

      <Card className="p-4 rounded-3xl bg-white shadow-sm w-full">
        <div className="grid grid-cols-4 text-sm font-semibold text-slate-500 mb-3">
          <p>SL No</p>
          <p>Name</p>
          <p>Price</p>
          <p>Return</p>
        </div>

        {stocks.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-4 py-2 text-sm items-center border-b last:border-none border-slate-200"
          >
            <p>{item.no}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p className={`${item.color} font-semibold`}>{item.return}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}
