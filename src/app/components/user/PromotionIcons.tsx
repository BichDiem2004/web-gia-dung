const icons = [
  {
    bg: "bg-[#fff0ee]",
    img: "/Images/deal.png",
    title: "Ưu đãi đặc biệt",
    desc: "chỉ hôm nay!",
    titleClass: "text-red-600",
    descClass: "text-red-500"
  },
  {
    bg: "bg-[#fff7e1]",
    img: "/Images/voucher.png",
    title: "Nhận ngay voucher",
    desc: "giảm giá hấp dẫn!",
    titleClass: "text-yellow-600",
    descClass: "text-yellow-500"
  },
  {
    bg: "bg-[#f1f7fa]",
    img: "/Images/giaohang.png",
    title: "Giao hàng nhanh",
    desc: "an toàn & tiện lợi.",
    titleClass: "text-blue-700",
    descClass: "text-blue-500"
  },
  {
    bg: "bg-[#f5fbf6]",
    img: "/Images/doitra.png",
    title: "Đổi trả dễ dàng,",
    desc: "hoàn tiền 100%.",
    titleClass: "text-green-600",
    descClass: "text-green-500"
  },
];

export default function PromotionIcons() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {icons.map((item, i) => (
        <div key={i} className={`flex items-center gap-2 ${item.bg} p-3 rounded-lg`}>
          <img src={item.img} className="w-20 h-20" alt="" />
          <div>
            <div className={`font-semibold text-md ${item.titleClass}`}>{item.title}</div>
            <div className={`text-md font-medium ${item.descClass}`}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
