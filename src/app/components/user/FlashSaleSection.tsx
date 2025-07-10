import CountdownComponent from "../time";
import ProductCard from "./ProductCard";

const products = [
  { img: "/Products/beptu.jpg", price: "1.220.000", sale: "-30%", sold: "1" },
  { img: "/Products/maygiat.jpg", price: "1.220.000", sale: "-30%", sold: "1" },
  { img: "/Products/lovisong.jpg", price: "1.220.000", sale: "-30%", sold: "1" },
  { img: "/Products/maysinhto.jpg", price: "1.220.000", sale: "-30%", sold: "1" },
  { img: "/Products/maylanh.jpg", price: "1.220.000", sale: "-30%", sold: "1" },
  { img: "/Products/tivi.jpg", price: "1.220.000", sale: "-30%", sold: "1" },
];

export default function FlashSaleSection() {
  return (
    <div className="bg-white mt-4 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <h2 className="text-xl font-semibold">Flash Sale</h2>
            <CountdownComponent />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 bg-[#fafbfc] p-4 rounded-xl">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
