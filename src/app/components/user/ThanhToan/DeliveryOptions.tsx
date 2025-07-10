"use client";
import * as React from "react";
import { useState } from "react";
import { FaShippingFast, FaHandHolding, FaBox } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export const DeliveryOptions: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<"fast" | "economy">("fast");

  return (
    <section className="flex overflow-hidden flex-col px-5 pt-5 pb-10 mt-5 w-full font-medium bg-white rounded-lg max-md:max-w-full">
      {/* Tiêu đề */}
      <div className="flex gap-2 items-center self-start text-base leading-tight text-zinc-800">
        <FaShippingFast className="text-[#2679ff] w-6 h-6" />
        <h2 className="text-zinc-800 font-medium">Chọn hình thức giao hàng</h2>
      </div>

      {/* Các nút chọn giao hàng */}
      <div className="flex flex-wrap gap-4 mt-5 text-sm leading-6">
        {/* Giao hàng hỏa tốc */}
        <button
          onClick={() => setSelectedMethod("fast")}
          className={`flex flex-col justify-center px-4 py-3 rounded-lg min-h-[47px] border transition-all duration-200 ${
            selectedMethod === "fast"
              ? "text-blue-600 bg-sky-50 border-blue-600"
              : "text-zinc-500 bg-white border-zinc-400"
          }`}
        >
          <div className="flex gap-2 items-center w-full">
            <FaShippingFast
              className={`w-5 h-5 ${
                selectedMethod === "fast" ? "text-blue-600" : "text-zinc-400"
              }`}
            />
            <span>Giao hàng hỏa tốc</span>
          </div>
        </button>

        {/* Giao hàng tiết kiệm */}
        <button
          onClick={() => setSelectedMethod("economy")}
          className={`flex flex-col justify-center px-4 py-3 rounded-lg min-h-[47px] border transition-all duration-200 ${
            selectedMethod === "economy"
              ? "text-blue-600 bg-sky-50 border-blue-600"
              : "text-zinc-500 bg-white border-zinc-400"
          }`}
        >
          <div className="flex gap-2 items-center w-full">
            <div className="relative w-6 h-6">
              <FaHandHolding
                className={`absolute w-5 h-5 ${
                  selectedMethod === "economy" ? "text-blue-600" : "text-zinc-400"
                }`}
              />
              <FaBox
                className={`absolute left-1 top-[-4px] w-3 h-3 ${
                  selectedMethod === "economy" ? "text-blue-600" : "text-zinc-400"
                }`}
              />
            </div>
            <span>Giao hàng tiết kiệm</span>
          </div>
        </button>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="mt-6 space-y-6 w-full">
        {/* SP1 */}
        <div className="relative">
          <div className="flex gap-2 absolute -top-3 left-3 bg-white text-green-500 text-xs font-medium px-2 py-0.5 rounded">
            <FaRegCalendarAlt className="w-4 h-4 text-green-500" />
            Dự kiến nhận hàng từ 27 tháng 7 - 02 tháng 8
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex items-center gap-4 py-2">
              <img
                src="Images/maysay2.jpg"
                className="w-[100px] h-[100px] object-contain"
                alt="Máy sấy"
              />
              <div className="gap-5">
                <div className="text-sm text-black">Máy sấy tóc MINI CWELL mẫu CO1HD</div>
                <div className="text-xs text-gray-500">SL: x1</div>
              </div>
            </div>
            <div className="flex flex-col text-sm items-start -space-y-1 -translate-x-1">
              <span className="text-zinc-500 line-through">750.000 đ</span>
              <span className="text-rose-500 font-semibold">690.000 đ</span>
            </div>
            <div className="flex flex-col gap-2 text-xs items-start -space-y-1 -translate-x-1">
              <span className="text-black">Phí giao hàng</span>
              <span className="text-green-500 ">MIỄN PHÍ</span>
            </div>
            <div className="flex flex-col text-xs items-start -space-y-1 -translate-x-1">
              <span className="text-zinc-500 line-through">34.000 đ</span>
            </div>
          </div>
        </div>

        {/* SP2 */}
        <div className="relative">
          <div className="flex gap-2 absolute -top-3 left-3 bg-white text-green-500 text-xs font-medium px-2 py-0.5 rounded">
            <FaRegCalendarAlt className="w-4 h-4 text-green-500" />
            Dự kiến nhận hàng từ 27 tháng 7 - 02 tháng 8
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex items-center gap-4 py-2">
              <img
                src="Images/mayuontoc.jpg"
                className="w-[100px] h-[100px] object-contain"
                alt="Máy uốn"
              />
              <div className="gap-5">
                <div className="text-sm text-black">Máy uốn tóc tự xoay</div>
                <div className="text-xs text-gray-500">SL: x1</div>
              </div>
            </div>
            <div className="text-rose-500 text-sm font-semibold">500.000 đ</div>
            <div className="flex flex-col gap-2 text-xs items-start -space-y-1 -translate-x-1">
              <span className="text-black">Phí giao hàng</span>
              <span className="text-green-500 ">MIỄN PHÍ</span>
            </div>
            <div className="flex flex-col text-xs items-start -space-y-1 -translate-x-1">
              <span className="text-zinc-500 line-through">34.000 đ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
