"use client";

import { useState, useMemo } from "react";
import ProductFilterBar from "@/components/products/ProductFilterBar";
import ProductGrid from "@/components/products/ProductGrid";
import { ProductsClientProps } from "./types";
import { sortOptions, SORT_OPTIONS } from "@/app/products/constants";

export default function ProductsClient({ products }: ProductsClientProps) {
  // Extract unique categories from products
  const categories = Array.from(new Set(products.map((p) => p.category))).map(
    (cat) => {
      // Format category names nicely
      return cat
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  );

  // Calculate price range
  const prices = products.map((p) => p.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  // Filter state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  // Sort state
  const [selectedSort, setSelectedSort] = useState("featured");

  const displayedProducts = useMemo(() => {
    const [minPrice, maxPrice] = priceRange;
    const result = products.filter((product) => {
      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      // Price filter
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesCategory && matchesPrice;
    });

    // Sorting
    switch (selectedSort) {
      case SORT_OPTIONS.PRICE_ASC:
        result.sort((a, b) => a.price - b.price);
        break;
      case SORT_OPTIONS.PRICE_DESC:
        result.sort((a, b) => b.price - a.price);
        break;
      case SORT_OPTIONS.NAME_ASC:
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case SORT_OPTIONS.NAME_DESC:
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case SORT_OPTIONS.RATING:
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // featured - keep original order
        break;
    }
    return result;
  }, [priceRange, products, selectedSort, selectedCategories]);

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
  };

  const handlePriceRangeChange = (rangeValue: [number, number]) => {
    setPriceRange(rangeValue);
  };

  const handleSortChange = (sortValue: string) => {
    setSelectedSort(sortValue);
  };

  return (
    <>
      <ProductFilterBar
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
        minPrice={minPrice}
        maxPrice={maxPrice}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceRangeChange}
        sortOptions={sortOptions}
        selectedSort={selectedSort}
        onSortChange={handleSortChange}
        resultsCount={displayedProducts.length}
        onResetFilters={handleResetFilters}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid products={displayedProducts} />
      </div>
    </>
  );
}
