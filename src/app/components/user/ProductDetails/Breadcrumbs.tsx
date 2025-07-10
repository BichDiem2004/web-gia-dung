import { HiChevronRight } from "react-icons/hi";

export default function Breadcrumb() {
  const breadcrumbItems = [
    "Trang chủ",
    "Chăm sóc cá nhân",
    "Chăm sóc tóc",
    "Máy sấy tóc",
    "Máy sấy tóc Elmich Ion HDE-1822 - Hàng Chính Hãng"
  ];

  return (
    <nav className="flex absolute gap-3 items-center left-[30px] top-[151px] ">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <a href="#" className="text-base text-center text-blue-800">
            {item}
          </a>
          {index < breadcrumbItems.length - 1 && (
            <div>
              <HiChevronRight className="object-contain shrink-0 self-stretch my-auto w-8 stroke-[1px] stroke-zinc-500" />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
