export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-red-600 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}
