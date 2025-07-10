import * as React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  rating: string;
  soldCount: string;
  price: string;
  location: string;
  locationIcon: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  rating,
  soldCount,
  price,
  location,
  locationIcon
}) => {
  return (
    <article className="flex-1 min-h-[250px]">
      <div className="h-full flex flex-col justify-between pt-px pb-5 bg-white rounded-lg border border-solid border-black border-opacity-10">
        
        {/* Ảnh sản phẩm */}
        <img
          src={imageUrl}
          className="object-cover w-full h-[160px] rounded-lg "
          alt={title}
        />

        {/* Nội dung */}
        <div className="flex flex-col px-4 mt-2 w-full max-md:px-3 flex-grow">
          
          {/* Tiêu đề giới hạn dòng */}
          <h3 className="text-sm text-black font-medium line-clamp-2 h-[52px] leading-tight">
            {title}
          </h3>

          {/* Đánh giá & lượt bán */}
          <div className="flex gap-2 items-center  text-blue-600 text-sm">
            <img
              src={rating}
              className="object-contain w-[75px] h-2"
              alt="Rating stars"
            />
            <span className="text-zinc-500">|</span>
            <span className="text-blue-600">{soldCount}</span>
          </div>

          {/* Giá & giảm giá */}
          <div className="flex gap-2 items-center  text-lg text-rose-500 font-semibold">
            <span>
              {price}
              <span className="underline"> đ</span>
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/52768a07c419b51b884055d3c37ffd715aae09d5?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain w-[38px] h-[20px]"
              alt="Discount badge"
            />
          </div>

          {/* Địa điểm */}
          <div className="flex gap-2 items-center mt-2 text-sm text-zinc-500">
            <img
              src={locationIcon}
              className="object-contain w-[15px] h-[15px]"
              alt="Location icon"
            />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
