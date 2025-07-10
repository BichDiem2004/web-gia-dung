const offers = [
  {
    bg: "bg-[#e9f2fb]",
    title: <>Sale giữa năm<br />Siêu thị online -50%</>,
    img: <img src="/Products/maynuoc.jpg" className="w-[200px] h-[160px] object-contain mx-auto my-2" alt="" />,
  },
  {
    bg: "bg-[#fff9e5]",
    title: <>Nồi cơm điện<br />Nhấn là chín, ăn là GHIỀN</>,
    img: <img src="/Products/noicom2.jpg" className="w-[200px] h-[150px] object-contain mx-auto my-2" alt="" />,
  },
  {
    bg: "bg-[#faecec]",
    title: <>Nhanh tay mua ngay<br />Lò Vi Sóng Roler</>,
    note: "Giảm sốc lên đến 25 - 30%",
    img: <img src="/Products/lovisong.jpg" className="w-[200px] h-[150px] object-contain mx-auto my-2" alt="" />,
  },
  {
    bg: "bg-[#e5f5ee]",
    title: <>Bộ hộp cơm giữ nhiệt<br />Fuji Appetit 1800 ml</>,
    img: <img src="/Products/hopcom.jpg" className="w-[200px] h-[150px] object-contain mx-auto my-2" alt="" />,
  },
  {
    bg: "bg-[#eaf8fb]",
    title: <>Bộ lau nhà xoay 360 độ<br />Sunhouse KS-CL330S</>,
    img: <img src="/Products/caylaunha.jpg" className="w-[200px] h-[150px] object-contain mx-auto my-2" alt="" />,
  },
  {
    bg: "bg-[#f8ebfa]",
    title: <>Nhanh tay mua ngay<br />Lò Vi Sóng Roler</>,
    img: (
      <div className="flex gap-3 justify-center">
        <img src="/Products/binhnuoc.jpg" className="w-[100px] h-[170px] object-contain" alt="" />
        <img src="/Products/binhnuoc2.jpg" className="w-[100px] h-[170px] object-contain" alt="" />
      </div>
    ),
  },
];

export default function PastelOffers() {
  return (
    <div className="py-6 bg-white mt-4 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 px-4">
        {offers.map((o, i) => (
          <div key={i} className={`rounded-xl p-4 ${o.bg} flex flex-col justify-between h-[210px]`}>
            <div>
              <div className="font-semibold text-[15px]">{o.title}</div>
              {o.note && <div className="text-[13px] text-gray-700">{o.note}</div>}
            </div>
            {o.img}
          </div>
        ))}
      </div>
    </div>
  );
}
