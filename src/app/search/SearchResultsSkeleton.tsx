import ProductSkeleton from "@/components/products/ProductSkeleton";

export default function SearchResultsSkeleton() {
  return (
    <div>
      {/* Header skeleton - matches "Search Results for..." section */}
      <div className="mb-8">
        {/* Title skeleton - "Search Results for [query]" - h1 text-4xl */}
        <div className="h-10 bg-gray-200 rounded w-96 mb-2 animate-pulse" />
        {/* Results count skeleton - "Found X products" - p text-gray-600 */}
        <div className="h-6 bg-gray-200 rounded w-44 animate-pulse" />
      </div>

      {/* Products grid skeleton - matches ProductGrid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
