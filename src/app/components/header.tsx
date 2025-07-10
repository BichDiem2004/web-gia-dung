import React from 'react'
import Link from "next/link";
import page from '../page/Notify/page';

const HeaderComponent = () => {
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
                {/* Badge số */}
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

            {/* User + địa chỉ */}
            <div className="flex flex-col ml-3">
              <div className="flex items-center gap-2">
                <img src="/Images/user.png" alt="user" className="w-7 h-7" />
                <span className="text-sm text-gray-700 cursor-pointer mt-4">
                  <Link href="/page/register">Đăng ký</Link> / 
                  <Link href="/page/login">Đăng nhập</Link>
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-0.5">
                <img src="/Images/diachi.png" alt="location" className="w-7 h-7 mr-1 mb-6" />
                Địa chỉ: <span className="ml-1 underline font-medium text-gray-700">Quận 10, TP. HCM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
