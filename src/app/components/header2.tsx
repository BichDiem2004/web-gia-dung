"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import { FiUser } from "react-icons/fi";

const Header2Component = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* Thanh thông báo trên cùng */}
      <div className="bg-[#e7f6ee] w-full py-1 text-sm flex justify-center items-center gap-6 border-b border-[#e6eaea]">
        <span className="flex items-center gap-1 text-[#178841]">
          <span className="text-lg">+</span>
          Miễn phí vận chuyển cho đơn hàng từ 2 triệu đồng
        </span>
        <span className="flex items-center gap-1 text-[#2493c6]">
          <span className="text-lg">✈</span>
          Đổi trả trong 30 ngày
        </span>
        <span className="flex items-center gap-1 text-[#e24040]">
          <span className="text-lg">★</span>
          Hỗ trợ 24/7
        </span>
      </div>

      {/* Thanh header */}
      <div className="bg-white w-full shadow py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/Images/logo.png" alt="Logo Trubie" className="w-[150px] h-[100px] object-contain" />
          </div>

          {/* Search bar + suggestion */}
          <div className="flex-1 flex flex-col mx-4 ">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
              <input
                className="bg-gray-100 outline-none flex-1 text-gray-700 text-sm"
                placeholder="Tìm kiếm sản phẩm ..."
                type="text"
              />
              <img src="/Images/kinhlup.png" alt="icon search" className="w-5 h-5 ml-2" />
            </div>
            <div className="flex gap-4 mt-1 text-xs text-gray-400 pt-2">
              <span>nồi cơm điện</span>
              <span>ấm siêu tốc</span>
              <span>bếp ga/ bếp từ</span>
              <span>bếp ga/ bếp từ</span>
              <span>nồi chảo chống dính</span>
              <span>máy lọc nước</span>
            </div>
          </div>

          {/* Icon & user */}
          <div className="flex items-center gap-6">
            <div className="flex gap-5">
              <div className="relative">
                <Link href="/page/CartShopping" >
                  <img src="/Images/cart.png" alt="cart" className="w-6 h-6" />
                </Link>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[11px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
              <div className="relative">
                <Link href={"/page/Notify"}>
                  <img src="/Images/bell.png" alt="bell" className="w-6 h-6" />
                </Link>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[11px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
              <Link href={"/page/Heart"}>
                <img src="/Images/heart.png" alt="heart" className="w-6 h-6" />
              </Link>
            </div>

            {/* Tài khoản và địa chỉ căn giữa đều */}
            <div className="flex flex-col items-center justify-center min-w-[160px] h-[100px]">
              {/* Tài khoản Dropdown */}
              <div className="relative w-full flex flex-col items-center mb-1" ref={dropdownRef}>
                <div
                  className="flex flex-col items-center cursor-pointer rounded-lg px-2 py-1 hover:bg-gray-100 transition select-none"
                  onClick={() => setShowDropdown((v) => !v)}
                >
                  <FiUser className="w-7 h-7 text-gray-700" />
                  <span className="text-sm text-gray-700 font-medium mt-1">Tài khoản</span>
                </div>
                {showDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[210px] bg-[#181818] text-white rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
                    <Link href="/page/Info" className="block">
                      <div className="px-5 py-2 hover:bg-gray-700 rounded text-[16px] cursor-pointer">Thông tin tài khoản</div>
                    </Link>
                    <Link href="/orders" className="block">
                      <div className="px-5 py-2 hover:bg-gray-700 rounded text-[16px] cursor-pointer">Đơn hàng của tôi</div>
                    </Link>
                    <Link href="/support" className="block">
                      <div className="px-5 py-2 hover:bg-gray-700 rounded text-[16px] cursor-pointer">Trung tâm hỗ trợ</div>
                    </Link>
                    <Link href="/logout" className="block">
                      <div className="px-5 py-2 hover:bg-gray-700 rounded text-[16px] cursor-pointer">Đăng xuất</div>
                    </Link>
                  </div>
                )}
              </div>
              {/* Địa chỉ */}
              <div className="flex items-center mt-2">
                <img src="/Images/diachi.png" alt="location" className="w-6 h-6 mr-2" />
                <span className="text-sm text-gray-500">
                  Địa chỉ: <span className="underline font-medium text-gray-700">Quận 10, TP. HCM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hiệu ứng mượt cho dropdown */}
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
          .animate-fadeIn { animation: fadeIn 0.18s; }
        `}
      </style>
    </div>
  );
};

export default Header2Component;
