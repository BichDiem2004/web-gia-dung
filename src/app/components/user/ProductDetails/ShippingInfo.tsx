import React from 'react';
import { FiInfo } from "react-icons/fi";

export const ShippingInfo = () => {
  return (
    <div className="flex flex-col p-5 mt-5 w-full text-black bg-white rounded-lg">
      <div className="flex gap-2 self-start">
        <h3 className="grow">Thông tin vận chuyển</h3>
        <FiInfo className="object-contain shrink-0 my-auto w-5 aspect-square"/>
      </div>
      <p className="mt-5 font-light leading-6">
        Giao đến 825 Sư Vạn Hạnh, Quận 10, TP.HCM
      </p>
      <button className="self-end mt-10 text-blue-600 max-md:mt-10">
        Thay Đổi
      </button>
    </div>
  );
};
