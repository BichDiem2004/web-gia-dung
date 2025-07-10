const products = [
  { img: "/Products/noi.jpg", name: "Nồi inox 304 cao cấp 5 đáy Kaipen Lermat", price: "690.000 ₫", discount: "-20%" },
  { img: "/Products/amsieutoc.jpg", name: "Ấm siêu tốc inox SUNHOUSE SHD1186", price: "690.000 ₫", discount: "-20%" },
  { img: "/Products/denngu.jpg", name: "Đèn ngủ để bàn thân gỗ Rubie House", price: "690.000 ₫", discount: "-20%" },
  { img: "/Products/saytoc.jpg", name: "Máy sấy tóc Elmich Ion HDE-1822", price: "690.000 ₫", discount: "-20%" },
  { img: "/Products/banui.jpg", name: "Bàn là hơi nước QL-1002", price: "690.000 ₫", discount: "-20%" },
  { img: "/Products/maymaydo.jpg", name: "Máy may 1 kim điện tử Brother S-7250", price: "690.000 ₫", discount: "-20%" },
];

export default function FeaturedCollections() {
  return (
    <div className="bg-white mt-4 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-base font-semibold mb-3">Bộ sưu tập nổi bật</h2>
        <div className="grid grid-cols-6 gap-3">
          {products.map((p, i) => (
            <div key={i} className="border rounded-lg p-3 flex flex-col items-center text-sm bg-white">
              <img src={p.img} alt="" className="w-40 h-40 object-contain mb-2" />
              <div className="min-h-[38px] text-[13px] text-gray-800 mb-1 leading-tight text-left w-full">{p.name}</div>
              <div className="flex items-center justify-start w-full mb-1 gap-1 text-xs">
                <span className="text-yellow-400 font-bold">★★★★★</span>
                <span className="text-blue-600 underline ml-1">Đã bán 1,2k</span>
              </div>
              <div className="flex items-center gap-2 w-full">
                <p className="text-[#e10000] font-semibold text-base">{p.price}</p>
                <div className="bg-[#fff0f0] text-[#e10000] text-[11px] px-1 rounded">{p.discount}</div>
              </div>
              <div className="flex items-center text-gray-500 text-xs mt-1 w-full">
                <span className="w-3 h-3 rounded-full bg-gray-300 inline-block mr-1" />
                TP. Hồ Chí Minh
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
