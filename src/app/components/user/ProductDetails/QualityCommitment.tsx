import React from 'react';

export const QualityCommitment = () => {
  const commitments = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e4516a41da2c983290207688b7feb6c5f061c784?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
      text: 'Được đồng kiểm khi nhận hàng'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8de05362a71e065eea7ab801cf6109596bde1161?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
      text: 'Đổi trả miễn phí lên đến 30 ngày. Được đổi ý.'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1da21dfc8e818a20d51089e0215cf12cf19256ab?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
      text: 'Được hoàn tiền 200% nếu là hàng giả'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfa4234ab0903670b5f166165d106015b44e7a00?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803',
      text: 'Hỗ trợ kỹ thuật & bảo hành tận tâm, miễn phí trọn đời tư vấn'
    }
  ];

  return (
    <div className="flex flex-col items-start py-5 pr-20 pl-5 w-full text-base text-black bg-white rounded-lg ">
      <h2 className="text-xl font-medium leading-tight">
        Cam Kết Chất Lượng – Dịch Vụ Hoàn Hảo
      </h2>
      {commitments.map((commitment, index) => (
        <div key={index} className="flex gap-4 items-center py-2.5 mt-5 min-h-[41px]">
          <img
            src={commitment.icon}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt="Commitment icon"
          />
          <p className="self-stretch my-auto max-md:max-w-full">
            {commitment.text}
          </p>
        </div>
      ))}
    </div>
  );
};
