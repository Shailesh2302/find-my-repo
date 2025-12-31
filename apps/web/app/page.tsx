"use client";

import { useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    window.location.href =
      `${process.env.NEXT_PUBLIC_API_URL}/auth/github`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <h1 className="text-2xl font-semibold tracking-tight">
          Find My Repo
        </h1>

        <p className="mt-2 text-sm text-white/60">
          Discover open-source repositories you can contribute to.
        </p>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-medium transition hover:bg-indigo-500 disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Connecting to GitHub…
            </>
          ) : (
            "Continue with GitHub"
          )}
        </button>
      </div>
    </main>
  );
}
