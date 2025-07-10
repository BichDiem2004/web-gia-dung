// File: components/Footer.jsx

export default function Footer() {
  return (
    <div className="w-full bg-white border-t border-gray-200 pt-8 pb-0 text-black">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-5 gap-8 pb-8">
        {/* Logo & Social */}
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <div className="w-24 h-10 bg-gray-100 flex items-center justify-center font-bold text-lg rounded-md">
              LOGO
            </div>
          </div>
          <div className="text-sm leading-6">
            Siêu thị trực tuyến hàng đầu Việt Nam với hàng triệu sản phẩm chất lượng, giá tốt, giao hàng nhanh chóng và dịch vụ tận tâm.
          </div>
          <div className="flex gap-3 mt-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              {/* Thay bằng <img src="/icon-fb.svg" /> */}
              <span className="text-white font-bold">F</span>
            </div>
            <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Y</span>
            </div>
          </div>
        </div>
        {/* 4 cột nội dung */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-bold mb-1 opacity-80">Về chúng tôi</div>
          <div>Giới thiệu</div>
          <div>Tuyển dụng</div>
          <div>Hệ thống cửa hàng</div>
          <div>Liên hệ</div>
          <div>Góp ý khiếu nại</div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-bold mb-1 opacity-80">Chính sách khách hàng</div>
          <div>Trung tâm trợ giúp</div>
          <div>Hướng dẫn mua hàng</div>
          <div>Hướng dẫn thanh toán</div>
          <div>Chính sách vận chuyển</div>
          <div>Chính sách đổi trả</div>
          <div>Chính sách bảo hành</div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-bold mb-1 opacity-80">Hợp tác và liên kết</div>
          <div>Quy chế hoạt động</div>
          <div>Chính sách bảo mật</div>
          <div>Chính sách cookie</div>
          <div>Điều khoản sử dụng</div>
          <div>Bán hàng cùng chúng tôi</div>
          <div>Chương trình Affiliate</div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-bold mb-1 opacity-80">Đăng ký nhận tin</div>
          <div>Nhận thông tin khuyến mãi và sản phẩm mới nhất</div>
        </div>
      </div>

      {/* Middle section: Phương thức + Giao hàng + Chứng nhận */}
      <div className="bg-[#181818] py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {/* Phương thức thanh toán */}
          <div>
            <div className="font-semibold text-white mb-2">Phương thức thanh toán</div>
            <div className="flex gap-2">
              {/* Thay các div này bằng <img src="/..." /> nếu có icon */}
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border-2 border-blue-400 text-blue-600 font-bold">VISA</div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border-2 border-red-500 text-red-500 font-bold">MC</div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border-2 border-blue-800 text-blue-800 font-bold">JCB</div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border-2 border-blue-500 text-blue-500 font-bold">PP</div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center border-2 border-gray-300 text-gray-500 font-bold">ATM</div>
            </div>
          </div>
          {/* Dịch vụ giao hàng */}
          <div>
            <div className="font-semibold text-white mb-2">Dịch vụ giao hàng</div>
            <div className="flex gap-2">
              <div className="w-12 h-8 bg-[#ffa100] rounded flex items-center justify-center text-white font-bold">GHN</div>
              <div className="w-12 h-8 bg-[#ef2f5f] rounded flex items-center justify-center text-white font-bold">GHTK</div>
              <div className="w-12 h-8 bg-[#2179ff] rounded flex items-center justify-center text-white font-bold">VTP</div>
              <div className="w-12 h-8 bg-[#f2d21c] rounded flex items-center justify-center text-white font-bold">VNP</div>
            </div>
          </div>
          {/* Chứng nhận */}
          <div>
            <div className="font-semibold text-white mb-2">Chứng nhận</div>
            <div className="flex gap-2">
              <div className="w-12 h-8 bg-[#ff2020] rounded flex items-center justify-center text-white font-bold">BCT</div>
              <div className="w-12 h-8 bg-[#0099ff] rounded flex items-center justify-center text-white font-bold">DMCA</div>
              <div className="w-12 h-8 bg-[#23bb22] rounded flex items-center justify-center text-white font-bold">SSL</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: thông tin công ty + liên kết */}
      <div className="bg-[#111] py-6 px-4 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <div className="flex flex-wrap justify-between items-center">
            <div>© 2025Siêu Thị Online. Tất cả quyền được bảo lưu.</div>
            <div className="flex gap-4 text-gray-400">
              <div>Chính sách bảo mật</div>
              <div>Điều khoản sử dụng</div>
              <div>Sitemap</div>
            </div>
          </div>
          <div className="font-semibold text-white">Công ty TNHH Siêu Thị Online</div>
          <div>Địa chỉ: 123 đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</div>
          <div>Điện thoại: 1900 1234 | Email: support@sitecualt.com</div>
          <div>
            Giấy chứng nhận Đăng Ký Kinh doanh số 0132456789 do Sở Kế hoạch và Đầu tư TP. HCM cấp ngày 01/01/2020
          </div>
          <div>
            Chịu trách nhiệm nội dung: Nguyễn Văn A – Giám đốc
          </div>
        </div>
      </div>
    </div>
  );
}
