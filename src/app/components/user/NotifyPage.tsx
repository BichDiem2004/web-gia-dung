"use client";
import React from "react";
import Header2Component from "../header2";
import SidebarMenu from "./SidebarMenu";
import UserProfileForm from "./UserProfileForm";
import SocialLinks from "./SocialLinks";
export default function NotifyPage() {
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

        {/* Layout 2 cột */}
        <div className="flex gap-8">
          <SidebarMenu />
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow px-8 py-7 flex flex-row">
              <UserProfileForm />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
