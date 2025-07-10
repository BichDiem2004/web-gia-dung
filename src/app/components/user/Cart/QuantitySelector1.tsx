"use client";
import * as React from "react";

interface QuantitySelector1Props {
  quantity: number;
  onQuantityChange?: (newQuantity: number) => void;
}

export function QuantitySelector1({
  quantity,
  onQuantityChange,
}: QuantitySelector1Props) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange?.(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange?.(quantity + 1);
  };

  return (
    <div className="flex items-center mt-2">
      {/* Nút trừ */}
      <button
        onClick={handleDecrease}
        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-400 rounded-l"
        aria-label="Giảm số lượng"
      >
        <span className="text-zinc-500 text-lg font-semibold">−</span>
      </button>

      {/* Hiển thị số lượng */}
      <div className="w-10 h-8 flex items-center justify-center text-sm text-black bg-white border-t border-b border-gray-400">
        {quantity}
      </div>

      {/* Nút cộng */}
      <button
        onClick={handleIncrease}
        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-400 rounded-r"
        aria-label="Tăng số lượng"
      >
        <span className="text-zinc-500 text-lg font-semibold">+</span>
      </button>
    </div>
  );
}
