export interface ProductCardProps {
  img: string;
  price: string;
  sale?: string;
  sold?: string;
}

export default function ProductCard({ img, price, sale, sold }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center relative shadow-sm">
      {sale && (
        <div className="absolute top-2 left-2">
          <div className="bg-[#FF6F81] text-white text-xs px-2 py-1 rounded-lg font-bold shadow-sm">{sale}</div>
        </div>
      )}
      <img src={img} className="w-[110px] h-[110px] object-contain mb-3" alt="" />
      <div className="text-[#FF4757] font-semibold text-base mt-auto mb-2">{price} <span className="text-[#FF4757]">đ</span></div>
      {sold && (
        <div className="w-full flex flex-col items-center">
          <div className="w-[80%] h-3 rounded-full bg-gradient-to-r from-[#FF6F81] to-[#FFD6DF] flex items-center mb-1">
            <div className="w-1.5 h-3 bg-[#FF6F81] rounded-full"></div>
          </div>
          <div className="text-xs text-[#FF6F81] font-medium">Đã bán {sold}</div>
        </div>
      )}
    </div>
  );
}
