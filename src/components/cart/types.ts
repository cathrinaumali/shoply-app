import { CartItem } from "@/types/cart";

export interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CartItemProps {
  item: CartItem;
  compact?: boolean;
}
