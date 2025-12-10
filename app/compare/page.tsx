import Link from "next/link";
import { getAllComparisons } from "@/data/apps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All AI Girlfriend App Comparisons | Side-by-Side Comparisons",
  description: "Compare any two AI girlfriend apps side-by-side. Find detailed comparisons of features, prices, and capabilities.",
};

export default function ComparePage() {
  const comparisons = getAllComparisons();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">All App Comparisons</h1>
      <p className="text-gray-400 mb-8">Compare any two AI girlfriend apps side-by-side to find the perfect match for you.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comparisons.map((comparison) => {
          const [app1, app2] = comparison.split('-vs-');
          return (
            <Link
              key={comparison}
              href={`/compare/${comparison}`}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-pink-500 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {app1.charAt(0).toUpperCase() + app1.slice(1)} vs {app2.charAt(0).toUpperCase() + app2.slice(1)}
              </h2>
              <p className="text-gray-400 text-sm">Compare features, prices, and capabilities</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
