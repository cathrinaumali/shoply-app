"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductDetailClientProps } from "../types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import { CATEGORY_DISPLAY_MAP, CATEGORY_URL_MAP } from "@/lib/constants";

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    router.push("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 lg:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="relative h-96 flex items-center justify-center">
            <Image
              loader={() => product.image}
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <Link
              key={product.category}
              href={`/categories/${
                CATEGORY_URL_MAP[product.category] || product.category
              }`}
              className="group relative"
            >
              <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                {CATEGORY_DISPLAY_MAP[product.category]}
              </span>
            </Link>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <span className="text-yellow-500 text-l mr-2">⭐</span>
              <span className="text-lg font-semibold text-gray-900">
                {product.rating.rate}
              </span>
            </div>
            <span className="text-gray-500 ml-2">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-4xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector - Hidden on mobile (shown in sticky bar) */}
          <div className="mb-6 hidden lg:block">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Quantity
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <span className="px-4 py-2 font-semibold flex-grow text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-4 mb-4">
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="lg"
              className="flex-1"
            >
              {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
            </Button>
            <Button
              onClick={handleBuyNow}
              variant="secondary"
              size="lg"
              className="flex-1"
            >
              Buy Now
            </Button>
          </div>

          {addedToCart && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              Product added to cart successfully!
            </div>
          )}
        </div>
      </div>

      {/* Sticky Mobile Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            {/* Price */}
            <div>
              <p className="text-xs text-gray-500">Total Price</p>
              <p className="text-xl font-bold text-gray-900">
                {formatPrice(product.price * quantity)}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <span className="px-3 py-1.5 font-semibold text-center min-w-[40px]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              variant="secondary"
              size="md"
              className="flex-1"
            >
              {addedToCart ? "✓ Added" : "Add to Cart"}
            </Button>
            <Button
              onClick={handleBuyNow}
              variant="primary"
              size="md"
              className="flex-1"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
