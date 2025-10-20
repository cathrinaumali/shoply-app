export default function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 lg:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Skeleton */}
        <div className="bg-white rounded-lg p-8 shadow-md animate-pulse">
          <div className="relative h-96 flex items-center justify-center bg-gray-200 rounded" />
        </div>

        {/* Product Info Skeleton */}
        <div>
          {/* Category skeleton */}
          <div className="mb-4">
            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
          </div>

          {/* Title skeleton */}
          <div className="mb-4 space-y-2">
            <div className="h-8 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>

          {/* Rating skeleton */}
          <div className="flex items-center mb-6">
            <div className="h-6 bg-gray-200 rounded w-24 animate-pulse mr-2" />
            <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          </div>

          {/* Price skeleton */}
          <div className="mb-6">
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse" />
          </div>

          {/* Description skeleton */}
          <div className="mb-8">
            <div className="h-6 bg-gray-200 rounded w-32 mb-3 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
          </div>

          {/* Quantity Selector skeleton - Desktop */}
          <div className="mb-6 hidden lg:block">
            <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse" />
            <div className="h-12 bg-gray-200 rounded w-32 animate-pulse" />
          </div>

          {/* Action Buttons skeleton - Desktop */}
          <div className="hidden lg:flex gap-4 mb-4">
            <div className="h-12 bg-gray-200 rounded flex-1 animate-pulse" />
            <div className="h-12 bg-gray-200 rounded flex-1 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Sticky Mobile Action Bar Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            {/* Price skeleton */}
            <div className="space-y-1">
              <div className="h-3 bg-gray-200 rounded w-16 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
            </div>

            {/* Quantity Selector skeleton */}
            <div className="h-9 bg-gray-200 rounded w-28 animate-pulse" />
          </div>

          {/* Action Buttons skeleton */}
          <div className="flex gap-3">
            <div className="h-10 bg-gray-200 rounded flex-1 animate-pulse" />
            <div className="h-10 bg-gray-200 rounded flex-1 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
