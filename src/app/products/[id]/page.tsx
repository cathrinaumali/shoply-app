import { Suspense } from "react";
import { getProduct } from "@/lib/api";
import ProductDetailClient from "./ProductDetailClient";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import ErrorMessage from "@/components/ui/ErrorMessage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const product = await getProduct(id);
    return {
      title: `${product.title} - Shoply`,
      description: product.description,
    };
  } catch {
    return {
      title: "Product Not Found - Shoply",
    };
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const product = await getProduct(id);

    return (
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetailClient product={product} />
      </Suspense>
    );
  } catch {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage message="Product not found or failed to load." />
      </div>
    );
  }
}
