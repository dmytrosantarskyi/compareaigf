export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Comparison Not Found</h1>
        <p className="text-slate-400 mb-8">
          The comparison you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
