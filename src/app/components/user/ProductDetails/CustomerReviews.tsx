import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

export const CustomerReviews = () => {
  const filterOptions = [
    { label: 'Tất cả', active: true },
    { label: 'Có hình/video(2.1K)', active: false },
    { label: '5 Sao (85)', active: false },
    { label: '4 Sao (5)', active: false },
    { label: '3 Sao (5)', active: false },
    { label: '2 Sao (0)', active: false },
    { label: '1 Sao (0)', active: false }
  ];

  return (
    <section className="flex flex-col items-start pt-5 pr-20 pl-5 mt-5 max-w-full bg-white rounded-lg pb-10 w-[1272px] max-md:pr-5">
      <h2 className="text-xl font-medium leading-tight text-black">
        Đánh giá từ khách hàng
      </h2>

      <div className="px-5 py-5 mt-5 max-w-full rounded-lg border border-blue-200 border-solid bg-slate-50 w-[719px]">
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-2 whitespace-nowrap">
            <span className="grow text-4xl font-bold text-black">4.2</span>
            <span className="self-start mt-3 text-2xl font-medium text-zinc-500">/5</span>
          </div>
          <div className="flex flex-wrap flex-auto gap-2 my-auto text-base text-zinc-500">
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaRegStar className="text-yellow-400 w-6 h-6" />
            <span className="ml-auto text-sm my-auto">95 đánh giá</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-5 w-full text-base text-zinc-800">
          {filterOptions.slice(0, 5).map((option, index) => (
            <button
              key={index}
              className={`gap-2.5 px-3 py-2.5 rounded-lg border border-solid min-h-[37px] ${
                option.active
                  ? 'font-semibold text-blue-600 border-[color:var(--blue,#0A68FF)]'
                  : 'border-[color:var(--grey-rating,rgba(199,199,199,0.50))] text-zinc-800'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mt-5 max-w-full text-base text-zinc-800 w-[236px]">
          {filterOptions.slice(5).map((option, index) => (
            <button
              key={index}
              className="gap-2.5 px-3 py-2.5 rounded-lg border border-solid border-[color:var(--grey-rating,rgba(199,199,199,0.50))] min-h-[37px] text-zinc-800"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
