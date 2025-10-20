import { getProducts } from "@/lib/api";
import ProductsClient from "./ProductsClient";
// import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from "@/components/ui/ErrorMessage";

export const metadata = {
  title: "All Products - Shoply",
  description: "Browse all our products",
};

export default async function ProductsPage() {
  try {
    const products = await getProducts();

    return (
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              All Products
            </h1>
            <p className="text-gray-600">
              Discover our collection of {products.length} products
            </p>
          </div>
        </div>
        <ProductsClient products={products} />
      </div>
    );
  } catch (error) {
    // Log the error so the variable is used and to aid debugging
    console.error(error);
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage message="Failed to load products. Please try again later." />
      </div>
    );
  }
}
