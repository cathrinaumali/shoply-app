import { Product } from "@/types/product";

export interface ProductGridProps {
  products: Product[];
}

export interface ProductCardProps {
  product: Product;
}

export interface FilterBarProps {
  // Categories
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;

  // Price Range
  minPrice: number;
  maxPrice: number;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;

  // Sort
  sortOptions: { value: string; label: string }[];
  selectedSort: string;
  onSortChange: (sort: string) => void;

  // Results count
  resultsCount: number;

  // Reset filters
  onResetFilters: () => void;

  hideCategory?: boolean;
}
