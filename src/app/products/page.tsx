import { Suspense } from "react";
import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/products/ProductGrid";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from "@/components/ui/ErrorMessage";

export const metadata = {
  title: "All Products - TMI Shop",
  description: "Browse all our products",
};

export default async function ProductsPage() {
  try {
    const products = await getProducts();

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">Showing {products.length} products</p>
        </div>

        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <ProductGrid products={products} />
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage message="Failed to load products. Please try again later." />
      </div>
    );
  }
}
