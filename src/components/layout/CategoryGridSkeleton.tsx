export default function CategoryGridSkeleton() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          {/* Image skeleton */}
          <div className="w-full rounded-lg bg-gray-200 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />

          {/* Title skeleton */}
          <div className="mt-6 h-4 bg-gray-200 rounded w-24" />

          {/* Description skeleton */}
          <div className="mt-2 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
