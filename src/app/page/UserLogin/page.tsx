import Header2Component from '@/app/components/header2'
import BannerSection from '@/app/components/user/BannerSection'
import CategoryMenu from '@/app/components/user/CategoryMenu'
import FeaturedCollections from '@/app/components/user/FeaturedCollections'
import FlashSaleSection from '@/app/components/user/FlashSaleSection'
import Footer from '@/app/components/user/Footer'
import PastelOffers from '@/app/components/user/PastelOffers'
import PromotionIcons from '@/app/components/user/PromotionIcons'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black ">
      <Header2Component />
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
  )
}

export default page
