import { getProductsByCategory } from "@/lib/api";
import ProductGrid from "@/components/products/ProductGrid";
import { capitalizeFirstLetter } from "@/lib/utils";
import ErrorMessage from "@/components/ui/ErrorMessage";
import EmptyState from "@/components/ui/EmptyState";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  return {
    title: `${capitalizeFirstLetter(params.category)} - TMI Shop`,
    description: `Browse ${params.category} products`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  try {
    const products = await getProductsByCategory(params.category);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {capitalizeFirstLetter(params.category)}
          </h1>
          <p className="text-gray-600">Showing {products.length} products</p>
        </div>

        {products.length === 0 ? (
          <EmptyState
            icon="📦"
            title="No products found"
            description={`No products available in ${params.category} category.`}
          />
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    );
  } catch {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage message="Failed to load category products. Please try again later." />
      </div>
    );
  }
}
