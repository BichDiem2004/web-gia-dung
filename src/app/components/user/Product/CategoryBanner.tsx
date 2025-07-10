import * as React from "react";

interface CategoryBannerProps {}

export const CategoryBanner: React.FC<CategoryBannerProps> = () => {
  return (
    <section className="w-full px-5 py-8 bg-white rounded-lg max-w-[1596px] mx-auto">
      <h2 className="text-xl font-medium mb-6">Khám phá theo danh mục</h2>

      {/* Danh sách danh mục hiển thị cùng hàng */}
      <div className="flex justify-between flex-wrap gap-2">
        {/* Danh mục 1 */}
        <div className="flex flex-col items-center w-[300px] text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f54e979229a01b478cee1e3f3d47b00d8b5458a?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            className="w-full rounded-lg aspect-[1.5] object-cover"
            alt="Hair care category"
          />
          <h3 className="mt-3 text-base font-medium">Chăm sóc tóc</h3>
        </div>

        {/* Danh mục 2 */}
        <div className="flex flex-col items-center w-[300px] text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0480fd2f2329dcbcd313d0a6213a5d9b988ef6a9?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            className="w-full rounded-lg aspect-[1.5] object-cover"
            alt="Face care category"
          />
          <h3 className="mt-3 text-base font-medium">Chăm sóc da mặt</h3>
        </div>

        {/* Danh mục 3 */}
        <div className="flex flex-col items-center w-[300px] text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a27ad9b77dd135b495ac36e9d0b7e26cbac13862?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            className="w-full rounded-lg aspect-[1.5] object-cover"
            alt="Body care category"
          />
          <h3 className="mt-3 text-base font-medium">Chăm sóc cơ thể</h3>
        </div>

        {/* Danh mục 4 */}
        <div className="flex flex-col items-center w-[300px] text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdef4ecd8d553d30acb85f162ad97d7780447ec8?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
            className="w-full rounded-lg aspect-[1.5] object-cover"
            alt="Beauty accessories category"
          />
          <h3 className="mt-3 text-base font-medium">Phụ kiện làm đẹp</h3>
        </div>
      </div>
    </section>
  );
};
