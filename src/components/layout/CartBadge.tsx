"use client";

import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {totalItems > 99 ? "99+" : totalItems}
    </span>
  );
}
