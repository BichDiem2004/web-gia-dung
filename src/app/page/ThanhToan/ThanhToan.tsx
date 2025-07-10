"use client";
import * as React from "react";
import { TopBar } from "@/app/components/user/Product/TopBar";
import { Header } from "@/app/components/user/Product/Header";
import { ShippingAddress } from "@/app/components/user/ThanhToan/ShippingAddress";
import { DeliveryOptions } from "@/app/components/user/ThanhToan/DeliveryOptions";
import { PaymentMethods } from "@/app/components/user/ThanhToan/PaymentMethod";
import { VoucherSection } from "@/app/components/user/ThanhToan/VoucherSection";
import { OrderSummary } from "@/app/components/user/ThanhToan/OrderSummary";

function ThanhToan() {
  return (
    <div className="flex flex-col bg-slate-100">
      <TopBar />
      <Header />
      <main className="mx-auto w-full max-w-screen-xl px-4 mt-5">
        <div className="flex gap-5 max-md:flex-col">
          {/* Phần địa chỉ, giao hàng, thanh toán */}
          <div className="flex-[3] w-0">
            <ShippingAddress />
            <DeliveryOptions />
            <PaymentMethods />
          </div>

          {/* Phần mã giảm giá và tổng kết đơn */}
          <aside className="flex-[1] w-0 max-md:mt-5">
            <VoucherSection />
            <OrderSummary />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default ThanhToan;
