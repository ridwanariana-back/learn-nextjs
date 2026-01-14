export default function LoadingBerita() {
  return (
    <div className="p-10 max-w-4xl mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-24 bg-gray-100 rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}