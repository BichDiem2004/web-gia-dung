"use client";
import * as React from "react";
import { FiMapPin, FiEdit } from "react-icons/fi";

export const ShippingAddress: React.FC = () => {
  return (
    <section className="flex flex-col py-5 px-4 w-full bg-white rounded-lg">
      {/* Tiêu đề */}
      <div className="flex items-center gap-2 text-base font-medium text-zinc-800 mb-2">
        <FiMapPin className="text-blue-600 w-5 h-5" />
        <h2>Địa chỉ nhận hàng</h2>
      </div>

      {/* Nội dung */}
      <div className="flex flex-wrap justify-between items-center w-full text-sm text-black gap-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold">Nguyễn Thành Trung (+84) 799456985</span>
          <span className="">
            825 Cách mạng Tháng Tám, Phường 12, Quận 10, TP. Hồ Chí Minh
          </span>
          <span className="px-2 py-[2px] text-xs text-blue-600 border border-blue-600 rounded-md">
            Mặc định
          </span>
        </div>

        <button className="flex items-center gap-1 text-sm text-blue-800 hover:underline">
          Thay đổi <FiEdit className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
