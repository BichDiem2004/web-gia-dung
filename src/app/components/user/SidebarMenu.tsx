"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiUser,
  FiBell,
  FiShoppingBag,
  FiRefreshCw,
  FiHeart,
  FiMapPin,
} from "react-icons/fi";

const menuList = [
  { label: "Thông tin tài khoản", icon: FiUser, path: "/page/Info" },
  { label: "Thông báo của tôi", icon: FiBell, path: "/page/MyAddress" },
  { label: "Quản lý đơn hàng", icon: FiShoppingBag, path: "/page/OrderManagement" },
  { label: "Quản lý đổi trả", icon: FiRefreshCw, path: "/account/returns" },
  { label: "Sản phẩm yêu thích", icon: FiHeart, path: "/account/favorites" },
  { label: "Địa chỉ của tôi", icon: FiMapPin, path: "/account/address" },
];

export default function SidebarMenu() {
  const pathname = usePathname();

  return (
    <div className="w-[270px]">
      <div className="flex flex-col gap-1 bg-white rounded-xl shadow px-0 py-4">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center justify-center mb-3">
          <div className="w-16 h-16 rounded-full border-2 border-blue-400 flex items-center justify-center bg-white">
            <FiUser className="w-10 h-10 text-blue-400" />
          </div>
          <div className="mt-2 font-semibold text-gray-800 text-base">Nguyễn Thành Trung</div>
          <Link href={"/page/Info"}>
            <span className="text-xs text-gray-400 cursor-pointer underline">Sửa hồ sơ</span>
          </Link>
        </div>
        {/* Menu list */}
        {menuList.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.path); // Nếu path trùng đầu

          return (
            <Link
              href={item.path}
              key={item.label}
              className={`
                flex items-center gap-3 px-5 py-2 rounded text-[15px] font-medium
                transition
                ${isActive
                  ? "bg-[#f2f8fd] text-[#2493c6]"
                  : "text-[#222] hover:bg-[#f6f7fa] hover:text-[#2493c6]"}
              `}
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? "text-[#2493c6]" : "text-[#b5b5b5] group-hover:text-[#2493c6]"
                }`}
              />
              <span className="mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
