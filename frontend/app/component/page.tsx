import React from 'react';
import Link from 'next/link';

export default function TemporaryComponentPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black p-8">
      <div className="max-w-md w-full p-8 rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 transition-all duration-300">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          Temporary Component Page
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          This is a temporary page created at <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-pink-600 dark:text-pink-400 font-mono text-xs">app/component/page.tsx</code>.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
