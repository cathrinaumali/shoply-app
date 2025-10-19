import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/api";
import { capitalizeFirstLetter } from "@/lib/utils";

export const metadata = {
  title: "Categories - Shoply",
  description: "Browse products by category",
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-600">Browse products by category</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="group relative"
            >
              <Image
                src={
                  category === "electronics"
                    ? "/categories/electronics.jpg"
                    : category === "jewelery"
                    ? "/categories/jewelry.jpg"
                    : category === "men's clothing"
                    ? "/categories/mens-clothing.jpg"
                    : "/categories/womens-clothing.jpg"
                }
                alt={capitalizeFirstLetter(category)}
                width={400}
                height={400}
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <span className="absolute inset-0"></span>
                {capitalizeFirstLetter(category)}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
