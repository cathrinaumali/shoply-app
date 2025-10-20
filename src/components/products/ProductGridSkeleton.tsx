import ProductSkeleton from "./ProductSkeleton";
import { ProductGridSkeletonProps } from "./types";

export default function ProductGridSkeleton({
  count = 8,
}: ProductGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}
