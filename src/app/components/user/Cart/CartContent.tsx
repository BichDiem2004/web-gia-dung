"use client";
import * as React from "react";
import { CartHeader } from "./CartHeader";
import { CartItem } from "./CartItem";
import { ProductCard } from "./ProductCard";
import { QuantitySelector1 } from "./QuantitySelector1";
import { HiChevronRight } from "react-icons/hi";
import { FiTrash } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa";

export function CartContent() {
    const [quantity, setQuantity] = React.useState(1); // quản lý số lượng

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="w-full max-md:mt-5 max-md:max-w-full">
      <CartHeader />

      {/* --- START: Trubie Shop section --- */}
      <div className="flex flex-col gap-4 p-5 bg-white rounded-lg mt-4">
        {/* Header shop */}
        <div className="flex items-center gap-2 text-base font-medium text-black">
          <input type="checkbox" className="w-5 h-5 border-2 border-black" />
          <span>Trubie Shop</span>
          <HiChevronRight className="w-1.5 h-auto text-gray-700" />
        </div>
        {/* chia cot */}
        <div className="flex items-start gap-10 py-4 ">
            {/*cot sản phẩm */}
            <div className="">
                {/* SP1 */}
                <div className="flex items-center gap-4 py-2 ">
                    <input type="checkbox" className=" w-5 h-5" />
                    <img
                        src="Images/maysay2.jpg"
                        className="w-[100px] h-[100px] object-contain"
                        alt="Máy sấy"
                    />
                    <div className="text-sm text-black">
                    Máy sấy tóc MINI CWELL mẫu CO1HD               
                    </div>
                </div>
                {/* SP2 */}
                <div className="flex items-center gap-4 py-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <img
                        src="Images/mayuontoc.jpg"
                        className="w-[100px] h-[100px] object-contain"
                        alt="Máy uốn"
                    />
                    <div className="text-sm text-black">
                    Máy uốn tóc tự xoay               
                    </div>
                </div>

            </div>
            {/*cot Don gia */}
            <div >
                {/* SP1 */}
                <div className="flex flex-col mt-10 text-sm items-start -space-y-1 transform -translate-x-1">
                    <span className="text-zinc-500 line-through">750.000 đ</span>
                    <span className="text-rose-500 font-semibold">690.000 đ</span>
                </div>
                {/* SP2 */}
                <div className="text-rose-500 text-sm mt-22 font-semibold">500.000 đ</div>
            </div>
            {/*cot So luong */}
            <div className="mt-9">
                {/* SP! */}
                <QuantitySelector1 quantity={quantity} onQuantityChange={handleQuantityChange} />
                {/* SP2 */}
                <div className="mt-21">
                    <QuantitySelector1 quantity={quantity} onQuantityChange={handleQuantityChange} />
                    <div className="text-xs text-center text-amber-400 font-medium mt-2">Còn 2 sản phẩm</div>
                </div>
            </div>
            {/*cot Thanh tien */}
            <div className="mt-13">
                {/* SP1 */}
                <div className="text-rose-500 text-sm font-semibold">690.000 đ</div>
                {/* SP2 */}
                <div className="text-rose-500 text-sm mt-24 font-semibold">500.000 đ</div>
            </div>
            {/*cot Xoa */}
            <div className="mt-12">
                {/* SP1 */}
                <button className="flex items-center gap-1 text-sm text-zinc-500">
                    Xoá
                    <FiTrash className="w-[18px] h-[18px] text-zinc-500 my-auto shrink-0" />
                </button>
                {/* Sp2 */}
                <button className="flex items-center gap-1 text-sm text-zinc-500 mt-24">
                    Xoá
                    <FiTrash className="w-[18px] h-[18px] text-zinc-500 my-auto shrink-0" />
                </button>

            </div>
            
        </div>
        
        <div className="flex flex-col mt-14 w-full">      
          <div className="w-full h-[1px] bg-gray-300 my-auto" /> 
          <div className="flex gap-2 items-center self-start mt-3 text-sm">     
            <FaShippingFast className="text-[#2679ff] w-6 h-6" />     
            <div className="self-stretch my-auto">
              Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k
            </div>
            <FiInfo className="object-contain my-auto w-[10px] text-gray-500" />
          </div>
        </div>
      </div>
      {/* --- END: Trubie Shop section --- */}

      <section className="flex overflow-hidden flex-col px-5 py-5 mt-5 w-full text-sm bg-white rounded-lg max-md:max-w-full">
        <h2 className="self-start text-lg font-medium leading-tight text-black">
          Có thể bạn cũng thích
        </h2>
        <div className="flex flex-wrap gap-3 mt-4">
          <ProductCard
            productName="Lược chải điện không dây ION âm FIKO EC01"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/1dad379e1a2a1d949d657eaf712b1a6a866ef372?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea06482a403cd94f68cc56f172962b12f2c13a9?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Máy hút mụn cầm tay pin với 4 đầu hút chuyên dụng"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/f07656331fec281659a247eec94d79503c20fa15?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/34a2caf58a888c4cc0518946e399bcd4f62812f6?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Máy tăm nước dung tích 220ml kèm 4 đầu phun"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/573b802aaf89734769ef1c703d7d989605f8b960?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/a72b484841c429ac235552295182b7dd0f05df8f?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Máy uốn tóc kiểu Pháp LIFE350 32MM"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/8ea080c5f3ebfb0b16dee1136b54c9880fae18b7?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/6827f7f3a5f5e0323b609fd2a0cc45926e5b9eb8?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Máy rửa, massage mặt halio"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3133fe16a7dc81751a90da736d49ad5edc4a9e?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/e712ba06dc009b5212101dbbaad67e47d0839f51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <ProductCard
            productName="Cây lăn massage đá thạch anh hồng nâng cơ mặt"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/13bc8a430734c381afebee8b9a881029a918ae0c?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/b52624f3df7976011ce521cb5591c774f8a95753?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Máy hơ Gel T10 Pisan khoang vừa 2 tay"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e53127e05e141fa223e5b9a7e038eae4ca970f27?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/85470dba7a91f7aeb9102a06cbd08389a082b0e7?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Bộ dụng cụ làm móng đầy đủ"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/eea80135bf52b8da7e0502af48173d45cc44b162?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a385955658d91ac92d088c3422c0ad19656878?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Máy duỗi, ép tóc ST3300"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/29b65f353f1da665e9f3a5d9786df7979bd52be7?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/bac36dcabc5650b844b9be4623e8ed2a4b096c6f?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
          <ProductCard
            productName="Máy tăm nước vệ sinh răng FL-V33"
            productImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d28f200d139bbe2ff58b7c2d575bdea00afa51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            price="690.000 đ"
            location="TP. Hồ Chí Minh"
            locationIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/79e05b76e9b6a13fd727d16e4a191de40852be67?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            soldCount="Đã bán 1,2k"
          />
        </div>
      </section>
    </div>
  );
}
