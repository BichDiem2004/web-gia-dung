import React, { useState } from "react";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";

export default function UserProfileForm() {
  // Tạo mảng số ngày/tháng/năm để map ra option
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 61 }, (_, i) => 1960 + i);

  // State cho form
  const [name, setName] = useState("Nguyễn Thành Trung");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("0799456985");
  const [email, setEmail] = useState("haha@gmail.com");

  // Hàm xử lý nút Lưu thay đổi
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Thực hiện lưu hoặc gọi API ở đây
    alert(
      `Đã lưu!\nHọ tên: ${name}\nNgày sinh: ${day}/${month}/${year}\nGiới tính: ${gender}\nSĐT: ${phone}\nEmail: ${email}`
    );
  };

  return (
    <div className="flex-1 pr-8 border-r border-gray-200">
      <div className="text-xl font-semibold mb-5 text-[#222]">Thông tin tài khoản</div>
      <form onSubmit={handleSave}>
        <div className="flex gap-8">
          {/* Avatar lớn */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full border-2 border-blue-400 flex items-center justify-center bg-white">
              <FiUser className="w-16 h-16 text-blue-400" />
            </div>
          </div>
          {/* Form thông tin */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-32 text-[#222] text-[15px]">Họ & Tên</span>
              <input
                className="px-3 py-1.5 border border-gray-300 rounded outline-none text-[#222] w-[220px] bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-[#222] text-[15px]">Ngày sinh</span>
              <select className="border px-2 py-1 rounded text-[#222] bg-white" value={day} onChange={e => setDay(e.target.value)}>
                <option value="">Ngày</option>
                {days.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select className="border px-2 py-1 rounded text-[#222] bg-white" value={month} onChange={e => setMonth(e.target.value)}>
                <option value="">Tháng</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <select className="border px-2 py-1 rounded text-[#222] bg-white" value={year} onChange={e => setYear(e.target.value)}>
                <option value="">Năm</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-32 text-[#222] text-[15px]">Giới tính</span>
              <label className="flex items-center gap-1 text-[#222]">
                <input type="radio" name="gender" value="Nam" checked={gender === "Nam"} onChange={e => setGender(e.target.value)} /> Nam
              </label>
              <label className="flex items-center gap-1 text-[#222]">
                <input type="radio" name="gender" value="Nữ" checked={gender === "Nữ"} onChange={e => setGender(e.target.value)} /> Nữ
              </label>
              <label className="flex items-center gap-1 text-[#222]">
                <input type="radio" name="gender" value="Khác" checked={gender === "Khác"} onChange={e => setGender(e.target.value)} /> Khác
              </label>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="w-10 h-10 text-[#b5b5b5]" />
              <span className="text-[#222]">Số điện thoại <span className="font-medium text-[#222] ml-2">{phone}</span></span>
              <span className="text-[#2493c6] underline text-sm cursor-pointer ml-2">Thay đổi</span>
              <span className="mx-4 text-gray-300">|</span>
              <FiMail className="w-10 h-10 text-[#b5b5b5]" />
              <span className="text-[#222]">Email <span className="font-medium text-[#222] ml-2">{email}</span></span>
              <span className="text-[#2493c6] underline text-sm cursor-pointer ml-2">Thay đổi</span>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 rounded border border-blue-400 text-blue-500 font-medium hover:bg-blue-50 transition w-fit"
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
