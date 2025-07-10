import * as React from "react";
import { ProductItem } from "./ProductItem";
import { ShippingInfo } from "./ShippingInfo";
import { OrderStatus } from "./OrderStatus";
import { OrderSummary } from "./OrderSummary";

export const OrderDetails: React.FC = () => {
  return (
    <main className="flex flex-col grow items-start mt-5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-lg font-light text-black max-md:max-w-full">
        Chi tiết đơn hàng #123456 - Chờ xác nhận
      </h1>
      <article className="overflow-hidden self-stretch px-4 py-5 mt-5 w-full bg-white rounded-lg max-md:max-w-full">
        <ProductItem
          image="Images/maysay2.jpg"
          name="Máy sấy tóc MINI CWELL mẫu CO1HD"
          quantity="SL: x1"
        />
        <div className="w-full h-px bg-zinc-300 mt-5" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
          <ProductItem
            image="Images/mayuontoc.jpg"
            name="Máy uốn tóc kiểu Pháp LIFE350 32MM"
            quantity="SL: x1"
          />
        </div>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[36%] max-md:ml-0 max-md:w-full">
              <ShippingInfo />
            </div>
            <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[56%] max-md:ml-0 max-md:w-full">
                    <OrderStatus />
                  </div>
                  <div className="ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                    <OrderSummary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <a href="#" className="mt-5 text-base text-blue-600">
        &lt;&lt; Quay về quản lý đơn hàng
      </a>
    </main>
  );
};
