"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCardProps } from "./types";
import { truncateText } from "@/lib/utils";
import Toast from "@/components/ui/Toast";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: ProductCardProps) {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      {showToast && (
        <Toast
          message={`Added "${truncateText(product.title, 30)}" to cart!`}
          onClose={() => setShowToast(false)}
        />
      )}
      <Link href={`/products/${product.id}`}>
        <div className="group relative">
          <div className="aspect-square w-full min-h-[320px] rounded-md bg-gray-100 flex items-center justify-center">
            <Image
              loader={() => product.image}
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="aspect-square h-full w-auto p-6 rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 line-clamp-2">
                <span aria-hidden="true" className="absolute inset-0 "></span>
                {product.title}
              </h3>
              {/* <p className="mt-1 text-sm text-gray-500">{product.category}</p> */}
            </div>
            <p className="text-sm font-medium text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>
          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <span className="text-yellow-500 text-sm mr-2">⭐</span>
              <span className="text-sm font-semibold text-gray-900">
                {product.rating.rate}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
