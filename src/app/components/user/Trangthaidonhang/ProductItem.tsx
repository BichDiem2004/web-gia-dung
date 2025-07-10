import * as React from "react";
import { FiMessageCircle } from "react-icons/fi";

interface ProductItemProps {
  image: string;
  name: string;
  quantity: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ image, name, quantity }) => {
  return (
    <div className="flex flex-wrap items-center w-full max-md:max-w-full">
      <div className="flex gap-4 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <img
          src={image}
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[110px]"
          alt={name}
        />
        <div className="self-stretch my-auto min-h-14 min-w-60 w-[328px]">
          <h4 className="flex-1 text-base text-black">{name}</h4>
          <p className="mt-4 text-sm text-zinc-500">{quantity}</p>
        </div>
      </div>
      <div className="ml-auto">
            <button className="flex gap-2 px-3 py-2 justify-center items-center text-sm font-medium text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 border-solid min-h-[42px]">
                <FiMessageCircle className="w-5 h-5 text-blue-600" />
                <span>Chat Ngay</span>
            </button>
     </div>

    </div>
  );
};
