"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "../../../lib/api";

interface Repository {
  id: string;
  name: string;
  nameWithOwner: string;
  url: string;
  description: string | null;
  isFork: boolean;
  isPrivate: boolean;
  pushedAt: string;
  stargazerCount: number;
  forkCount: number;
  issues: {
    totalCount: number;
  };
  primaryLanguage: {
    name: string;
  } | null;
  owner: {
    login: string;
    id: string;
    url: string;
  };
}

export default function DiscoverPage() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchAPI("/repo/discover");
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : (data.repos ?? []));
      } catch (e) {
        setError("Unable to load repositories");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center">
        <div className="text-center">
          <div className="h-10 w-10 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60">Loading repositories…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center">
        <div className="border border-red-500/30 bg-red-500/10 px-6 py-4 rounded-lg text-red-400">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Discover Repositories
          </h1>
          <p className="text-white/60 mt-3">
            Explore active open-source projects worth contributing to
          </p>

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
            <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
            {repos.length} repositories found
          </div>
        </div>

        {/* Grid */}
        {repos.length === 0 ? (
          <p className="text-center text-white/50 py-24">
            No repositories found
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition"
              >
                {/* Repo title */}
                <div className="mb-3">
                  <h3 className="font-medium text-lg truncate">
                    {repo.nameWithOwner}
                  </h3>
                  <p className="text-xs text-white/50">by {repo.owner.login}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 line-clamp-3 mb-4">
                  {repo.description ?? "No description provided"}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-xs text-white/60 mb-4">
                  {repo.primaryLanguage && (
                    <span>🟢 {repo.primaryLanguage.name}</span>
                  )}
                  <span>⭐ {repo.stargazerCount}</span>
                  <span>🍴 {repo.forkCount}</span>
                  <span>🐞 {repo.issues.totalCount}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>
                    Updated {new Date(repo.pushedAt).toLocaleDateString()}
                  </span>

                  <span className="group-hover:text-white transition">
                    View →
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
