import { Suspense } from "react";
import CategorySection from "@/components/layout/CategorySection";
import CategoryGridSkeleton from "@/components/layout/CategoryGridSkeleton";

export const metadata = {
  title: "Categories - Shoply",
  description: "Browse products by category",
};

export default async function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">All Categories</h2>
          <p className="text-gray-600">Browse products by category</p>
        </div>
        <Suspense fallback={<CategoryGridSkeleton />}>
          <CategorySection hideDescription />
        </Suspense>
      </div>
    </div>
  );
}
