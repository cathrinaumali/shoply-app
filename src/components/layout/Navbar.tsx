"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CartBadge from "./CartBadge";
import CartDrawer from "../cart/CartDrawer";
import { Suspense } from "react";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">Shoply</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-8">
              <Suspense fallback={null}>
                <SearchBar />
              </Suspense>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="hidden sm:inline text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Categories
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative focus:outline-none"
                aria-label="Open cart"
              >
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <CartBadge />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-3">
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
