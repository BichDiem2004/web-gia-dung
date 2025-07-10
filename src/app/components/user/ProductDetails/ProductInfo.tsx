import React, { useState } from 'react';
import { QuantitySelector } from './QuantitySelector';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";


export const ProductInfo = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-3/5 max-md:w-full">
      <div className="flex flex-col items-start w-full max-md:mt-9 max-md:max-w-full">
        <div className="self-stretch pl-2.5 w-full max-md:max-w-full">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-black">
              Máy sấy tóc Elmich Ion HDE-1822 - Hàng Chính Hãng
            </h1>
            <button 
              onClick={() => setLiked(!liked)}
              aria-label="Toggle Favorite"
              className="flex justify-center items-center px-2 py-2 bg-white rounded-md border border-blue-500 hover:bg-blue-50">
              {liked ? (
                <AiFillHeart className="text-red-500 w-5 h-5" />
              ) : (
                <AiOutlineHeart className="text-blue-500 w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex gap-3 mt-3 max-w-full text-base font-medium text-black w-[345px]">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-sm text-black">4</span>
              <FaStar className="text-yellow-400 w-5 h-5" />
              <FaStar className="text-yellow-400 w-5 h-5" />
              <FaStar className="text-yellow-400 w-5 h-5" />
              <FaStar className="text-yellow-400 w-5 h-5" />
              <FaRegStar className="text-yellow-400 w-5 h-5" />
            </div>
            <span className="text-center text-zinc-500">(102)</span>
            <div className="w-px h-6 bg-zinc-500 self-start" />
            <span className="text-zinc-500">Đã bán</span>
            <span className="text-center">1,2k</span>
          </div>
        </div>

        <div className="flex gap-5 items-center mt-2 text-center">
          <div className="flex justify-center items-center self-stretch p-2.5 my-auto text-2xl text-rose-500">
            <span className="self-stretch my-auto font-semibold text-rose-500">175.000 </span>
            <span className="self-stretch my-auto text-rose-500 underline">đ</span>
          </div>
          <div className="flex items-center self-stretch my-auto text-lg text-zinc-500">
            <div className="self-stretch pt-2.5 my-auto font-medium w-[83px]">             
              <div className="-mt-3 line-through">350.000</div>
            </div>
            <span className="self-stretch my-auto underline">đ</span>
          </div>
          <div className="gap-2.5 self-stretch px-0.5 py-2 my-auto w-12 text-base font-light text-black whitespace-nowrap rounded-lg bg-slate-100 min-h-[30px]">
            -50%
          </div>
        </div>

        <div className="flex flex-col mt-3.5 ml-2.5 max-w-full w-[583px]">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[18%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-2 text-base text-zinc-500 max-md:mt-10">
                  <p>Vận chuyển</p>
                  <p className="self-start mt-10">Đổi trả bảo hành</p>
                </div>
              </div>
              <div className="ml-2 w-[82%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 items-start">
                    <FaShippingFast className="text-[#2679ff] w-6 h-6 mt-2" /> 
                    <div className="grow shrink-0 mt-2 basis-0 w-fit">
                      <p className="text-base text-black">
                        Nhận từ 8 Th06 - 10 Th06, phí giao <span className="underline">0đ</span>
                      </p>
                      <p className="mt-2 text-sm text-zinc-500">
                        Tặng voucher 15.000đ nếu đơn giao sau thời gian trên
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-7 items-center self-start mt-4 text-base font-medium text-zinc-800">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc16202cfca0074457b3bd0d24881f5434822ce?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" className="object-contain shrink-0 self-stretch my-auto aspect-[1.37] w-[26px]" alt="Return policy" />
                    <span>Đổi trả miễn phí trong 15 ngày</span>
                    <HiChevronDown className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 w-full max-md:max-w-full">
            <p className="my-auto text-base text-zinc-500">Voucher của Shop</p>
            <div className="flex flex-auto gap-3 items-center pl-8">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/309462d9a3aa3d634eaf74e3bdea050bdd291577?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" className="object-contain shrink-0 self-stretch my-auto aspect-[3.39] w-[80px]" alt="Voucher 1" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b41954054f0796f7b83dc9cd31efdeb8b69588d?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" className="object-contain shrink-0 self-stretch my-auto aspect-[3.39] w-[80px]" alt="Voucher 2" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d831884a6f0126b6ff0317b17780ae7fdb36b31?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" className="object-contain shrink-0 self-stretch my-auto aspect-[3.39] w-[80px]" alt="Voucher 3" />
              <HiChevronDown className="w-4 h-4 text-zinc-500" />
            </div>
          </div>

          <QuantitySelector />
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mt-2 max-w-full pl-3">
        <div className="flex flex-wrap gap-4 mt-5 w-full max-w-[500px]">
          <button className="flex items-center justify-center gap-2 px-4 py-2 w-[48%] text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition">
            <IoCartOutline className="w-6 h-6 text-blue-600" />          
            <span>Thêm vào giỏ</span>
          </button>
          <button className="w-[48%] px-4 py-2 text-base font-medium text-white bg-rose-500 rounded-md hover:bg-rose-600 transition">
            Mua ngay
          </button>
        </div>                              
      </div>
    </div>
  );
};
