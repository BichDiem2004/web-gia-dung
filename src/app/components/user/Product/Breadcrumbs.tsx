import * as React from "react";
import { HiChevronRight } from "react-icons/hi";

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  return (
    <nav className="flex gap-3 items-center self-start pl-5">
      <a href="#" className="self-stretch my-auto text-blue-800">
        Trang chủ
      </a>
      <HiChevronRight className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[0.75] stroke-[1px] stroke-zinc-500" />
      <span className="self-stretch my-auto text-blue-800">
        Chăm sóc cá nhân
      </span>
    </nav>
  );
};
