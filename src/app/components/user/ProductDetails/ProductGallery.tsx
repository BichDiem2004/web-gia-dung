"use client";
import React, { useState } from 'react';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

export const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const thumbnails = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/e2dc0194da39096c12b713b3690e38b746385d03?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7f28a73494130a6cca5e4134920bd9e86225beba?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/1d95b28e408710af9f5561a3bec55f03b0bf2a74?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/82c77f8e9d9ff52fe1bcbb910010427803f3b57e?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/e99ab4f550c292c28c1efe748c4b8855f0c483dc?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803'
  ];

  return (
    <div className="w-2/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col">
        <img
          src="/Images/anhspchitiet.png"
          className="object-contain grow mt-1.5 w-full rounded-lg aspect-[1.13] max-md:mt-10 max-md:max-w-full"
          alt="Product main image"
        />
        <div className="flex gap-1.5 items-center mt-5">
          <button
            onClick={() => setCurrentImage(Math.max(0, currentImage - 1))}
            aria-label="Previous image"
          >
          <HiChevronLeft className="object-contain w-6 h-6 stroke-zinc-500"/>
          </button>
          <div className="flex overflow-hidden overflow-x-auto gap-5 min-w-60 w-[434px] max-md:max-w-full">
            {thumbnails.map((src, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`shrink-0 ${index === currentImage ? 'ring-2 ring-blue-500' : ''}`}
              >
                <img
                  src={src}
                  className="object-contain rounded-lg aspect-[0.94] w-[88px]"
                  alt={`Product thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentImage(Math.min(thumbnails.length - 1, currentImage + 1))}
            aria-label="Next image"
          >
          <HiChevronRight className="object-contain w-6 h-6 stroke-zinc-500"/>
          </button>
        </div>
      </div>
    </div>
  );
};
