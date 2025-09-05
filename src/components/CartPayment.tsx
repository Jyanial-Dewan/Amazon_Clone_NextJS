import React, { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import { ProductType } from "../../type";
import { useAppSelector } from "@/hooks/hooks";
import { formatTwoDecimals } from "@/utility/utility";

const CartPayment = () => {
  const { productData } = useAppSelector((state) => state.productData);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: ProductType) => {
      if (item.quantity) {
        amt += item.price * item.quantity;
        return;
      }
    });
    setTotalAmount(amt);
  }, [productData]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for FREE Shipping by Choosing this option at
          checkout. See details....
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          {formatTwoDecimals(totalAmount)}
        </span>
      </p>
      <div className="flex flex-col items-center">
        <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
          Proceed to Buy
        </button>
        <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
          Please login to continue
        </p>
      </div>
    </div>
  );
};

export default CartPayment;
