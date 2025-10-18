"use client";

import { useState } from "react";
import ProductFilterBar from "@/components/products/ProductFilterBar";
import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/types/product";

interface ProductsClientProps {
  products: Product[];
}

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

  // Sort options
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
    { value: "rating", label: "Highest Rated" },
  ];

  // TODO: Implement filtering logic
  const filteredProducts = products;

  // TODO: Implement sorting logic
  const sortedProducts = filteredProducts;

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
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
        onPriceRangeChange={setPriceRange}
        sortOptions={sortOptions}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        resultsCount={sortedProducts.length}
        onResetFilters={handleResetFilters}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid products={sortedProducts} />
      </div>
    </>
  );
}
