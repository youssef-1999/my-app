import { Card } from "@/components/ui/card";

export default function AddNewCard() {
  return (
    <div className="flex flex-col gap-4 w-full ">

      {/* Title */}
      <h2 className="text-xl font-semibold text-slate-800">Add New Card</h2>

      <Card className="rounded-3xl  shadow-sm p-6 space-y-7 flex flex-col items-stretch">

        {/* Top Section */}
        <div className="flex flex-col  sm:flex-row sm:items-start gap-4">

          {/* Icon like investments */}
         

           
            <p className="text-sm text-slate-400 max-w-xl mt-1">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder,
              with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Card Type */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-500">Card Type</label>
            <input
              type="text"
              placeholder="Classic"
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          {/* Name on Card */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-500">Name On Card</label>
            <input
              type="text"
              placeholder="My Cards"
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          {/* Card Number */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-500">Card Number</label>
            <input
              type="text"
              placeholder="**** **** **** ****"
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 outline-none tracking-widest"
            />
          </div>

          {/* Expiry */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-500">Expiration Date</label>
            <select
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 outline-none bg-white"
            >
              <option>25 January 2025</option>
              <option>25 February 2025</option>
              <option>25 March 2025</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="flex  pt-4">
          <button
            className="
              bg-blue-600 
              text-white 
              px-6 py-2 
              rounded-xl 
              text-sm 
              font-medium
              hover:bg-blue-700 
              transition
            "
          >
            Add Card
          </button>
        </div>

      </Card>
    </div>
  );
}
