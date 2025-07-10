"use client";
import * as React from "react";
import { TopBar } from "@/app/components/user/Product/TopBar";
import { Header } from "@/app/components/user/Product/Header";
import { Breadcrumb } from "@/app/components/user/Trangthaidonhang/Breadcrumb";
import { UserSidebar } from "@/app/components/user/Trangthaidonhang/UserSidebar";
import { OrderDetails } from "@/app/components/user/Trangthaidonhang/OrderDetails";

function ChiTietDonHang() {
  return (
    <div className="flex flex-col pb-40 bg-slate-100 max-md:pb-24">
      <TopBar />
      <Header />
      <main className="mx-auto w-full max-w-screen-xl px-4 mt-5">
        <Breadcrumb />
        <div className="mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[19%] max-md:ml-0 max-md:w-full">
              <UserSidebar />
            </div>
            <div className="ml-5 w-[81%] max-md:ml-0 max-md:w-full">
              <OrderDetails />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChiTietDonHang;
