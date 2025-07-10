"use client";
import React from 'react';
import { TopBar } from '@/app/components/user/Product/TopBar';
import { Header } from '@/app/components/user/Product/Header';
import Breadcrumbs from '@/app/components/user/ProductDetails/Breadcrumbs';
import { ProductGallery } from '@/app/components/user/ProductDetails/ProductGallery';
import { ProductInfo } from '@/app/components/user/ProductDetails/ProductInfo';
import { SellerInfo } from '@/app/components/user/ProductDetails/SellerInfo';
import { ShippingInfo } from '@/app/components/user/ProductDetails/ShippingInfo';
import { ProductSpecs } from '@/app/components/user/ProductDetails/ProductSpecs';
import { QualityCommitment } from '@/app/components/user/ProductDetails/QualityCommitment';
import { ProductDescription } from '@/app/components/user/ProductDetails/ProductDescription';
import { CustomerReviews } from '@/app/components/user/ProductDetails/CustomerReviews';
import ReviewCard from '@/app/components/user/ProductDetails/ReviewCard';

function ProductDetails() {
  return (
    <div className="flex flex-col bg-zinc-100">
      <TopBar />
      <Header />

      <main className="mx-auto w-full max-w-screen-xl px-4 mt-5 flex flex-col items-start">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[75%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-5 max-md:max-w-full">
                <Breadcrumbs />

                <article className="px-5 pt-3.5 pb-10 mt-12 w-full bg-white rounded-lg max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <ProductGallery />
                      <ProductInfo />
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <aside className="ml-5 w-[25%] max-md:ml-0 max-md:w-full">
              <div className="mt-10 text-base font-medium">
                <SellerInfo />
                <ShippingInfo />
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-5 max-w-full w-[1272px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <ProductSpecs />
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <QualityCommitment />
            </div>
          </div>
        </div>

        <ProductDescription />

        {/* ✅ Gộp CustomerReviews và ReviewCard */}
        <div className="w-full max-w-[1272px] mt-5">
          <CustomerReviews />
          <div className="mt-5">
            <ReviewCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;
