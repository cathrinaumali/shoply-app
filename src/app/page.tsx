import Link from "next/link";
import { getProducts, getCategories } from "@/lib/api";
import ProductGrid from "@/components/products/ProductGrid";
import { capitalizeFirstLetter } from "@/lib/utils";

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to TMI Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover amazing products at unbeatable prices
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category}`}
                className="bg-gray-100 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors group"
              >
                <div className="text-4xl mb-3">
                  {category === "electronics" && "💻"}
                  {category === "jewelery" && "💎"}
                  {category === "men's clothing" && "👔"}
                  {category === "women's clothing" && "👗"}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {capitalizeFirstLetter(category)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
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
