"use client";
import React from "react";
import Header2Component from "@/app/components/header2";
import SidebarMenu from "@/app/components/user/SidebarMenu";
import { FiTrash2 } from "react-icons/fi";

const mockAddresses = [
  {
    name: "Nguyễn Thành Trung",
    phone: "+84 799 456 985",
    address: "825 Sư Vạn Hạnh",
    detail: "Phường 12, Quận 10, TP. Hồ Chí Minh",
    isDefault: true,
  },
  {
    name: "Nguyễn Quang A",
    phone: "+84 799 456 985",
    address: "122 Sư Vạn Hạnh",
    detail: "Phường 12, Quận 10, TP. Hồ Chí Minh",
    isDefault: false,
  },
];

function MyAddressList() {
  return (
    <div className="bg-white rounded-xl shadow px-8 py-7 min-w-[700px]">
      <div className="text-xl font-semibold text-[#222] mb-6">Địa chỉ của tôi</div>
      <div>
        {mockAddresses.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center justify-between border-b last:border-b-0 border-gray-100 py-4"
          >
            <div>
              <div className="flex items-center gap-1 font-medium text-[#222]">
                {item.name}
                <span className="mx-2 text-gray-300 hidden md:inline">|</span>
                <span className="text-sm text-gray-500">{item.phone}</span>
              </div>
              <div className="text-sm text-gray-700">{item.address}</div>
              <div className="text-sm text-gray-500">{item.detail}</div>
              {item.isDefault && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded bg-[#eaf4ff] text-xs text-[#2493c6] border border-[#b5dafc] font-semibold">
                  Mặc định
                </span>
              )}
            </div>
            <div className="flex gap-3 mt-2 md:mt-0 items-center">
              <button className="text-[#2493c6] text-sm underline font-medium hover:text-blue-600">
                Cập nhật
              </button>
              {!item.isDefault && (
                <button className="text-red-400 text-sm flex items-center gap-1 hover:text-red-600">
                  <FiTrash2 className="w-4 h-4" />
                  Xoá
                </button>
              )}
              <button
                className={`ml-2 border rounded px-3 py-1 text-xs font-medium transition
                  ${
                    item.isDefault
                      ? "border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed"
                      : "border-green-400 text-green-600 hover:bg-green-50"
                  }
                `}
                disabled={item.isDefault}
              >
                Thiết lập mặc định
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MyAddressPage() {
  return (
    <div className="bg-[#f6f7fa] min-h-screen">
      <Header2Component />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-3">
          <span className="text-[#2493c6] font-medium">Trang chủ</span>
          {"  >  "}
          <span className="font-medium text-gray-800">Thông tin tài khoản</span>
          {"  >  "}
          <span className="font-medium text-gray-800">Địa chỉ của tôi</span>
        </div>
        <div className="flex gap-8">
          {/* SidebarMenu giữ nguyên width */}
          <SidebarMenu />
          <div className="flex-1">
            <MyAddressList />
          </div>
        </div>
      </div>
    </div>
  );
}
