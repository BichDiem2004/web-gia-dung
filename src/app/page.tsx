import HeaderComponent from "./components/header";
import BannerSection from "./components/user/BannerSection";
import CategoryMenu from "./components/user/CategoryMenu";
import FeaturedCollections from "./components/user/FeaturedCollections";
import FlashSaleSection from "./components/user/FlashSaleSection";
import Footer from "./components/user/Footer";
import PastelOffers from "./components/user/PastelOffers";
import PromotionIcons from "./components/user/PromotionIcons";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black ">
      <HeaderComponent />
      <div className="flex container m-auto">
<div className=""><CategoryMenu /></div>
       <div>
  <div className="bg-white mt-4">
        <div className=" mx-auto grid grid-cols-12 gap-4 px-4">
         
          <div className="my-4 mx-auto col-span-10"><BannerSection /></div>
        </div>
          <div className="bg-white mt-4 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <PromotionIcons />
        </div>
      </div>
      <FlashSaleSection />
      <FeaturedCollections />
      <PastelOffers />
      <Footer />
      </div>
    
       </div>
      </div>

    
    </div>
  );
}
