import * as React from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

interface PaginationProps {}

export const Pagination: React.FC<PaginationProps> = () => {
  return (
    <nav className="flex flex-wrap gap-4 items-center self-end mt-9 max-md:max-w-full" aria-label="Pagination">
      <button className="flex flex-col justify-center items-center self-stretch px-2.5 my-auto rounded-lg border border-solid border-[color:var(--grey,#808089)] h-[45px] min-h-[45px] w-[45px]" aria-label="Previous page">
        <div className="flex overflow-hidden flex-col justify-center items-center px-px py-0.5 min-h-[15px] w-[15px]">
          <HiChevronLeft className="w-6 h-6 text-zinc-500" />
        </div>
      </button>
      <button className="self-stretch px-2.5 my-auto text-xl text-center text-white whitespace-nowrap bg-blue-600 rounded-lg h-[45px] min-h-[45px] w-[45px]" aria-current="page">
        1
      </button>
      <button className="self-stretch px-2.5 my-auto text-xl text-center whitespace-nowrap rounded-lg border border-solid border-[color:var(--grey,#808089)] h-[45px] min-h-[45px] text-zinc-500 w-[45px]">
        2
      </button>
      <button className="self-stretch px-2.5 my-auto text-xl text-center whitespace-nowrap rounded-lg border border-solid border-[color:var(--grey,#808089)] h-[45px] min-h-[45px] text-zinc-500 w-[45px]">
        3
      </button>
      <button className="self-stretch px-2.5 my-auto text-xl text-center whitespace-nowrap rounded-lg border border-solid border-[color:var(--grey,#808089)] h-[45px] min-h-[45px] text-zinc-500 w-[45px]">
        4
      </button>
      <button className="self-stretch px-2.5 my-auto text-xl text-center whitespace-nowrap rounded-lg border border-solid border-[color:var(--grey,#808089)] h-[45px] min-h-[45px] text-zinc-500 w-[45px]">
        5
      </button>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/38c506b1d5ab262457e596e1ceb8f658ab1907e2?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt="More pages"
      />
      <button className="self-stretch pr-1.5 pl-1.5 my-auto text-xl text-center whitespace-nowrap rounded-lg border border-solid border-[color:var(--grey,#808089)] h-[45px] min-h-[45px] text-zinc-500 w-[45px]">
        25
      </button>
      <button className="flex flex-col justify-center items-center self-stretch px-2.5 py-4 my-auto rounded-lg min-h-[45px] w-[45px]" aria-label="Next page">
        <div className="flex overflow-hidden flex-col justify-center items-center px-px py-0.5 min-h-[15px] w-[15px]">
          <HiChevronRight className="w-8 h-8 fill-blue-600" />
        </div>
      </button>
    </nav>
  );
};
