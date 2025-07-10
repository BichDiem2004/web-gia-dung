import React from 'react';

export const ProductSpecs = () => {
  const specs = [
    { label: 'Thương hiệu', value: 'Elmich' },
    { label: 'Chất liệu', value: 'Nhựa ABS' },
    { label: 'Model', value: 'HDE-1822' },
    { label: 'Bảo hành', value: '12 tháng' },
    { label: 'Công suất', value: '1800W' },
    { label: 'Xuất xứ', value: 'Việt Nam' },
    { label: 'Điện áp', value: '220V' },
    { label: 'Trọng lượng', value: '0.5kg' }
  ];

  return (
    <div className="p-5 w-full bg-white rounded-lg max-md:mt-5 max-md:max-w-full">
      <h2 className="self-start text-xl font-medium leading-tight text-black mb-5">
        Thông tin chi tiết
      </h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-5 w-full text-base">
        {specs.map((spec, index) => (
          <div key={index} className="flex gap-10 items-center py-2.5 min-h-[41px]">
            <span className="text-zinc-500">{spec.label}</span>
            <span className="text-black">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
