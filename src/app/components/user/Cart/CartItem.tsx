"use client";
import * as React from "react";
import { QuantitySelector1 } from "./QuantitySelector1";
import { FiTrash } from "react-icons/fi";

interface CartItemProps {
  productName: string;
  productImage: string;
  originalPrice: string;
  salePrice: string;
  stockCount?: number;
  onRemove?: () => void;
}

export function CartItem({
  productName,
  productImage,
  originalPrice,
  salePrice,
  stockCount,
  onRemove,
}: CartItemProps) {
  const [quantity, setQuantity] = React.useState(1); // State quản lý số lượng

  return (
    <div className="flex flex-wrap gap-9 mt-5 max-w-full text-sm w-[579px]">
      <div className="flex flex-auto gap-2 items-center text-black min-h-[118px]">
        <img
          src={productImage}
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.73] w-[86px]"
          alt={productName}
        />
        <h3 className="self-stretch my-auto w-[328px]">{productName}</h3>
      </div>

      <div className="flex flex-col items-end">
        <div className="text-center text-zinc-500">{originalPrice}</div>
        <div className="mt-2 font-semibold text-zinc-800">{salePrice}</div>

        <div className="flex flex-col mt-2 max-w-full w-[108px]">
          <QuantitySelector1 quantity={quantity} onQuantityChange={setQuantity} />
          {stockCount && (
            <div className="mt-2 text-orange-500">Còn {stockCount} sản phẩm</div>
          )}
        </div>

        <button
          className="flex gap-2 justify-center items-center mt-2 text-sm leading-6 whitespace-nowrap text-zinc-500"
          onClick={onRemove}
        >
          <span>Xoá</span>
          <FiTrash className="object-contain shrink-0 aspect-[0.95] w-[18px]" />
        </button>
      </div>
    </div>
  );
}
