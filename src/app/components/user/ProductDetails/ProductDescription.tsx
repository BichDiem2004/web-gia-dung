import React from 'react';

export const ProductDescription = () => {
  return (
    <section className="flex flex-col py-5 pl-5 mt-5 max-w-full bg-white rounded-lg w-[1272px]">
      <h2 className="self-start text-xl font-medium leading-tight text-black">
        Mô tả sản phẩm
      </h2>
      <div className="mt-5 text-base leading-6 text-zinc-500 max-md:max-w-full">
        <p>Máy sấy tóc cao cấp Elmich HDE-1822 BH 24 tháng</p>
        <p>– TIÊU CHUẨN CHÂU ÂU – THIẾT KẾ BỞI TEAM DESIGN ELMICH CHÂU ÂU</p>
        <p>– Công nghệ sấy ion tạo hạt ion BẢO vệ và giữ ẩm cho tóc, giúp tóc bóng mượt bên ngoài mà vẫn giữ được độ ẩm mềm mại trong lõi tóc.</p>
        <p>– chế độ sấy linh hoạt với các mức điều chỉnh nhiệt độ và mức điều chỉnh gió</p>
        <p>– An toàn cho tóc của Bạn: Tự động ngắt điện khi thân máy quá nóng- đầu sấy tạo Kiểu tóc dễ dàng.</p>

        <h3 className="mt-4 font-medium">Thông số kỹ thuật</h3>
        <p>Công suất: 2000-2300W, 50Hz</p>
        <p>Tốc độ sấy3 chế độ: 2 mức độ sấy nóng, 1 chế độ sấy trung,1 mức độ sấy mát</p>
        <p>Điện áp: 220-240VAC</p>
        <p>Công dụng : Sấy tóc, làm khô nhanh, sấy ion, bảo vệ tóc</p>
        <p>Chất liệu vỏ : Nhựa ABS</p>
        <p>Tự động ngắt khi quá nhiệt: có</p>
        <p>Đầu sấy hẹp tạo kiểu : Có</p>
        <p>Kích thước sản phẩm: 280x220x80mm</p>
        <p>Trọng lượng sản phẩm: 830g</p>

        <h3 className="mt-4 font-medium">Hướng dẫn sử dụng</h3>
        <h4 className="mt-2 font-medium">1. Lần đầu tiên sử dụng:</h4>
        <p>Trong những phút đầu sử dụng ở lần đầu tiên, có thể bạn sẽ nhìn thấy một ít khói và có mùi nhẹ bay ra. Điều này là bình thường và không ảnh hưởng tới chất lượng sản phẩm.</p>

        <h4 className="mt-2 font-medium">2. Lưu ý khi sử dụng:</h4>
        <p>Kết nối thiết bị với nguồn điện phù hợp với thông số ghi trên thiết bị.</p>
        <p>Gạt công tắc đến vị trí sử dụng mà bạn cảm thấy phù hợp.</p>
        <p>Ngắt kết nối thiết bị với nguồn điện sau khi sử dụng.</p>
        <p>Để thiết bị tự nguội trước khi cất giữ.</p>

        <h4 className="mt-2 font-medium">3. Vệ sinh và bảo quản:</h4>
        <p>Trước khi muốn vệ sinh sản phẩm hãy rút phích cắm điện ra khỏi thiết bị.</p>
        <p>Sử dụng một miếng vải mềm, vải ẩm để vệ sinh tay cầm của sản phẩm. Không để nước và các chất lỏng khác chảy vào các khe hở của máy.</p>
        <p>Rút phích cắm điện ra khỏi thiết bị, để cho nó tự hạ nhiệt độ sau đó cất giữ thiết bị ở nơi khô ráo. Không cất giữ thiết bị khi nó đang còn nóng và vẫn còn kết nối với nguồn điện.</p>
        <p>Không treo thiết bị bằng dây, thả lỏng dây điện khi cất giữ. Không để các cạnh sắc đè lên dây dẫn vì nó có thể làm cho dây điện bị hở hoặc đứt.</p>
      </div>
      <img
        src="/Images/maysayelmich.png"
        className="object-contain mt-5 mr-5 w-full aspect-square max-md:mr-2.5 max-md:max-w-full"
        alt="Product detailed image"
      />
    </section>
  );
};
