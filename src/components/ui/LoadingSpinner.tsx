export default function LoadingSpinner({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div
        className={`${sizes[size]} border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      ></div>
    </div>
  );
}
