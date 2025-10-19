import { EmptyStateProps } from "./types";

export default function EmptyState({
  icon = "📦",
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
