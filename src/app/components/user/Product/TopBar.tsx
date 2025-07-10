import * as React from "react";

interface TopBarProps {}

export const TopBar: React.FC<TopBarProps> = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-6 py-1 w-full leading-relaxed bg-green-50 text-neutral-700 text-[13px] max-md:px-4 max-md:text-[12px]">
      <div className="flex flex-wrap gap-7 items-center max-md:gap-3 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e738feb5f3755db43d33c68cc0082d100ffdaa?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="w-4 h-4 object-contain"
          alt="Free shipping icon"
        />
        <p className="text-neutral-700">Miễn phí vận chuyển cho đơn hàng từ 2 triệu đồng</p>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17203f316aec27d7d10c5ff101cb975f1036a912?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="w-4 h-4 object-contain"
          alt="Return policy icon"
        />
        <p className="text-neutral-700">Đổi trả trong 30 ngày</p>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/311d5e1c214999a431d40692061c4b5274ccffe9?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="w-4 h-4 object-contain"
          alt="Support icon"
        />
        <p className="text-neutral-700">Hỗ trợ 24/7</p>
      </div>
    </section>
  );
};
