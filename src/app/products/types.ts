import { Product } from "@/types/product";

export interface ProductsClientProps {
  products: Product[];
  hideCategory?: boolean;
}

export interface ProductDetailClientProps {
  product: Product;
}
