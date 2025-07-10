"use client";
import React, { useState } from 'react';

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex gap-3 items-center self-start mt-6">
      <label className="self-stretch my-auto w-20 text-base text-zinc-500">
        Số lượng
      </label>
      <div className="flex self-stretch my-auto rounded-none w-[120px]">
        {/* Nút trừ */}
        <button
          onClick={decreaseQuantity}
          className="flex items-center justify-center w-8 h-8 bg-white rounded-l-lg border border-gray-400"
          aria-label="Decrease quantity"
        >
          <span className="text-zinc-500 text-lg">-</span>         
        </button>
        <div className="flex items-center justify-center w-10 h-8 text-sm text-black text-center bg-white border-t border-b border-gray-400">
          {quantity}
        </div>
        {/* Nút cộng */}
        <button
          onClick={increaseQuantity}
          className="flex items-center justify-center w-8 h-8 bg-white rounded-r-lg border border-gray-400"
          aria-label="Increase quantity"
        >
          <span className="text-zinc-500 text-lg">+</span>
        </button>
      </div>
    </div>
  );
};
