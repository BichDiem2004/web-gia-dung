"use client";
import * as React from "react";

interface ProductCardProps {
  productName: string;
  productImage: string;
  price: string;
  location: string;
  locationIcon: string;
  soldCount: string;
}

export function ProductCard({
  productName,
  productImage,
  price,
  location,
  locationIcon,
  soldCount
}: ProductCardProps) {
  return (
    <article className="flex-1 min-h-[250px]">
      <div className="h-full flex flex-col justify-between pt-px pb-5 bg-white rounded-lg border border-solid border-black border-opacity-10">
        <img
          src={productImage}
          className="object-cover w-full h-[160px] rounded-lg"
          alt={productName}
        />
        <div className="flex flex-col px-4 mt-2 w-full max-md:px-3 flex-grow">
          <h3 className="text-sm text-black font-medium line-clamp-2 h-[52px] leading-tight">
            {productName}
          </h3>
          <div className="flex gap-2 items-center  text-blue-600 text-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain w-[75px] h-2"
              alt="Rating"
            />            
            <div className=" my-auto text-blue-600">
              {soldCount}
            </div>
          </div>
          <div className="flex gap-2 items-center  text-lg text-rose-500 font-semibold">
            <div className="text-rose-500">
              <span style={{fontWeight: 600, color: "rgba(255,66,79,1)"}}>
                {price.split(' ')[0]}{" "}
              </span>
              <span style={{fontWeight: 600, textDecoration: "underline", color: "rgba(255,66,79,1)"}}>
                đ
              </span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/52768a07c419b51b884055d3c37ffd715aae09d5?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain w-[38px] h-[20px]"
              alt="Discount badge"
            />
          </div>
          <div className="flex gap-2 items-center mt-2 text-sm text-zinc-500">
            <img
              src={locationIcon}
              className="object-contain w-[15px] h-[15px]"
              alt="Location icon"
            />
            <div> {location} </div>
          </div>
        </div>
      </div>
    </article>
  );
}
