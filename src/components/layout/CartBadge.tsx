"use client";

import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { totalCartItems } = useCart();

  if (totalCartItems === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {totalCartItems > 99 ? "99+" : totalCartItems}
    </span>
  );
}
