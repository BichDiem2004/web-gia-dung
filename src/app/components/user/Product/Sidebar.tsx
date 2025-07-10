import * as React from "react";
import { PriceFilter } from "./PriceFilter";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="flex flex-col py-5 mx-auto w-full text-xl bg-white rounded-lg max-md:mt-5">
      <div className="flex gap-2 items-center self-start ml-5 font-medium leading-tight text-black max-md:ml-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/26933527b6e397814e426e6f85240c6645076eb5?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Category icon"
        />
        <h2 className="self-stretch my-auto text-lg">Danh mục liên quan</h2>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5714056d84c785c8c0e55adc4e994fb695cc5d90?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
        className="object-contain mt-5 w-full aspect-[333.33] max-md:mr-0.5"
        alt="Category divider"
      />
      <div className="flex flex-col items-start px-5 mt-5 w-full">
        <div className="flex gap-2 items-center font-bold leading-tight text-blue-600">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1601b1620d0b49d8033aaa585b6180bb8bb3d058?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt="Personal care icon"
          />
          <span className="self-stretch my-auto text-lg text-blue-600">Chăm sóc cá nhân</span>
        </div>
        <nav className="flex flex-col mt-5 text-lg space-y-5">
          <a href="#" className="leading-tight text-zinc-500">Chăm sóc tóc</a>
          <a href="#" className="leading-tight text-zinc-500">Chăm sóc da mặt</a>
          <a href="#" className="leading-tight text-zinc-500">Chăm sóc cơ thể</a>
          <a href="#" className="leading-tight text-zinc-500">Phụ kiện làm đẹp</a>
        </nav>

        <div className="flex gap-2 items-center mt-10 font-semibold leading-tight text-black">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c37fc06327a0292a14858f47f172062d3e9ec0ed?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[23px]"
            alt="Filter icon"
          />
          <h3 className="self-stretch text-lg my-auto">BỘ LỌC TÌM KIẾM</h3>
        </div>

        <section className="mt-5 w-full">
          <h4 className="leading-tight text-lg text-zinc-500">Theo thương hiệu</h4>
          <div className="flex flex-col mt-5 text-lg space-y-5">
            {["Panasonic", "Elmich", "Philips", "Medisana", "Omron"].map((brand) => (
              <label key={brand} className="flex gap-2 items-start leading-tight whitespace-nowrap text-zinc-800">
                <input type="checkbox" className="object-contain shrink-0 aspect-square w-[23px]" />
                <span className="text-zinc-800">{brand}</span>
              </label>
            ))}
          </div>
        </section>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2524c5d2f3c91b63ebf662a630a42662cb693c51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="object-contain self-stretch mt-5 w-full"
          alt="Section divider"
        />

        <section className="mt-5 w-full">
          <h4 className="leading-tight text-lg text-zinc-500">Theo danh mục</h4>
          <div className="flex flex-col mt-5 text-lg space-y-5">
            <label className="flex gap-2 items-start leading-tight text-zinc-800">
              <input type="checkbox" className="object-contain shrink-0 aspect-square w-[23px]" />
              <span className="text-zinc-800">Bàn chải / Kem đánh</span>
            </label>
            <label className="flex gap-2 items-start leading-tight text-zinc-800">
              <input type="checkbox" className="object-contain shrink-0 aspect-square w-[23px]" />
              <span className="text-zinc-800">Cục lăn đá mặt</span>
            </label>
            {["Philips", "Medisana", "Omron"].map((item) => (
              <label key={item} className="flex gap-2 items-start leading-tight whitespace-nowrap text-zinc-800">
                <input type="checkbox" className="object-contain shrink-0 aspect-square w-[23px]" />
                <span className="text-zinc-800">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2524c5d2f3c91b63ebf662a630a42662cb693c51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="object-contain self-stretch mt-5 w-full"
          alt="Section divider"
        />

        <PriceFilter />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2524c5d2f3c91b63ebf662a630a42662cb693c51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="object-contain self-stretch mt-5 w-full"
          alt="Section divider"
        />

        <section className="mt-5 w-full">
          <h4 className="leading-tight text-lg text-zinc-500">Nơi bán</h4>
          <div className="flex flex-col mt-5 text-lg space-y-5">
            {["TP. Hồ Chí Minh", "Hà Nội", "Quận 1", "Quận 3", "Quận 10"].map((location) => (
              <label key={location} className="flex gap-2 items-start leading-tight text-zinc-800">
                <input type="checkbox" className="object-contain shrink-0 aspect-square w-[23px]" />
                <span className="text-zinc-800">{location}</span>
              </label>
            ))}
          </div>
          <button className="flex gap-2 justify-center items-center mt-5 leading-tight text-blue-600">
            <span className="self-stretch my-auto text-lg text-blue-600">Xem thêm</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa6058888b2400dceed2005ef22770ffc5a5b99?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Expand icon"
            />
          </button>
        </section>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2524c5d2f3c91b63ebf662a630a42662cb693c51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="object-contain self-stretch mt-5 w-full"
          alt="Section divider"
        />

        <section className="mt-5 w-full">
          <h4 className="self-stretch leading-tight text-lg text-zinc-500 max-md:mr-2.5">
            Theo dịch vụ & khuyến mãi
          </h4>
          <div className="flex flex-col mt-5 space-y-5">
            <label className="flex gap-2 items-start leading-tight text-zinc-800">
              <input type="checkbox" className="object-contain shrink-0 aspect-square w-[23px]" />
              <span className="text-lg text-zinc-800">Đang giảm giá</span>
            </label>
            <label className="flex gap-2 items-start leading-tight text-zinc-800">
              <input type="checkbox" className="object-contain shrink-0 aspect-square w-[23px]" />
              <span className="text-lg text-zinc-800">Hàng có sẵn</span>
            </label>
          </div>
        </section>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2524c5d2f3c91b63ebf662a630a42662cb693c51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
          className="object-contain self-stretch mt-5 w-full"
          alt="Section divider"
        />

        <section className="mt-5 w-full">
          <h4 className="leading-tight text-lg text-zinc-500">Theo đánh giá</h4>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57894a132aaf748f982db1092c639f7018048cf7?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            className="object-contain mt-3 w-[100px] h-5"
            alt="5 star rating"
          />
          <div className="flex gap-2 items-center mt-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86daf41a48158d789ad48f0783c2d241c893ecb5?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain w-[90px] h-5"
              alt="4+ star rating"
            />
            <span className=" text-sm ">( từ 4 trở lên )</span>
          </div>
          <div className="flex gap-2 items-center mt-3 ">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eeea9bf19214bfede11acf73021425737f08d76?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain w-[90px] h-5"
              alt="3+ star rating"
            />
            <span className="text-sm">( từ 3 trở lên )</span>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/125f2e8130119a532660f1f001b738343574b468?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain w-[90px] h-5"
              alt="2+ star rating"
            />
            <span className="text-sm">( từ 2 trở lên )</span>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/995147db0ed405cb58e67feb9605c8ed3cbae2f7?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain w-[90px] h-5"
              alt="1+ star rating"
            />
            <span className="text-sm">( từ 1 trở lên )</span>
          </div>
          <button className="w-full mt-4 py-2 text-sm text-rose-500 border border-rose-400 rounded">
            Xoá tất cả
          </button>
        </section>
      </div>
    </aside>
  );
};
