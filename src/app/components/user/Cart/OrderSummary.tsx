"use client";
import * as React from "react";
import Link from "next/link";

export function OrderSummary() {
  return (
    <section className="flex flex-col pt-2.5 pb-5 mt-5 w-full bg-white rounded-lg">
      <div className="flex flex-col pr-9 pl-2.5 w-full text-sm max-md:pr-5">
        <div className="flex items-center w-full justify-between ">
          <div className="self-stretch my-auto text-zinc-500">
            Tổng tiền hàng
          </div>
          <div className="text-right self-end text-zinc-800">
            <span style={{fontWeight: 500}}>1.190.000 </span>
            <span style={{fontWeight: 500, textDecoration: "underline"}}>
              đ
            </span>
          </div>
        </div>
        <div className="flex items-center mt-5 w-full justify-between leading-6">
          <div className="self-stretch my-auto text-zinc-500">
            Giảm giá
          </div>
          <div className="text-right self-end text-green-500">
            <span style={{fontWeight: 500}}>-130.000 </span>
            <span style={{fontWeight: 500, textDecoration: "underline", color: "rgba(74,171,113,1)"}}>
              đ
            </span>
          </div>
        </div>
        <div className="gap-5 self-stretch mt-5 text-base font-medium text-zinc-800">
          Tổng số tiền phải thanh toán
        </div>
        <div className="self-end mt-2.5 text-lg text-rose-500">
          <span style={{fontWeight: 600, color: "rgba(255,66,79,1)"}}>
            690.000{" "}
          </span>
          <span style={{fontWeight: 600, textDecoration: "underline", color: "rgba(255,66,79,1)"}}>
            đ
          </span>
        </div>
        <div className="self-end mt-2.5 leading-6 text-green-500">
          <span style={{fontWeight: 500}}>Tiết kiệm 130.000 </span>
          <span style={{fontWeight: 500, textDecoration: "underline", color: "rgba(74,171,113,1)"}}>
            đ
          </span>
        </div>
        <div className="self-end mt-2.5 font-medium leading-6 text-zinc-500">
          Đã bao gồm VAT (nếu có)
        </div>
      </div>
      <Link
        href="app/src/ThanhToan"
        className="text-center px-18 py-3.5 mt-5 ml-2.5 text-xl text-rose-500 rounded-lg border border-red-500 hover:bg-rose-50 min-h-[49px] max-md:px-5">
          Mua ngay (2)
      </Link>
    </section>
  );
}
