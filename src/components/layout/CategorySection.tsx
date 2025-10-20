import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/api";
import { capitalizeFirstLetter } from "@/lib/utils";
import { CATEGORY_DISPLAY_MAP, CATEGORY_URL_MAP } from "@/lib/constants";

export default async function CategorySection({
  hideDescription,
}: {
  hideDescription?: boolean;
}) {
  const categories = await getCategories();

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/categories/${CATEGORY_URL_MAP[category] || category}`}
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
            {CATEGORY_DISPLAY_MAP[category] || capitalizeFirstLetter(category)}
          </h3>
          {!hideDescription ? (
            <p className="text-base font-semibold text-gray-700">
              {category === "electronics"
                ? "Latest gadgets, devices, and tech essentials"
                : category === "jewelery"
                ? "Elegant rings, necklaces, and fine jewelry"
                : category === "men's clothing"
                ? "Trendy shirts, jackets, and men's fashion"
                : category === "women's clothing"
                ? "Stylish dresses, tops, and women's apparel"
                : "Shop our collections"}
            </p>
          ) : null}
        </Link>
      ))}
    </div>
  );
}
