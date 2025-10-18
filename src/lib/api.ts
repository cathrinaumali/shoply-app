import { Product } from "@/types/product";
import { API_BASE_URL, ENDPOINTS } from "./constants";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}${ENDPOINTS.PRODUCTS}`, {
      // Use ISR so Next can statically generate pages and still refresh data.
      // `revalidate: 60` tells Next to revalidate this fetch every 60 seconds.
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProduct(id: string): Promise<Product> {
  try {
    const res = await fetch(`${API_BASE_URL}${ENDPOINTS.PRODUCT_BY_ID(id)}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE_URL}${ENDPOINTS.CATEGORIES}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    const res = await fetch(
      `${API_BASE_URL}${ENDPOINTS.PRODUCTS_BY_CATEGORY(category)}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products by category");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
}
