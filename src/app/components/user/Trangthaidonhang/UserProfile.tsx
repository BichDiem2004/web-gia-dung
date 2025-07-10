import * as React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export const UserProfile: React.FC = () => {
  return (
    <div className="flex gap-3 items-center self-start">
      <div className="flex gap-2.5 justify-center items-center self-stretch px-3 my-auto bg-sky-50 rounded-3xl border-2 border-blue-600 border-solid h-[50px] min-h-[50px] w-[50px]">
        <FaUserCircle className="text-blue-500 w-7 h-7 my-auto" />
      </div>
      <div className="flex flex-col justify-center items-start self-stretch my-auto text-base text-center w-[149px]">
        <h3 className="text-black">Nguyễn Thành Trung</h3>
        <div className="flex gap-2 items-start mt-2.5 text-zinc-500">
          <FiEdit className="w-5 h-5 text-gray-600" />
          <a href="#" className="text-zinc-500">Sửa hồ sơ</a>
        </div>
      </div>
    </div>
  );
};
