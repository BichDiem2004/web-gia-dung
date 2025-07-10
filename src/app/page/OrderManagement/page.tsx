"use client";
import Header2Component from "@/app/components/header2";
import OrderManagementPage from "@/app/components/user/OrderManagement";
import SidebarMenu from "@/app/components/user/SidebarMenu";
import React from "react";

export default function OderManagement() {
  return (
    <div className="bg-[#f6f7fa] min-h-screen">
      <Header2Component />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-3">
          <span className="text-[#2493c6] font-medium">Trang chủ</span>
          {"  >  "}
          <span className="font-medium text-gray-800">Thông tin tài khoản</span>
        </div>
        <div className="flex gap-8">
          {/* SidebarMenu giữ nguyên width */}
          <SidebarMenu />
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow px-8 py-7 flex flex-row min-w-[700px]">
              <OrderManagementPage />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
