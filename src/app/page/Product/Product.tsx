"use client";
import * as React from "react";
import { TopBar } from "@/app/components/user/Product/TopBar";
import { Header } from "@/app/components/user/Product/Header";
import { Breadcrumbs } from "@/app/components/user/Product/Breadcrumbs";
import { CategoryBanner } from "@/app/components/user/Product/CategoryBanner";
import { Sidebar } from "@/app/components/user/Product/Sidebar";
import { ProductGrid } from "@/app/components/user/Product/ProductGrid";

function Product() {
  return (
    <div className="flex flex-col items-center bg-zinc-100">
      {/* Header & Banner */}
      <div className="flex flex-col w-full text-base">
        <TopBar />
        <Header />
        <div className="mx-auto w-full max-w-screen-xl px-4 mt-4 text-blue-800 text-center">
          <Breadcrumbs />
          <img
            src="Images/Banner.png"
            className="object-contain mt-4 w-full aspect-[2.67]"
            alt="Category banner"
          />
        </div>
      </div>
      <CategoryBanner />
      {/* Nội dung chính: Sidebar + Grid */}
      <main className="mx-auto w-full max-w-screen-xl px-4 mt-5">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="w-[19%] max-md:w-full">
            <Sidebar />
          </aside>
          <section className="w-[81%] max-md:w-full">
            <ProductGrid />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Product;
