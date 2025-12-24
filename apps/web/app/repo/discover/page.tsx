"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "../../../lib/api";

export default function Page() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetchAPI("/repo/discover");
        const data = await res.json();

        console.log(data);

        setRepos(Array.isArray(data) ? data : (data.repos ?? []));
      } catch (err) {
        setError("Failed to load repos");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Discover Repositories</h1>
      {repos.length === 0 && <p>No repos found</p>}
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="p-6">
            <div className="bg-blue-950">
              <strong>{repo.name}</strong>
              <p>{repo.description}</p>
              <p className="bg-cyan-400">{repo.url ?? "No Url"}</p>
              <p className="bg-amber-400">{repo.forkCount ?? "No forkCount"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
