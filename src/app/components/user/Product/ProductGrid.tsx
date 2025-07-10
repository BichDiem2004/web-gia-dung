import * as React from "react";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";

interface ProductGridProps {}

export const ProductGrid: React.FC<ProductGridProps> = () => {
  const products = [
    {
      imageUrl: "https://elmich.vn/FileUpload/Images/hde1822_profile_01_4.png",
      title: "Máy sấy tóc Elmich HDE-1822",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "175.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dee2edbc162745874e3ec18aa7b60694c8cf4931?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a3133fe16a7dc81751a90da736d49ad5edc4a9e?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Nồi inox 304 cao cấp 5 đáy Kalpen Lermat",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dca96774ed894bfee01bba08c216848221c3b0d3?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1257264114f3fcd02cb7f5f1b4fc908b1a6fd2a4?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Nồi inox 304 cao cấp 5 đáy Kalpen Lermat",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aad0ca066574e34e301f46b7f406375f49efc5c?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/492f2588fdc2d32e11d42c4307f5dc102e3a6414?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Nồi inox 304 cao cấp 5 đáy Kalpen Lermat",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f5e2fc761d3b903b77c43605ce56525a9173deb?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dad379e1a2a1d949d657eaf712b1a6a866ef372?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Nồi inox 304 cao cấp 5 đáy Kalpen Lermat",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/50db3fad9f1a8eb7f12a56957f0de69e57eec60d?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ea080c5f3ebfb0b16dee1136b54c9880fae18b7?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy uốn tóc kiểu Pháp LIFE350 32MM",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/77ec1cf392e4ab1382883ff392e0576bec59f406?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/29b65f353f1da665e9f3a5d9786df7979bd52be7?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy duỗi, ép tóc ST3300",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecfd74da59b9117a4096ca5ff227a1c49fdd3c74?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a46fb4c343159b3e8aec540b9a728893d1668be?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Nồi inox 304 cao cấp 5 đáy Kalpen Lermat",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2de6e3e5a62f628ae0ffafe63c970148fbb20aba?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/eea80135bf52b8da7e0502af48173d45cc44b162?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Nồi inox 304 cao cấp 5 đáy Kalpen Lermat",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/53ee9edc337d2186921b61d4b6607ca3f3896f83?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/70ac3ec7fc70d1a2694255eec428cc7dfa93bc04?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy cạo râu Philips Shaver S9000",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b708fdb61749958d96e262c81b4bd4d568cb06b?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4d28f200d139bbe2ff58b7c2d575bdea00afa51?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy tăm nước vệ sinh răng FL-V33",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/afaf9d393541e9bc07236a97716e643713976d7e?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c78f34735dfecc7190a37e079668d926c9f9f397?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Bồn ngâm chân massage SK-195",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/20d6e07a69f31ec67f5422a8d9eac2fad13e1091?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/748a1fd48b14976d675ecdcbac2946f88cbcaa29?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy massage cổ vai Smart Neck JT-88",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/add63b2d544e48e2f58716db82479f7c7db1a222?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e53127e05e141fa223e5b9a7e038eae4ca970f27?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy hơ Gel T10 Pisan khoang vừa 2 tay",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff3b6e1d3488fd18d5a524e627f6e7809c59ae1e?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/13bc8a430734c381afebee8b9a881029a918ae0c?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Cây lăn massage đá thạch anh hồng nâng cơ mặt",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a7d935c374df4a5cb4b1001bdde3102ed5e16b2?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b506f9f6517f0631d7e86b911c009f59954c091?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Bộ dụng cụ chứa vật dụng cá nhân đa năng",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/deab4d0f2ceb5051e01bcb82870cf16518c3703c?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9335eb72233a6d58c7555655c59cd4662cbf5da?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy cạo râu Nhật Bản Panasonic",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83f6b5302be769d9f400f26d86b3edebddb3f559?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/860819e1a615f80165fffc96513754da9789f714?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Cân sức khoẻ điện tử HE-5 CAS",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b3d7b87ec4dc12d39ce424901bed14c5ffc17b5?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f06966a40e32c0ac2b6d170917b4ae97194f3ad2?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy đo huyết áp điện tử Boso Medicus Family 4",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a318c45bdd25db19bef8d3265e815244178369?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a220a6f3443c191f29d1419771906db8b0f33dc?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Nhiệt kế hồng ngoại đo không cần tiếp xúc",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e646c3bb85287add39092c561922eed151df9353?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/81bd15355c2023fb37459aef49313952e969c44d?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy khuếch tán tinh dầu cán hoa - Vân gỗ",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3dce44a04ebe5bc18170dc479e16dbf93bc8a52d?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b692d2252dce8688dee07b15dad81dc294536853?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy tạo độ ẩm Bear 5L SB-TA50M (Bản Quốc Tế)",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c145a5f02c11379b9c4962a84007e72550492dd?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc833cd4a69783c056648fd54b1ff1e0244a16e1?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy tạo ẩm công nghệ Homedics UHE-CMTF20",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a0060c25fe13e33c3a848cd3364c546cdccba04?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f07656331fec281659a247eec94d79503c20fa15?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy hút mụn cầm tay pin với 4 đầu hút chuyên dụng",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bd7b6bd5c74ad5944d010fec9b4742dd1965b18?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea3ca36b3b5fefddc1eeabc684aa1fa00957ef06?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Dụng cụ tiệt trùng UV Fatzbaby Mini 1 FB4501TN",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/130a8874f89ed08c4f79ca80d0dfd38ab9f43721?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/573b802aaf89734769ef1c703d7d989605f8b960?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy tăm nước dung tích 220ml kèm 4 đầu phun",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3aee6a04d8aba19f9643f05508b9ca19756f5556?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c15fd7f90d68acf92dc96126693717cfdb615e8?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Bồn ngâm chân massage SK-195",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16cbc37879d64a500846f030ffa8e4e740015817?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2633ca09b384398e78601d731586525615cad7ff?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy lấy cao răng tại nhà 2 đầu Fiko T6 Pro",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/82fa51fe4f5bd57ddaa7da20153f628a79cf037b?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b866e854edb830440067b7874cd6ab3d80cb20da?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Máy chà gót chân tẩy tế bào chết làm mềm chân",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce04d58b45f5c53f8b3f34d8c7a19fddf7cd48f3?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/acf5704558581d904e951cad079bbbba09f0771c?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      title: "Đầu bàn chải thay thế Oral-B iO Gentle Care",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c41ebfa539cc0742b381af5d05194314385fa623?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803",
      soldCount: "Đã bán 1,2k",
      price: "690.000",
      location: "TP. Hồ Chí Minh",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a212649f686b90e3bdd0f7604b26bf3b57d91491?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
    }
  ];

  const renderProductRow = (startIndex: number) => {
    return products.slice(startIndex, startIndex + 5).map((product, index) => (
      <ProductCard
        key={startIndex + index}
        imageUrl={product.imageUrl}
        title={product.title}
        rating={product.rating}
        soldCount={product.soldCount}
        price={product.price}
        location={product.location}
        locationIcon={product.locationIcon}
      />
    ));
  };

  return (
    <main className="flex flex-col px-5 pt-5 pb-9 mx-auto w-full bg-white rounded-lg max-md:mt-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full text-black max-md:max-w-full">
        <h1 className="self-stretch my-auto text-xl font-medium leading-tight">
          Tất cả sản phẩm
        </h1>
        <div className="flex gap-2 items-center self-stretch my-auto text-base min-w-60">
          <span className="self-stretch my-auto">Sắp xếp theo:</span>
          <div className="flex gap-6 items-center self-stretch px-0.5 py-2 my-auto rounded-lg border border-solid border-[color:var(--grey,#808089)] min-h-[38px] text-zinc-800 w-[184px]">
            <div className="flex gap-8 items-center self-stretch pl-2 my-auto w-[180px]">
              <span className="self-stretch my-auto text-zinc-800 w-[114px]">
                Phù hợp nhất
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cae3939ee4e0e8dc79859c53779143b3b6178afa?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Sort dropdown"
              />
            </div>
          </div>
          <button className="flex gap-2 justify-center items-center self-stretch my-auto rounded-lg border border-solid border-[color:var(--grey,#808089)] min-h-[38px] w-[110px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c37fc06327a0292a14858f47f172062d3e9ec0ed?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[23px]"
              alt="Filter icon"
            />
            <span className="self-stretch my-auto">Tất cả</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-4 text-sm">
        {renderProductRow(0)}
      </div>
      <div className="flex flex-wrap gap-3 mt-7 text-sm">
        {renderProductRow(5)}
      </div>
      <div className="flex flex-wrap gap-3 mt-3.5 text-sm">
        {renderProductRow(10)}
      </div>
      <div className="flex flex-wrap gap-3 mt-3.5 text-sm">
        {renderProductRow(15)}
      </div>
      <div className="flex flex-wrap gap-3 mt-3.5 text-sm">
        {renderProductRow(20)}
      </div>
      <div className="flex flex-wrap gap-3 mt-3.5 text-sm">
        {renderProductRow(25)}
      </div>

      <Pagination />
    </main>
  );
};
