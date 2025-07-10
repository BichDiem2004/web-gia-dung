import * as React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go"; 

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top header */}
      <div className="flex items-center justify-between px-8 py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="w-[200px]">
          <img
            src="/images/LOGO.png"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Search bar */}
        <div className="mx-6 w-[600px] max-w-full">
          <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm ..."
              className="flex-1 outline-none text-sm text-gray-700"
            />
            <FiSearch className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-5 text-sm ">
          <IoCartOutline className="w-6 h-6 text-blue-600" />
          <IoNotificationsOutline className="w-6 h-6 text-blue-600" />
          <AiOutlineHeart className="w-6 h-6 text-blue-600" />
          <div className="flex items-center space-x-2 text-gray-700">
            <AiOutlineUser className="w-6 h-6" />
            <span>Đăng ký / Đăng nhập</span>
          </div>
        </div>
      </div>

      {/* Category navigation + location */}
      <div className="flex items-center justify-between px-8 pb-2 text-sm text-gray-500 max-w-screen-xl mx-auto">
        <nav className="flex flex-wrap gap-4 pl-65 text-xs">
          <a href="#">nồi cơm điện</a>
          <a href="#">ấm siêu tốc</a>
          <a href="#">bếp ga/ bếp từ</a>
          <a href="#">bếp ga/ bếp từ</a>
          <a href="#">nồi chảo chống dính</a>
          <a href="#">máy lọc nước</a>
        </nav>
        <div className="flex items-center space-x-1 ">
          <GoLocation className="w-4 h-5 text-gray-500 " />
          <span>Địa chỉ: <u className="font-medium text-black">Quận 10, TP. HCM</u></span>
        </div>
      </div>
    </header>
  );
};

const IconWithBadge = ({ icon, alt }: { icon: string; alt: string }) => {
    return (
      <div className="relative w-6 h-6">
        <img src={icon} alt={alt} className="w-full h-full" />
        <span className="absolute -top-1 -right-1 text-[10px] w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center">
          0
        </span>
      </div>
    );
  };
