"use client";
import * as React from "react";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { BiSolidCoupon } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";

interface Voucher {
  id: number;
  discount: string;
  applied: boolean;
}

export function VoucherSection() {
  const [vouchers, setVouchers] = useState<Voucher[]>([
    { id: 1, discount: "Giảm 70K", applied: true },
    { id: 2, discount: "Giảm 70K", applied: true },
  ]);

  const toggleVoucher = (id: number) => {
    setVouchers((prev) =>
      prev.map((voucher) =>
        voucher.id === id ? { ...voucher, applied: !voucher.applied } : voucher
      )
    );
  };

  return (
    <section className="px-2.5 pt-2.5 pb-5 max-w-full bg-white rounded-lg ">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center w-full text-sm leading-6">
        <h2 className="font-medium text-black">Trubie Voucher</h2>
        <div className="text-zinc-500">Tối đa 2 voucher</div>
      </div>

      {/* Danh sách voucher */}
      {vouchers.map((voucher) => (
        <div
          key={voucher.id}
          className={`relative gap-5 px-2.5 py-1.5 mt-4 w-full aspect-[5.091] ${
            voucher.applied ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <div
            className={`flex items-center gap-3 px-3 py-2 border-2 rounded-lg w-[260px] h-14 ${
              voucher.applied ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
          >
            <img
              src="Images/freeshipextra.png"
              className="w-10 h-10 object-cover rounded-md"
              alt="Voucher Icon"
            />
            <div className="flex-1 flex items-center gap-2 text-sm text-neutral-700">
              {voucher.discount}
            </div>
            <FiInfo className="w-[15px] h-[15px] text-blue-500" />
            <button
              onClick={() => toggleVoucher(voucher.id)}
              className={`px-3 py-1 text-sm border rounded-md transition ${
                voucher.applied
                  ? "text-blue-600 border-blue-500 hover:bg-blue-50"
                  : "text-blue-600 border-blue-500 bg-white hover:bg-blue-100"
              }`}
            >
              {voucher.applied ? "Bỏ chọn" : "Áp dụng"}
            </button>
          </div>
        </div>
      ))}

      {/* Chọn voucher khác */}
      <div className="flex gap-2 items-center mt-5">
        <BiSolidCoupon className="w-6 h-6 text-blue-500" />
        <div className="text-sm font-medium leading-6 text-blue-600">
          Chọn Voucher khác có sẵn
        </div>
        <div className="flex justify-center items-center px-px py-1.5 w-[19px]">
          <HiChevronRight className="w-4 h-auto text-blue-600" />
        </div>
      </div>
    </section>
  );
}
