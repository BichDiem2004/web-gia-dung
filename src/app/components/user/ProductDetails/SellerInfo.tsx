import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiTwotoneShop } from "react-icons/ai";

export const SellerInfo = () => {
  return (
    <div className="flex flex-col items-start p-5 w-full bg-white rounded-lg">
      <div className="flex gap-2 items-center whitespace-nowrap">
        <img
          src="/Images/logoelmich.png"
          className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[58px]"
          alt="Seller avatar"
        />
        <div className="self-stretch my-auto w-[120px]">
          <h3 className="text-black">elmich.official</h3>
          <div className="flex items-center mt-2 w-full">
            <span className=" text-black w-[26px]">4,3</span>
            <FaStar className="text-yellow-400 w-5 h-5" />
            <FaStar className="text-yellow-400 w-5 h-5" />
            <FaStar className="text-yellow-400 w-5 h-5" />
            <FaStar className="text-yellow-400 w-5 h-5" />
            <FaRegStar className="text-yellow-400 w-5 h-5" />
            <span className=" text-zinc-500">(1k+)</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center mt-5">
        <span className="self-stretch my-auto text-zinc-500">Sản phẩm</span>
        <span className="self-stretch my-auto text-blue-600">180</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <span className="self-stretch my-auto text-zinc-500">Người theo dõi</span>
        <span className="self-stretch my-auto text-blue-600">144K</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <span className="self-stretch my-auto text-zinc-500">Tỉ lệ phản hồi</span>
        <span className="self-stretch my-auto text-blue-600">93%</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <span className="self-stretch my-auto text-zinc-500">Thời gian phản hồi</span>
        <span className="self-stretch my-auto text-blue-600">Trong vài giờ</span>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <span className="self-stretch my-auto text-zinc-500">Tham gia</span>
        <span className="self-stretch my-auto text-blue-600">5 năm trước</span>
      </div>

      <div className="flex gap-5 self-stretch mt-7 w-full text-blue-600">
        <button className="flex flex-1 gap-2 justify-center items-center rounded-lg border border-solid border-[color:var(--blue,#0A68FF)] min-h-[42px]">
          <IoChatbubbleOutline  className="text-blue-600 w-5 h-5 my-auto" />
          <span className="self-stretch my-auto text-blue-600">Chat Ngay</span>
        </button>
        <button className="flex flex-1 gap-2 justify-center items-center rounded-lg border border-solid border-[color:var(--blue,#0A68FF)] min-h-[42px]">
          <AiTwotoneShop  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <span className="self-stretch my-auto text-blue-600">Xem Shop</span>
        </button>
      </div>
    </div>
  );
};
