export const API_BASE_URL = "https://fakestoreapi.com";

export const ENDPOINTS = {
  PRODUCTS: "/products",
  CATEGORIES: "/products/categories",
  PRODUCT_BY_ID: (id: string | number) => `/products/${id}`,
  PRODUCTS_BY_CATEGORY: (category: string) => `/products/category/${category}`,
};

export const STORAGE_KEYS = {
  CART: "tmi-cart",
};
