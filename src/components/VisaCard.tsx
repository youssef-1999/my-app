import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard } from "lucide-react";

interface CreditCardProps {
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  balance?: string;
  logo?: React.ReactNode;
  background: string;
  color?: string;
}

export function VisaCard({
  cardHolder,
  cardNumber,
  expiry,
  balance,
  logo,
  background,
  color,
}: CreditCardProps) {

  const maskedNumber = cardNumber
    .split(" ")
    .map((group, idx) => (idx < 3 ? "****" : group))
    .join(" ");

  return (
    <Card
      className={`
        w-full 
        h-auto
        min-h-[180px]
        shadow-lg relative overflow-hidden
        p-4 sm:p-6 
        rounded-2xl
        sm:flex-col
        flex
        ${background} 
        ${color === "white" ? "text-white" : "text-black"}

      `}
    >
      {/* Top Row */}
      <div className="flex justify-between items-start relative">
        {balance && (
          <div>
            <p className="text-[11px] sm:text-sm opacity-80">
              Balance
            </p>

            <Badge
              className={`
                bg-transparent font-bold 
                text-sm sm:text-lg
                px-0
                ${background.includes("blue") ? "text-white" : "text-black"}
              `}
            >
              {balance}
            </Badge>
          </div>
        )}

        {/* Logo */}
        {logo && (
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-lg sm:text-xl">
            {logo}
          </div>
        )}
      </div>

      <CardContent className="flex flex-col gap-5 mt-6 p-0">
        {/* Card Info */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[10px] sm:text-xs uppercase opacity-80">
              Card Holder
            </p>
            <p className="font-semibold text-sm sm:text-base truncate max-w-[140px]">
              {cardHolder}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] sm:text-xs uppercase opacity-80">
              Valid Thru
            </p>
            <p className="font-semibold text-sm sm:text-base">
              {expiry}
            </p>
          </div>
        </div>

        {/* Card Number */}
        <div className="
          flex justify-between items-center 
          px-3 py-3 sm:px-4
          rounded-lg
          bg-white/10 backdrop-blur-sm
        ">
          <p className="text-xs sm:text-base tracking-widest break-all">
            {maskedNumber}
          </p>

          <CreditCard className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </CardContent>
    </Card>
  );
}
