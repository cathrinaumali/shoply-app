import Link from "next/link";
import { getProducts, getCategories } from "@/lib/api";
import ProductGrid from "@/components/products/ProductGrid";
import { capitalizeFirstLetter } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Get first 8 featured products
  const featuredProducts = products.slice(0, 8);

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
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category}`}
                  className="group relative"
                >
                  <Image
                    src={
                      category === "electronics"
                        ? "/categories/electronics.jpg"
                        : category === "jewelery"
                        ? "/categories/jewelry.jpg"
                        : category === "men's clothing"
                        ? "/categories/mens-clothing.jpg"
                        : "/categories/womens-clothing.jpg"
                    }
                    alt={capitalizeFirstLetter(category)}
                    width={400}
                    height={400}
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0"></span>
                    {capitalizeFirstLetter(category)}
                  </h3>
                  <p className="text-base font-semibold text-gray-700">
                    {category === "electronics"
                      ? "Latest gadgets, devices, and tech essentials"
                      : category === "jewelery"
                      ? "Elegant rings, necklaces, and fine jewelry"
                      : category === "men's clothing"
                      ? "Trendy shirts, jackets, and men's fashion"
                      : category === "women's clothing"
                      ? "Stylish dresses, tops, and women's apparel"
                      : "Shop our collections"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All →
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </div>
  );
}
