import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";
import Button from "@/components/ui/Button";

export default function EmptyCart() {
  return (
    <EmptyState
      icon="🛒"
      title="Your cart is empty"
      description="Looks like you haven't added any items to your cart yet. Start shopping to fill it up!"
      action={
        <Link href="/products">
          <Button variant="primary" size="lg">
            Start Shopping
          </Button>
        </Link>
      }
    />
  );
}
