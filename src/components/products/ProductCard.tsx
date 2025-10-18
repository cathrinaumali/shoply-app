"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types/product";
import { formatPrice, truncateText } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Toast from "@/components/ui/Toast";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation();
    addToCart(product);
    setShowToast(true);
  };

  return (
    <>
      {showToast && (
        <Toast
          message={`Added "${truncateText(product.title, 30)}" to cart!`}
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        {/* Clickable area for product detail */}
        <Link
          href={`/products/${product.id}`}
          className="flex flex-col flex-grow"
        >
          {/* Image */}
          <div className="relative h-48 bg-gray-100 flex items-center justify-center p-4">
            <Image
              loader={() => product.image}
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-grow">
            {/* Category */}
            <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">
              {product.category}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {truncateText(product.title, 60)}
            </h3>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 mr-1">⭐</span>
              <span className="text-sm text-gray-600">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>

            {/* Price */}
            <div className="mt-auto">
              <p className="text-2xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        </Link>

        {/* Add to Cart Button - Outside Link to prevent navigation */}
        <div className="p-4 pt-0">
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
