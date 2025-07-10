"use client";
import * as React from "react";
import { FiInfo } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";

interface OrderLineProps {
  label: string;
  amount: string;
  isPositive?: boolean;
  hasIcon?: boolean;
}

const OrderLine: React.FC<OrderLineProps> = ({
  label,
  amount,
  isPositive = false,
  hasIcon = false,
}) => {
  const amountColor = isPositive ? "text-green-500" : "text-zinc-800";

  return (
    <div className="flex justify-between items-center mt-3 w-full text-sm leading-6">
      <div className="flex gap-1 items-center text-zinc-500">
        <span>{label}</span>
        {hasIcon && <FiInfo className="w-[15px] h-[15px] text-gray-500" />}
      </div>
      <div className={`flex items-center ${amountColor}`}>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export const OrderSummary: React.FC = () => {
  return (
    <section className="flex flex-col py-2.5 mt-5 w-full bg-white rounded-lg">
      <div className="flex flex-col items-start pr-6 pl-2.5 w-full max-md:pr-5">
        <h2 className="text-base font-medium text-black">Đơn hàng</h2>

        <div className="flex gap-1.5 items-center mt-2">
          <span className="text-sm leading-6 text-zinc-500">2 sản phẩm.</span>
          <button className="flex gap-1 items-center text-blue-600 text-sm leading-6">
            <span>Xem thông tin</span>
            <HiChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 w-full border-t border-zinc-300" style={{ borderTopWidth: "0.5px" }}></div>

        {/* Các dòng đơn hàng */}
        <OrderLine label="Tổng tiền hàng" amount="1.190.000 đ" />
        <OrderLine label="Giảm giá trực tiếp" amount="-60.000 đ" isPositive />
        <OrderLine label="Giảm giá vận chuyển" amount="-57.000 đ" isPositive hasIcon />
        <OrderLine label="Voucher giảm giá" amount="-70.000 đ" isPositive />

        {/* Tổng cộng */}
        <div className="flex justify-between items-center mt-5 text-base font-medium text-zinc-800 w-full">
          <span>Tổng số tiền phải thanh toán</span>
        </div>

        <div className="self-end mt-2.5">
          <span className="text-lg text-rose-500 font-semibold">
            1.003.000 đ
          </span>
        </div>

        {/* Tiết kiệm */}
        <div className="self-end mt-2.5 text-sm leading-6 text-green-500 font-medium">
          Tiết kiệm <span className=" text-green-600">187.000 đ</span>
        </div>

        {/* VAT */}
        <p className="self-end mt-2.5 text-sm font-medium leading-6 text-zinc-500">
          Đã bao gồm VAT (nếu có)
        </p>
      </div>

      {/* Nút đặt hàng */}
      <button className="flex justify-center items-center px-20 py-3.5 mt-5 ml-2.5 text-xl text-rose-500 rounded-lg border border-rose-500 border-solid min-h-[49px] max-md:px-5 hover:bg-rose-50">
        <span>Đặt hàng</span>
      </button>
    </section>
  );
};
