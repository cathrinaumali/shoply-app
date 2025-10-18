"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/types/cart";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

interface CartItemProps {
  item: CartItemType;
  compact?: boolean;
}

export default function CartItem({ item, compact = false }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  if (compact) {
    return (
      <div className="flex gap-3">
        {/* Compact Image */}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-1">
          <Image
            loader={() => product.image}
            src={product.image}
            alt={product.title}
            width={60}
            height={60}
            className="object-contain h-full w-auto"
          />
        </div>

        {/* Compact Details */}
        <div className="flex-grow min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 truncate">
            {product.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {formatPrice(product.price)} × {quantity}
          </p>
          <p className="text-sm font-bold text-blue-600 mt-1">
            {formatPrice(subtotal)}
          </p>
        </div>

        {/* Compact Controls */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="px-2 py-1 text-xs font-semibold">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(product.id)}
            className="text-xs text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center p-2">
        <Image
          loader={() => product.image}
          src={product.image}
          alt={product.title}
          width={80}
          height={80}
          className="object-contain h-full w-auto"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-lg font-bold text-gray-900">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-1 font-semibold">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right">
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(subtotal)}
          </p>
        </div>

        {/* Remove Button */}
        <Button
          variant="danger"
          size="sm"
          onClick={() => removeFromCart(product.id)}
          className="w-full sm:w-auto"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
