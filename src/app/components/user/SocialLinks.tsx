import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="w-[320px] pl-8 flex flex-col justify-start">
      <div className="text-lg font-semibold text-[#222] mb-4">Liên kết mạng xã hội</div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <FaFacebook className="w-6 h-6 text-[#1877f3]" />
            <span className="text-[#222] font-medium">Facebook</span>
          </div>
          <button className="px-4 py-1 rounded border border-blue-400 text-blue-500 font-medium hover:bg-blue-50 transition">
            Liên kết
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <FaGoogle className="w-6 h-6 text-[#ea4335]" />
            <span className="text-[#222] font-medium">Google</span>
          </div>
          <button className="px-4 py-1 rounded border border-gray-300 text-gray-500 font-medium bg-gray-100 cursor-default">
            Đã liên kết
          </button>
        </div>
      </div>
    </div>
  );
}
