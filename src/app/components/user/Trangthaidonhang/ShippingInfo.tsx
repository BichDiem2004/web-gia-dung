import * as React from "react";
import { FaShippingFast} from "react-icons/fa";
import { FiMapPin} from "react-icons/fi";
export const ShippingInfo: React.FC = () => {
  return (
    <section className="flex flex-col items-start w-full max-md:mt-10">
      <div className="flex gap-2 items-center text-base leading-none text-zinc-800">
        <FiMapPin className="text-blue-600 w-5 h-5" />
        <h3 className="self-stretch my-auto text-zinc-800">
          Địa chỉ nhận hàng
        </h3>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <span className="self-stretch my-auto text-sm text-black">
          Nguyễn Thành Trung
        </span>
        <div className="w-px h-full bg-zinc-500 opacity-40" />
        <span className="self-stretch my-auto text-xs leading-6 text-zinc-500">
          (+84) 799 456 985
        </span>
      </div>
      <address className="mt-2 text-sm leading-6 text-zinc-500 w-[318px] not-italic">
        825 Cách mạng Tháng Tám, Phường 12, Quận 10, TP. Hồ Chí Minh
      </address>
      <div className="flex gap-2 items-center self-stretch mt-9 text-sm text-zinc-800">
        <FaShippingFast className="text-gray-500 w-6 h-6" />
        <span className="self-stretch my-auto text-zinc-800">
          Giao hàng hỏa tốc | Được giao bởi Trubie Home
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-800">
        Phí vận chuyển: 0đ
      </p>
    </section>
  );
};
