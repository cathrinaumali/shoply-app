import { getProduct } from "@/lib/api";
import ProductDetailClient from "./ProductDetailClient";
import ErrorMessage from "@/components/ui/ErrorMessage";

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const product = await getProduct(params.id);
    return {
      title: `${product.title} - TMI Shop`,
      description: product.description,
    };
  } catch {
    return {
      title: "Product Not Found - TMI Shop",
    };
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const product = await getProduct(params.id);

    return <ProductDetailClient product={product} />;
  } catch {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage message="Product not found or failed to load." />
      </div>
    );
  }
}
