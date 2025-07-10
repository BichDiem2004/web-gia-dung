import * as React from "react";
import { StatusStep } from "./StatusStep";

export const OrderStatus: React.FC = () => {
  return (
    <div className="relative flex flex-col items-start">
      {/* Step 1 */}
      <div className="flex items-start gap-3 relative mb-8">
        <StatusStep
          isActive={true}
          label="Chờ xác nhận"
          timestamp="20:00, Chủ nhật 25/07/2025"
        />
        {/* Line nối xuống dưới */}
        <div className="absolute left-[12px] top-[20px] h-15 w-[1.5px] bg-orange-300" />
      </div>

      {/* Step 2 */}
      <div className="flex items-start gap-3 relative mb-8">
        <StatusStep isActive={false} label="Đang xử lý" />
        <div className="absolute left-[12px] top-[20px] h-10 w-[1.5px] bg-gray-300" />
      </div>

      {/* Step 3 */}
      <div className="flex items-start gap-3 relative mb-8">
        <StatusStep isActive={false} label="Đang vận chuyển" />
        <div className="absolute left-[12px] top-[20px] h-10 w-[1.5px] bg-gray-300" />
      </div>

      {/* Step 4 */}
      <div className="flex items-start gap-3">
        <StatusStep isActive={false} label="Đã giao" />
      </div>
    </div>
  );
};
