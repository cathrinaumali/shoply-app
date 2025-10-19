"use client";

import { useState, FormEvent, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/api";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const [debouncedInputValue] = useDebounce(inputValue, 300); // 300ms debounce
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // Keep input in sync with the URL when on /search, otherwise clear it on navigation
  useEffect(() => {
    if (pathname === "/search") {
      const q = searchParams?.get("q") ?? "";
      setQuery(q);
      setInputValue(q);
    } else {
      setQuery("");
      setInputValue("");
      setSuggestions([]);
      setIsFocused(false);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!debouncedInputValue) {
      setSuggestions([]);
      return;
    }

    let mounted = true;
    const fetchProducts = async () => {
      const products = await getProducts();

      const filteredSuggestions = products
        ?.filter((item) =>
          item.title.toLowerCase().includes(debouncedInputValue.toLowerCase())
        )
        .map((item) => item.title);
      if (mounted) {
        setSuggestions(filteredSuggestions);
      }
    };

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, [debouncedInputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setQuery(event.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setQuery(suggestion);
    setSuggestions([]);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  return (
    <div className="relative flex-1 max-w-lg">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search products..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoComplete="off"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)} // Delay to allow click
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>
      {isFocused && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition-colors text-gray-900"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
