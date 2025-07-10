import * as React from "react";
import { FaUserCircle } from "react-icons/fa";

export const UserAccount: React.FC = () => {
  return (
    <div className="flex gap-2 items-center self-stretch my-auto w-[184px]">
      <FaUserCircle className="text-gray-500 w-7 h-7 my-auto" />
      <span className="self-stretch my-auto">
        Nguyễn Thành Trung
      </span>
    </div>
  );
};
