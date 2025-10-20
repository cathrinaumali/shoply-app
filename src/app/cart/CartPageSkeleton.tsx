export default function CartPageSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title skeleton */}
      <div className="h-10 bg-gray-200 rounded w-64 mb-8 animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items skeleton */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {/* Cart Item skeleton - repeat 3 times */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
              >
                {/* Product image skeleton */}
                <div className="w-24 h-24 bg-gray-200 rounded animate-pulse flex-shrink-0" />

                {/* Product details skeleton */}
                <div className="flex-grow space-y-2">
                  {/* Title skeleton */}
                  <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />

                  {/* Category skeleton */}
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />

                  {/* Price skeleton */}
                  <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />

                  {/* Quantity controls and remove button skeleton */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="h-9 bg-gray-200 rounded w-28 animate-pulse" />
                    <div className="h-9 bg-gray-200 rounded w-20 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary skeleton */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            {/* Summary title */}
            <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse" />

            {/* Summary items */}
            <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between mb-6">
              <div className="h-6 bg-gray-200 rounded w-16 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
            </div>

            {/* Checkout button skeleton */}
            <div className="h-12 bg-gray-200 rounded w-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
