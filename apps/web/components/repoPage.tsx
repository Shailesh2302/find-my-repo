"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RepoPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
          <p className="text-sm text-white/60">Preparing your dashboard…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <div className="mx-auto max-w-5xl px-8 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">
          Repository Dashboard
        </h1>

        <p className="mt-2 text-sm text-white/60">
          Start exploring repositories curated for contribution.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-xl font-medium">Discover Open Source Projects</h2>

          <p className="mt-2 max-w-xl text-sm text-white/60">
            Browse trending and active repositories based on issues, activity,
            and community health.
          </p>

          <Link
            href="/repo/discover"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium transition hover:bg-indigo-500"
          >
            Go to Discover
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
