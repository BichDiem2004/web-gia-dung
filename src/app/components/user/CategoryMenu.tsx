const categories = [
  { img: "/Products/noicom.jpg", name: "Đồ dùng nhà bếp" },
  { img: "/Products/maygiat.jpg", name: "Điện - Điện lạnh" },
  { img: "/Products/tivi.jpg", name: "Đồ dùng phòng khách" },
  { img: "/Products/giuong.jpg", name: "Đồ dùng phòng ngủ" },
  { img: "/Products/moctreo.jpg", name: "Lưu trữ - Sắp xếp" },
  { img: "/Products/camera.jpg", name: "Gia dụng thông minh" },
  { img: "/Products/bontam.jpg", name: "Vệ sinh nhà tắm" },
  { img: "/Products/bontam.jpg", name: "Chăm sóc cá nhân" },
];

export default function CategoryMenu() {
  return (
    <div>
      <div className="text-md font-bold">Danh mục</div>
      <div className="space-y-2 text-sm">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center gap-2">
            <img src={c.img} className="w-[60px] h-[60px]" alt="" />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
