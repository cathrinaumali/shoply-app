"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartSummary() {
  const { totalItems, totalAmount } = useCart();

  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Total Items:</span>
          <span className="font-semibold">{totalItems}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span className="font-semibold">{formatPrice(totalAmount)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping:</span>
          <span className="font-semibold">FREE</span>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(totalAmount)}
          </span>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
        Proceed to Checkout
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        * This is a demo project. No actual checkout functionality.
      </p>
    </div>
  );
}
