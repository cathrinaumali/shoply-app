export const API_BASE_URL = "https://fakestoreapi.com";

export const ENDPOINTS = {
  PRODUCTS: "/products",
  CATEGORIES: "/products/categories",
  PRODUCT_BY_ID: (id: string | number) => `/products/${id}`,
  PRODUCTS_BY_CATEGORY: (category: string) => `/products/category/${category}`,
};

export const STORAGE_KEYS = {
  CART: "shoply-cart",
};

export const CATEGORY_DISPLAY_MAP: Record<string, string> = {
  electronics: "Electronics",
  jewelery: "Jewelry",
  "men's clothing": "Men's Clothing",
  "women's clothing": "Women's Clothing",
};

export const CATEGORY_URL_MAP: Record<string, string> = {
  electronics: "electronics",
  jewelery: "jewelry",
  "men's clothing": "mens-clothing",
  "women's clothing": "womens-clothing",
};

export const URL_CATEGORY_MAP: Record<string, string> = {
  electronics: "electronics",
  jewelry: "jewelery",
  "mens-clothing": "men's clothing",
  "womens-clothing": "women's clothing",
};
