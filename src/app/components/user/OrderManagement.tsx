// components/OrderManagementPage.js
export default function OrderManagementPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] py-6 px-2">
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-5 shadow">
        {/* Tiêu đề */}
        <div className="font-semibold text-lg text-[#222] mb-4">Quản lý đơn hàng</div>

        {/* Tabs */}
        <div className="flex border-b border-[#e8e8e8] text-[15px] mb-5 bg-[#f5f6fa] rounded-t-lg">
          <div className="px-4 py-2 border-b-2 border-[#1884ff] font-semibold text-[#1884ff] bg-white rounded-t-lg cursor-pointer">
            Tất cả đơn
          </div>
          <div className="px-4 py-2 text-[#8c8c8c] hover:text-[#1884ff] cursor-pointer">
            Chờ xác nhận (2)
          </div>
          <div className="px-4 py-2 text-[#8c8c8c] hover:text-[#1884ff] cursor-pointer">
            Đang xử lý
          </div>
          <div className="px-4 py-2 text-[#8c8c8c] hover:text-[#1884ff] cursor-pointer">
            Đang vận chuyển
          </div>
          <div className="px-4 py-2 text-[#8c8c8c] hover:text-[#1884ff] cursor-pointer">
            Đã giao
          </div>
          <div className="px-4 py-2 text-[#8c8c8c] hover:text-[#1884ff] cursor-pointer">
            Đã huỷ
          </div>
        </div>

        {/* Tìm kiếm */}
        <div className="mb-4">
          <input
            className="w-full border border-[#1884ff] rounded-lg px-4 py-2 text-[15px] bg-[#f5f6fa] text-[#222] placeholder:text-[#bdbdbd] outline-none focus:ring-2 focus:ring-[#1884ff] transition"
            placeholder="Tìm đơn hàng theo Mã đơn hàng hoặc Tên sản phẩm"
          />
        </div>

        {/* Đơn hàng */}
        <div className="space-y-5">

          {/* Đơn 1: Chờ xác nhận */}
          <div className="border-2 border-[#1884ff] bg-white rounded-lg p-4">
            <div className="flex items-center text-sm mb-1">
              <span className="flex items-center font-semibold text-[#fcb900]">
                <span className="mr-1">●</span>Chờ xác nhận
              </span>
              <span className="ml-3 text-[#8c8c8c]">20:08, Chủ nhật 23/07/2025</span>
            </div>
            {/* Sản phẩm 1 */}
            <div className="flex gap-3 mt-2">
              <img src="/Products/saytoc.jpg" alt="" className="w-16 h-16 object-cover rounded border" />
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#222]">Máy sấy tóc MINI CNHL màu COOLG</div>
                <div className="text-xs text-[#8c8c8c]">x1</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#8c8c8c]">Thành tiền</div>
                <div className="font-semibold text-[#222] text-base">500.000 ₫</div>
              </div>
            </div>
            {/* Sản phẩm 2 */}
            <div className="flex gap-3 mt-2">
              <img src="/Products/mayuontoc.jpg" alt="" className="w-16 h-16 object-cover rounded border" />
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#222]">Máy uốn tóc bấm Nhật LF1520 32MM</div>
                <div className="text-xs text-[#8c8c8c]">x1</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#8c8c8c]">Thành tiền</div>
                <div className="font-semibold text-[#222] text-base">500.000 ₫</div>
              </div>
            </div>
            {/* Tổng tiền + nút */}
            <div className="flex flex-col items-end mt-6">
              <div>
                <span className="text-[20px] text-[#8c8c8c] font-medium mr-1">Tổng tiền: </span>
                <span className="text-[22px] font-semibold text-[#222]">1.003.000</span>
                <span className="text-[22px] font-semibold text-[#222] underline decoration-2 decoration-[#222] ml-1">đ</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <button className="px-6 py-2 border border-[#1884ff] text-[#1884ff] rounded hover:bg-[#eaf4ff] text-[17px] font-medium transition">Xem chi tiết</button>
                <button className="px-6 py-2 border border-[#1884ff] bg-[#1884ff] text-white rounded hover:bg-[#1473cc] text-[17px] font-medium transition">Mua lại</button>
              </div>
            </div>
          </div>

          {/* Đơn 2: Đã giao */}
          <div className="border border-[#20c997] bg-white rounded-lg p-4">
            <div className="flex items-center text-sm mb-1">
              <span className="flex items-center font-semibold text-[#20c997]">
                <span className="mr-1">●</span>Đã giao
              </span>
              <span className="ml-3 text-[#8c8c8c]">20:08, Chủ nhật 25/07/2025</span>
            </div>
            <div className="flex gap-3 mt-2">
              <img src="/Products/mayhutmun.jpg" alt="" className="w-16 h-16 object-cover rounded border" />
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#222]">Máy hút mụn cầm tay gia việt 4 đầu (hút chuyên dụng)</div>
                <div className="text-xs text-[#8c8c8c]">x1</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#8c8c8c]">Thành tiền</div>
                <div className="font-semibold text-[#222] text-base">1.060.000 ₫</div>
              </div>
            </div>
            <div className="flex flex-col items-end mt-6">
              <div>
                <span className="text-[20px] text-[#8c8c8c] font-medium mr-1">Tổng tiền: </span>
                <span className="text-[22px] font-semibold text-[#222]">1.060.000</span>
                <span className="text-[22px] font-semibold text-[#222] underline decoration-2 decoration-[#222] ml-1">đ</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <button className="px-6 py-2 border border-[#1884ff] text-[#1884ff] rounded hover:bg-[#eaf4ff] text-[17px] font-medium transition">Xem chi tiết</button>
                <button className="px-6 py-2 border border-[#1884ff] bg-[#1884ff] text-white rounded hover:bg-[#1473cc] text-[17px] font-medium transition">Mua lại</button>
              </div>
            </div>
          </div>

          {/* Đơn 3: Đang xử lý */}
          <div className="border border-[#1884ff] bg-white rounded-lg p-4">
            <div className="flex items-center text-sm mb-1">
              <span className="flex items-center font-semibold text-[#1884ff]">
                <span className="mr-1">●</span>Đang xử lý
              </span>
              <span className="ml-3 text-[#8c8c8c]">20:08, Chủ nhật 25/07/2025</span>
            </div>
            <div className="flex gap-3 mt-2">
              <img src="/Products/mayrang.jpg" alt="" className="w-16 h-16 object-cover rounded border" />
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#222]">Máy hút mụn cầm tay gia việt 4 đầu (hút chuyên dụng)</div>
                <div className="text-xs text-[#8c8c8c]">x1</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#8c8c8c]">Thành tiền</div>
                <div className="font-semibold text-[#222] text-base">1.060.000 ₫</div>
              </div>
            </div>
            <div className="flex flex-col items-end mt-6">
              <div>
                <span className="text-[20px] text-[#8c8c8c] font-medium mr-1">Tổng tiền: </span>
                <span className="text-[22px] font-semibold text-[#222]">1.060.000</span>
                <span className="text-[22px] font-semibold text-[#222] underline decoration-2 decoration-[#222] ml-1">đ</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <button className="px-6 py-2 border border-[#1884ff] text-[#1884ff] rounded hover:bg-[#eaf4ff] text-[17px] font-medium transition">Xem chi tiết</button>
                <button className="px-6 py-2 border border-[#1884ff] bg-[#1884ff] text-white rounded hover:bg-[#1473cc] text-[17px] font-medium transition">Mua lại</button>
              </div>
            </div>
          </div>

          {/* Đơn 4: Đang vận chuyển */}
          <div className="border border-[#1884ff] bg-white rounded-lg p-4">
            <div className="flex items-center text-sm mb-1">
              <span className="flex items-center font-semibold text-[#1884ff]">
                <span className="mr-1">●</span>Đang vận chuyển
              </span>
              <span className="ml-3 text-[#8c8c8c]">20:08, Chủ nhật 25/07/2025</span>
            </div>
            <div className="flex gap-3 mt-2">
              <img src="/Products/mayhutmuncamtay.jpg" alt="" className="w-16 h-16 object-cover rounded border" />
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#222]">Máy hút mụn cầm tay gia việt 4 đầu (hút chuyên dụng)</div>
                <div className="text-xs text-[#8c8c8c]">x1</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#8c8c8c]">Thành tiền</div>
                <div className="font-semibold text-[#222] text-base">1.060.000 ₫</div>
              </div>
            </div>
            <div className="flex flex-col items-end mt-6">
              <div>
                <span className="text-[20px] text-[#8c8c8c] font-medium mr-1">Tổng tiền: </span>
                <span className="text-[22px] font-semibold text-[#222]">1.060.000</span>
                <span className="text-[22px] font-semibold text-[#222] underline decoration-2 decoration-[#222] ml-1">đ</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <button className="px-6 py-2 border border-[#1884ff] text-[#1884ff] rounded hover:bg-[#eaf4ff] text-[17px] font-medium transition">Xem chi tiết</button>
                <button className="px-6 py-2 border border-[#1884ff] bg-[#1884ff] text-white rounded hover:bg-[#1473cc] text-[17px] font-medium transition">Theo dõi đơn</button>
              </div>
            </div>
          </div>

          {/* Đơn 5: Đã huỷ */}
          <div className="border border-[#ff4d4f] bg-white rounded-lg p-4 opacity-70">
            <div className="flex items-center text-sm mb-1">
              <span className="flex items-center font-semibold text-[#ff4d4f]">
                <span className="mr-1">●</span>Đã huỷ
              </span>
              <span className="ml-3 text-[#8c8c8c]">20:08, Chủ nhật 25/07/2025</span>
            </div>
            <div className="flex gap-3 mt-2">
              <img src="/Products/caylanmatxa.jpg" alt="" className="w-16 h-16 object-cover rounded border" />
              <div className="flex-1">
                <div className="text-[15px] font-medium text-[#222]">Cây lăn massage 5ly thạch anh hồng không có mùi</div>
                <div className="text-xs text-[#8c8c8c]">x1</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#8c8c8c]">Thành tiền</div>
                <div className="font-semibold text-[#222] text-base">1.060.000 ₫</div>
              </div>
            </div>
            <div className="flex flex-col items-end mt-6">
              <div>
                <span className="text-[20px] text-[#8c8c8c] font-medium mr-1">Tổng tiền: </span>
                <span className="text-[22px] font-semibold text-[#222]">1.060.000</span>
                <span className="text-[22px] font-semibold text-[#222] underline decoration-2 decoration-[#222] ml-1">đ</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <button className="px-6 py-2 border border-[#1884ff] text-[#1884ff] rounded hover:bg-[#eaf4ff] text-[17px] font-medium transition">Xem chi tiết</button>
                <button className="px-6 py-2 border border-[#1884ff] bg-[#1884ff] text-white rounded hover:bg-[#1473cc] text-[17px] font-medium transition">Mua lại</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
