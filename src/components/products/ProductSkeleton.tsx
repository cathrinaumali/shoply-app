export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200" />

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title skeleton - 2 lines */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Rating skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 bg-gray-200 rounded w-24" />
          <div className="h-4 bg-gray-200 rounded w-12" />
        </div>

        {/* Price skeleton */}
        <div className="h-6 bg-gray-200 rounded w-20" />
      </div>
    </div>
  );
}
