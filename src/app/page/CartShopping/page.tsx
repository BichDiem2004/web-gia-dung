"use client";
import * as React from "react";
import { TopBar } from "@/app/components/user/Product/TopBar";
import { Header } from "@/app/components/user/Product/Header";
import { CartContent } from "@/app/components/user/Cart/CartContent";
import { VoucherSection } from "@/app/components/user/Cart/VoucherSection";
import { OrderSummary } from "@/app/components/user/Cart/OrderSummary";

const CartShopping = () => {
  return (
      <div className="flex flex-col bg-zinc-100">
        <TopBar />
        <Header />
  
        <main className="mx-auto w-full max-w-screen-xl px-4 mt-5">
          <div className="flex gap-5 max-md:flex-col">
            {/* Phần giỏ hàng */}
            <div className="flex-[3] w-0">
              <CartContent />
            </div>
  
            {/* Phần voucher và tổng kết đơn */}
            <aside className="flex-[1] w-0 max-md:mt-5">
              <VoucherSection />
              <OrderSummary />
            </aside>
          </div>
        </main>
      </div>
    );
}

export default CartShopping
