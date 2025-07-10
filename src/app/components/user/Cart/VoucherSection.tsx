"use client";
import * as React from "react";
import { FiInfo } from "react-icons/fi";
import { BiSolidCoupon } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";


export function VoucherSection() {
  return (
    <section className="px-2.5 pt-2.5 pb-5 max-w-full bg-white rounded-lg ">
      <div className="flex gap-20 items-center w-full text-sm leading-6">
        <h2 className="self-stretch my-auto font-medium text-black">
          Trubie Voucher
        </h2>
        <div className=" my-auto text-zinc-500 ">
          Tối đa 2 voucher
        </div>
      </div>
      <div className=" relative gap-5 px-2.5 py-1.5 mt-5 w-full text-sm leading-6 aspect-[5.091] fill-white max-md:mr-1">
        <div className="flex items-center gap-3 px-3 py-2 border-2 border-neutral-300 rounded-lg w-[260px] h-14 bg-white">
          <img
            src="Images/freeshipextra.png"
            className="w-10 h-10 object-cover rounded-md"
            alt="Voucher Icon"
          />         
          <div className="flex-1 flex items-center gap-2 text-sm text-neutral-700">Giảm 70K</div>
          <FiInfo className="w-[15px] h-[15px] text-blue-500" />
          <button className="px-3 py-1 text-sm text-blue-600 border border-blue-500 rounded-md hover:bg-blue-50 transition">
            Áp dụng
          </button>
        </div>       
      </div>
      <div className="flex gap-2 items-center mt-5">
        <BiSolidCoupon className="w-6 h-6 text-blue-500 shrink-0 self-stretch my-auto" />
        <div className="self-stretch my-auto text-sm font-medium leading-6 text-blue-600">
          Áp dụng Voucher
        </div>
        <div className="flex overflow-hidden flex-col justify-center items-center px-px py-1.5 my-auto min-h-6  w-[19px]">
          <HiChevronRight className="w-4 h-auto text-blue-600" />
        </div>
      </div>
    </section>
  );
}
