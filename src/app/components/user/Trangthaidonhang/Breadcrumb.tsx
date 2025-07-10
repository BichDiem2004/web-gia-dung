import * as React from "react";
import { HiChevronRight } from "react-icons/hi";

export const Breadcrumb: React.FC = () => {
  return (
    <nav className="flex gap-3 items-center self-start text-base text-center text-blue-800">
      <a href="#" className="self-stretch my-auto text-blue-800">
        Trang chủ
      </a>
      <HiChevronRight className="object-contain shrink-0 self-stretch my-auto w-8 stroke-zinc-500" />
      <a href="#" className="self-stretch my-auto text-blue-800">
        Quản lý đơn hàng
      </a>
    </nav>
  );
};
