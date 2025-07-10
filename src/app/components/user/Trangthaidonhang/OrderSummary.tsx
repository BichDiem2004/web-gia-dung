import * as React from "react";
import { PriceRow } from "./PriceRow";

export const OrderSummary: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-md:mt-9">
      <div className="w-full text-sm">
        <PriceRow label="Tổng tiền hàng" amount="1.190.000 đ" />
        <PriceRow label="Giảm giá trực tiếp" amount="-60.000 đ" />
        <PriceRow label="Giảm giá vận chuyển" amount="-57.000 đ" hasIcon={true} />
        <PriceRow label="Voucher giảm giá" amount="-70.000 đ" />
        <PriceRow label="Thành tiền" amount="1.003.000 đ" isTotal={true} />
        <div className="flex gap-10 items-center mt-4 w-full leading-6">
          <div className="flex gap-2 items-center self-stretch my-auto w-40 text-zinc-500">
            <span className="self-stretch my-auto text-zinc-500">
              Phương thức thanh toán
            </span>
          </div>
          <div className="flex gap-2 items-center self-stretch my-auto font-medium whitespace-nowrap text-zinc-800 w-[67px]">
            <span className="self-stretch my-auto text-zinc-800">
              VNPAY
            </span>
          </div>
        </div>
      </div>
      <button className="flex gap-2.5 justify-center items-center self-end px-2.5 py-2 mt-9 text-base text-rose-500 rounded-lg border border-rose-500  hover:bg-rose-50 border-solid min-h-10">
        <span className="self-stretch my-auto text-rose-500">
          Huỷ đơn hàng
        </span>
      </button>
    </div>
  );
};
