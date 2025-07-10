import * as React from "react";

interface PriceFilterProps {}

export const PriceFilter: React.FC<PriceFilterProps> = () => {
  return (
    <div className="mt-5 w-full max-w-[260px]">
      <h4 className="text-sm text-zinc-500 mb-3">Theo giá cả</h4>

      {/* Khung nhập giá */}
      <div className="flex gap-2 text-sm">
        {/* Từ */}
        <div className="flex flex-1 items-center px-2 py-2 rounded border border-zinc-300">
          <span className="text-gray-500">Từ</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-px h-4 bg-zinc-400" />
            <span className="text-gray-800">đ</span>
          </div>
        </div>

        {/* Đến */}
        <div className="flex flex-1 items-center px-2 py-2 rounded border border-zinc-300">
          <span className="text-gray-500">Đến</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-px h-4 bg-zinc-400" />
            <span className="text-gray-800">đ</span>
          </div>
        </div>
      </div>

      {/* Nút áp dụng */}
      <button className="w-full mt-4 py-2 text-sm text-blue-600 border border-blue-500 rounded hover:bg-blue-50">
        Áp Dụng
      </button>
    </div>
  );
};
