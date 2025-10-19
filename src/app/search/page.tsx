import { Suspense } from "react";
import SearchResults from "./SearchResults";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export const metadata = {
  title: "Search - Shoply",
  description: "Search for products",
};

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
