"use client";
import * as React from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";

interface PaymentOption {
  id: string;
  label: string;
  iconUrl: string;
}

const paymentOptions: PaymentOption[] = [
  {
    id: "cash",
    label: "Thanh toán tiền mặt",
    iconUrl: "Images/tienmat.png",
  },
  {
    id: "vnpay",
    label: "VNPAY",
    iconUrl: "Images/vnpay.png",
  },
  {
    id: "momo",
    label: "Ví MOMO",
    iconUrl: "Images/momo.png",
  },
  {
    id: "zalopay",
    label: "Ví ZaloPay",
    iconUrl: "Images/zalopay.png",
  },
];

export const PaymentMethods: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = React.useState<string>("cash");

  return (
    <section className="flex overflow-hidden flex-col items-start pt-5 pr-20 pb-20 pl-5 mt-5 w-full text-base text-black bg-white rounded-lg max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-2 items-center text-base leading-tight">
        <h2 className="text-zinc-800 font-semibold">Chọn hình thức thanh toán</h2>
      </div>

      {paymentOptions.map((option) => (
        <div
          key={option.id}
          className="flex gap-4 items-center mt-8 cursor-pointer"
          onClick={() => setSelectedMethod(option.id)}
        >
          {selectedMethod === option.id ? (
            <FiCheckCircle className="text-blue-600 w-5 h-5" />
          ) : (
            <FiCircle className="text-gray-400 w-5 h-5" />
          )}

          <img
            src={option.iconUrl}
            alt={option.label}
            className="object-contain w-[30px] aspect-square"
          />
          <span className="text-zinc-800">{option.label}</span>
        </div>
      ))}
    </section>
  );
};
