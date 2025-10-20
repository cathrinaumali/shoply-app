import Link from "next/link";
import { Suspense } from "react";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";
import CategoryGridSkeleton from "@/components/layout/CategoryGridSkeleton";
import CategorySection from "@/components/layout/CategorySection";
import FeaturedProducts from "@/components/layout/FeaturedProducts";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        {/* Hero Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            priority
            className="object-cover w-full h-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/70 to-gray-900/60" />
        </div>
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to Shoply
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 drop-shadow">
            Shop simply for amazing products at unbeatable prices
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <Suspense fallback={<CategoryGridSkeleton />}>
              <CategorySection />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<ProductGridSkeleton />}>
            <FeaturedProducts />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
