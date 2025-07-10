"use client";
import * as React from "react";
import { FiTrash } from "react-icons/fi";

export function CartHeader() {
  return (
    <div className="flex items-center justify-between px-5 py-2.5 w-full bg-white rounded-lg text-sm">
      {/* Checkbox và tổng sản phẩm */}
      <div className="flex items-center gap-2 text-black text-xs">
        <input type="checkbox" className="w-4 h-4 border border-black" />
        <span className="text-sm font-medium">Tất cả (2 sản phẩm)</span>
      </div>

      {/* Tiêu đề các cột */}
      <div className="flex items-center gap-10 text-zinc-500 text-sm whitespace-nowrap">
        <span className="w-20 text-center">Đơn giá</span>
        <span className="w-20 text-center">Số lượng</span>
        <span className="w-24 text-center">Thành tiền</span>
        <div className="flex items-center gap-1 w-16 justify-center">
          <span>Xoá</span>
          <FiTrash className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
