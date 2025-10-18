import Link from "next/link";
import { getCategories } from "@/lib/api";
import { capitalizeFirstLetter } from "@/lib/utils";

export const metadata = {
  title: "Categories - TMI Shop",
  description: "Browse products by category",
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Categories</h1>
        <p className="text-gray-600">Browse products by category</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${category}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 text-center group"
          >
            <div className="text-6xl mb-4">
              {category === "electronics" && "💻"}
              {category === "jewelery" && "💎"}
              {category === "men's clothing" && "👔"}
              {category === "women's clothing" && "👗"}
            </div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {capitalizeFirstLetter(category)}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
