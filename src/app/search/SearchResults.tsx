"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/products/ProductGrid";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import EmptyState from "@/components/ui/EmptyState";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function searchProducts() {
      try {
        setLoading(true);
        setError(null);
        const allProducts = await getProducts();

        if (query) {
          const filtered = allProducts.filter(
            (product) =>
              product.title.toLowerCase().includes(query.toLowerCase()) ||
              product.description.toLowerCase().includes(query.toLowerCase()) ||
              product.category.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filtered);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to search products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    searchProducts();
  }, [query]);

  if (loading) {
    return <LoadingSpinner size="lg" />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!query) {
    return (
      <EmptyState
        icon="🔍"
        title="No search query"
        description="Please enter a search term to find products."
      />
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Search Results for &quot;{query}&quot;
        </h1>
        <p className="text-gray-600">
          {products.length === 0
            ? "No products found"
            : `Found ${products.length} product${
                products.length === 1 ? "" : "s"
              }`}
        </p>
      </div>

      {products.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No results found"
          description={`We couldn't find any products matching "${query}". Try searching with different keywords.`}
          action={
            <Link href="/products">
              <Button variant="primary" size="lg">
                Browse All Products
              </Button>
            </Link>
          }
        />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
