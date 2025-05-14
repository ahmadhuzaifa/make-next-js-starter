"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            M
          </div>
          <h1 className="text-3xl font-bold">make.inc</h1>
        </div>

        <div className="max-w-xl">
          <h2 className="text-xl font-semibold mb-4">
            Build your next product faster
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            make.inc provides the tools, components, and resources to help
            startups and developers launch production-ready applications in
            days, not months.
          </p>
        </div>
      </main>
    </div>
  );
}
