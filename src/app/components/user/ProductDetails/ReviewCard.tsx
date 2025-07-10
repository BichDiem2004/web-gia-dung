"use client";
import * as React from "react";
import { FaStar, FaRegThumbsUp } from "react-icons/fa";
import { MdReport, MdVerified } from "react-icons/md";
import { Pagination } from "../Product/Pagination";

const ReviewCard: React.FC = () => {
  return (
    <article className="flex flex-col gap-6 p-5 rounded-lg bg-white shadow-sm max-w-full">
      <div className="flex justify-between items-start w-full">
        {/* Left Side: User info + review */}
        <div className="flex flex-col gap-6 max-w-[calc(100%-170px)]">
          {/* Header: User Info */}
          <header className="flex gap-4 items-center min-h-[65px]">
            <img
              src="Images/Avatarreview.png"
              alt="Võ Ngọc Minh Phương avatar"
              className="object-contain shrink-0 rounded-full w-[65px] aspect-square"
            />
            <div className="w-[215px]">
              <h3 className="text-xl font-medium text-black leading-tight">
                Võ Ngọc Minh Phương
              </h3>
              <time className="mt-2 text-lg text-zinc-500 leading-none">
                2 tháng trước
              </time>
            </div>
          </header>

          {/* Star Rating */}
          <div className="flex gap-2">
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
          </div>

          {/* Review Text */}
          <p className="text-lg leading-6 text-black max-w-full">
            chất lượng tốt có hai chiều gửi hàng nhanh cân thận, hoàn hảo cho
            việc sử dụng hàng ngày. Kết quả như ở salon chuyên nghiệp
          </p>

          {/* Review Actions */}
          <div className="flex gap-4 items-center text-lg font-medium text-zinc-500 w-[250px]">
            <button className="flex gap-2 items-center">
              <FaRegThumbsUp className="w-5 h-5 text-gray-500" />
              <span>Hữu ích (2)</span>
            </button>
            <button className="flex gap-2 items-center">
              <MdReport className="w-6 h-6 text-gray-500" />
              <span>Báo cáo</span>
            </button>
          </div>
        </div>

        {/* Product Image on the right */}
        <img
          src="Images/spdanhgia.png"
          alt="Product"
          className="object-contain self-start w-[149px] aspect-[0.75]"
        />
      </div>

      {/* Review Response */}
      <section className="flex flex-col gap-3 px-5 py-5 mt-6 w-full rounded-lg bg-slate-100">
        <header className="flex gap-4 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7655daad648d13a609aff4452fc9d202acaa6d1?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            alt="Trubie Home"
            className="object-contain w-[45px] aspect-[0.98]"
          />
          <div className="flex gap-2 items-center text-lg font-medium text-black">
            <h4>Trubie Home</h4>
            <MdVerified className="w-5 h-5 text-blue-500" />
          </div>
          <div className="w-px h-5 bg-zinc-400 opacity-50" />
          <time className="text-base text-zinc-500">2 tháng trước</time>
        </header>
        <p className="text-lg font-light leading-6 text-black">
          Trubie rất vui khi nhận được đánh giá 5⭐️ từ chị. Sự hài lòng của chị
          là động lực to lớn với Trubie đó ạ. Hy vọng chị Phương sẽ tiếp tục ủng
          hộ Trubie nha!
        </p>
      </section>
      <Pagination/>;
    </article>
    
  );
};

export default ReviewCard;
