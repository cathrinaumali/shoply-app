"use client";

import { useState } from "react";
import { FilterBarProps } from "./types";

export default function ProductFilterBar({
  categories,
  selectedCategories,
  onCategoryChange,
  minPrice,
  maxPrice,
  priceRange,
  onPriceRangeChange,
  sortOptions,
  selectedSort,
  onSortChange,
  resultsCount,
  onResetFilters,
}: FilterBarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPriceExpanded, setIsPriceExpanded] = useState(true);
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(true);

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    priceRange[0] !== minPrice ||
    priceRange[1] !== maxPrice;

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Always Visible */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          {/* Left: Filter Toggle & Results Count */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="hidden sm:inline">Filters</span>
              {hasActiveFilters && (
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {selectedCategories.length +
                    (priceRange[0] !== minPrice || priceRange[1] !== maxPrice
                      ? 1
                      : 0)}
                </span>
              )}
            </button>

            <p className="text-sm text-gray-600 hidden md:block">
              <span className="font-semibold text-gray-900">
                {resultsCount}
              </span>{" "}
              products found
            </p>
          </div>

          {/* Right: Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort-select"
              className="text-sm text-gray-600 hidden sm:inline"
            >
              Sort by:
            </label>
            <select
              id="sort-select"
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-gray-700 cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Expandable Filter Panel */}
        {isFilterOpen && (
          <div className="border-t border-gray-200 py-6 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Price Range Filter */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsPriceExpanded(!isPriceExpanded)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Price Range
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isPriceExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isPriceExpanded && (
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">
                        ${priceRange[0]}
                      </span>
                      <span className="text-gray-400">-</span>
                      <span className="font-medium text-gray-700">
                        ${priceRange[1]}
                      </span>
                    </div>

                    {/* Dual Range Slider */}
                    <div className="relative pt-2 pb-4">
                      <div className="relative h-2 bg-gray-200 rounded-full">
                        <div
                          className="absolute h-2 bg-blue-600 rounded-full"
                          style={{
                            left: `${
                              ((priceRange[0] - minPrice) /
                                (maxPrice - minPrice)) *
                              100
                            }%`,
                            right: `${
                              100 -
                              ((priceRange[1] - minPrice) /
                                (maxPrice - minPrice)) *
                                100
                            }%`,
                          }}
                        />
                      </div>
                      <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[0]}
                        onChange={(e) =>
                          onPriceRangeChange([
                            Number(e.target.value),
                            priceRange[1],
                          ])
                        }
                        className="absolute w-full h-2 -top-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md"
                      />
                      <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) =>
                          onPriceRangeChange([
                            priceRange[0],
                            Number(e.target.value),
                          ])
                        }
                        className="absolute w-full h-2 -top-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md"
                      />
                    </div>

                    {/* Quick Price Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => onPriceRangeChange([minPrice, 50])}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                      >
                        Under $50
                      </button>
                      <button
                        onClick={() => onPriceRangeChange([50, 100])}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                      >
                        $50 - $100
                      </button>
                      <button
                        onClick={() => onPriceRangeChange([100, maxPrice])}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                      >
                        Over $100
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className="space-y-3 md:col-span-1 lg:col-span-2">
                <button
                  onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Categories
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isCategoryExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isCategoryExpanded && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {categories.map((category) => {
                      const isSelected = selectedCategories.includes(category);
                      return (
                        <button
                          key={category}
                          onClick={() => toggleCategory(category)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
                            isSelected
                              ? "bg-blue-600 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {category}
                          {isSelected && (
                            <span className="ml-2 inline-block">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  {selectedCategories.length > 0 && (
                    <span>
                      {selectedCategories.length} categor
                      {selectedCategories.length === 1 ? "y" : "ies"}
                    </span>
                  )}
                  {selectedCategories.length > 0 &&
                    (priceRange[0] !== minPrice ||
                      priceRange[1] !== maxPrice) &&
                    " • "}
                  {(priceRange[0] !== minPrice ||
                    priceRange[1] !== maxPrice) && <span>Custom price</span>}
                </p>
                <button
                  onClick={onResetFilters}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Active Filter Pills (Mobile-friendly) */}
        {hasActiveFilters && !isFilterOpen && (
          <div className="flex flex-wrap gap-2 pb-4">
            {selectedCategories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                {category}
                <button
                  onClick={() => toggleCategory(category)}
                  className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            ))}
            {(priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                ${priceRange[0]} - ${priceRange[1]}
                <button
                  onClick={() => onPriceRangeChange([minPrice, maxPrice])}
                  className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
