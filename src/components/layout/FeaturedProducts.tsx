import Link from "next/link";
import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/products/ProductGrid";

export default async function FeaturedProducts() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          View All →
        </Link>
      </div>
      <ProductGrid products={featuredProducts} />
    </>
  );
}
